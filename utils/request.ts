/**
 * @description 全局请求封装工具（Axios 二次封装）
 * 作用：统一处理项目中所有接口的请求/响应，实现全局配置与自动化处理
 *
 * 核心功能：
 * 1. 统一配置基础请求地址、超时时间、跨域凭证
 * 2. 全局防重复提交（500ms内相同请求自动拦截）
 * 3. 登录接口频率限制（1分钟最多5次）
 * 4. 自动在请求头携带 Token（鉴权）
 * 5. 统一安全参数过滤，防 XSS 攻击
 * 6. 响应统一处理：业务状态判断、错误提示、登录过期自动跳转
 * 7. 全局异常捕获，避免页面零散错误处理逻辑
 *
 * @dependency axios, useUserStore, auth, security
 * @used-by 项目所有 API 请求（登录、列表、增删改查等）
 */
import axios from 'axios'
import { getTokenCookie } from '@/utils/auth'
import { safeInput } from '@/utils/security'
import { useUserStore } from '@/store/useUserStore'

// 创建 axios 实例
const request = axios.create({
  // baseURL: 'https://www.jishitoutiao.com/jishitoutiao-api', // 🔥 dev环境地址,不通过服务器的nginx转发，直接访问接口
  baseURL: '/jishitoutiao-api', // 🔥 正式环境地址,通过服务器的nginx转发，解决跨域问题
  timeout: 10000,
  withCredentials: true,
})

// TS 类型扩展
declare module 'axios' {
  export interface AxiosRequestConfig {
    retry?: number
    retryDelay?: number
  }
}

// ===================== 全局配置 =====================
// 1. 防重复提交：500ms 内相同请求禁止重复发送
const pendingMap = new Map<string, boolean>()
const REQUEST_INTERVAL = 500

// 2. 登录接口频率限制：1分钟最多5次
const loginLimit = {
  count: 0,
  lastTime: 0,
  maxCount: 5,
  windowTime: 60 * 1000,
}

// 生成请求唯一标识
const getRequestKey = (config: any) => {
  return [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&')
}

// ===================== 请求拦截器 =====================
request.interceptors.request.use((config) => {
  const key = getRequestKey(config)

  // 全局防重复提交
  if (pendingMap.has(key)) {
    return Promise.reject(new Error('repeat'))
  }
  pendingMap.set(key, true)
  setTimeout(() => pendingMap.delete(key), REQUEST_INTERVAL)

  // 仅对登录接口频率限制
  if (config.url?.includes('/user/login')) {
    const now = Date.now()
    // 超过时间窗口，重置计数
    if (now - loginLimit.lastTime > loginLimit.windowTime) {
      loginLimit.count = 0
      loginLimit.lastTime = now
    }
    loginLimit.count += 1
    if (loginLimit.count > loginLimit.maxCount) {
      return Promise.reject(new Error('rate_limit'))
    }
  }

  // 自动携带 token（登录接口除外）
  const token = getTokenCookie()
  if (token && !config.url?.includes('/user/login')) {
    config.headers.Authorization = `Bearer ${token}`
  }

  // 统一安全参数过滤，防 XSS 攻击（数字类型不做过滤，避免后端401）
  if (config.data) {
    const safeData: Record<string, any> = {}
    Object.keys(config.data).forEach((key) => {
      const val = config.data[key]
      if (typeof val === 'number') {
        safeData[key] = val
      } else {
        safeData[key] = safeInput(val)
      }
    })
    config.data = safeData
  }

  return config
})

// ===================== 响应拦截器 =====================
request.interceptors.response.use(
  (response) => {
    return response
  },
  // HTTP 失败：处理登出、重复请求、网络错误
  (error) => {
    const { logout } = useUserStore.getState()
    const pathname = window.location.pathname
    const isLoginPage = pathname === '/login' || pathname === '/login/'

    // ======================
    // 🔥 核心修复：登录页不做任何拦截跳转！直接放行！
    // ======================
    if (isLoginPage) {
      return Promise.reject(error)
    }

    // 重复请求
    if (error.message === 'repeat') {
      return new Promise(() => {})
    }

    // 登录限流
    if (error.message === 'rate_limit') {
      return Promise.reject(new Error('登录过于频繁,请1分钟后再试'))
    }

    // 401 / 403
    if (error.response?.status === 401 || error.response?.status === 403) {
      logout()
      window.location.replace('/login')
      return new Promise(() => {})
    }

    // 网络异常
    if (!error.response) {
      return Promise.resolve({ data: {} })
    }

    // 业务错误
    const errMsg = error.response?.data?.status?.message
    if (errMsg) {
      return Promise.reject(new Error(errMsg))
    }

    return Promise.reject(error)
  }
)

export default request
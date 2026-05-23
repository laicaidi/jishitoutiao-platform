// 全局登录状态管理（Zustand）
// 作用：管理项目的 token 状态，全局共享（登录、退出）
// 注意：不做持久化，token 唯一存在 Cookie 中
import { create } from 'zustand'
import { removeTokenCookie, setTokenCookie } from '@/utils/auth'

// 状态类型定义
interface UserState {
  token: string | null       // 登录 token（仅状态，不持久化）
  setToken: (token: string) => void  // 登录成功，更新 token
  logout: () => void         // 退出登录
}

// 创建全局状态（无 persist，不存 localStorage）
export const useUserStore = create<UserState>()((set) => ({

  // 初始状态
  token: null,

  // 登录成功后调用
  setToken: (token) => {
    set({ token })
    setTokenCookie(token) // 👈 保存到 Cookie，让 middleware 能识别
  },

  // 退出登录
  logout: () => {
    set({ token: null })
    removeTokenCookie()
  },
}))
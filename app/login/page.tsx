'use client'

import { Form, Input, Button, Card, Typography, message } from 'antd'
import { useUserStore } from '@/store/useUserStore'
import { loginApi, getMetaApi } from '@/api'
import md5 from 'md5'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMetaStore } from '@/store/useMetaStore'
import { safeInput } from '@/utils/security'

const { Title } = Typography

export default function Login() {
  // ====================== 全局状态 & 路由 ======================
  /** 用户状态管理：设置token */
  const { setToken } = useUserStore()
  /** 全局元数据状态：设置系统基础数据 */
  const metaStore = useMetaStore()
  /** 路由跳转工具 */
  const router = useRouter()
  /** 表单实例：用于表单校验、获取值 */
  const [form] = Form.useForm()

  // ====================== 验证码相关状态 ======================
  /** 用户输入的验证码 */
  const [captcha, setCaptcha] = useState('')
  /** 系统生成的验证码 */
  const [captchaCode, setCaptchaCode] = useState('')

  // ====================== 工具方法 ======================
  /**
   * 生成随机4位大写字母验证码
   */
  const generateCaptcha = () => {
    const code = Math.random().toString(36).slice(2, 6).toUpperCase()
    setCaptchaCode(code)
  }

  // ====================== 生命周期 ======================
  /** 页面加载时，自动生成一次验证码 */
  useEffect(() => {
    generateCaptcha()
  }, [])

  // ====================== 登录核心逻辑 ======================
  /**
   * 登录按钮点击事件
   * 1. 表单校验
   * 2. 验证码校验
   * 3. 密码MD5加密 + base64编码
   * 4. 调用登录接口
   * 5. 处理登录结果
   * 6. 保存token + 加载元数据 + 跳转首页
   */
  const handleLogin = async () => {
    try {
      // 1. 执行表单必填项校验
      const values = await form.validateFields()

      // 2. 校验验证码是否正确（不区分大小写）
      if (values.captcha.toUpperCase() !== captchaCode) {
        message.error('验证码错误')
        generateCaptcha()
        return
      }

      // ======================
      // 【安全过滤】XSS + SQL注入防护
      // ======================
      const safeUsername = safeInput(values.username)
      const safePassword = safeInput(values.password)

      // 3. 密码加密：先MD5，再base64（与后台规则保持一致）
      const encryptedPwd = btoa(md5(safePassword))

      // 4. 调用登录接口
      const res = await loginApi(safeUsername, encryptedPwd)
      const resData = res.data

      // 5. 登录失败：动态读取后端返回的 message，不写死
      if (!resData.status.success) {
        const msg = resData.status.message || '登录失败'
        message.error(msg)
        return
      }

      // 6. 登录成功：保存token到状态 + Cookie，提示固定为登录成功
      setToken(resData.auth.access_token)
      message.success('登录成功')

      // 登录成功后加载全局元数据（分类、来源等）
      const metaRes = await getMetaApi()
      metaStore.setMeta(metaRes.data.meta)

      // 跳转到首页
      router.push('/crawler-source')

    } catch (err: any) {
      // ======================
      // 异常处理：优先读取后端返回的真实错误信息
      // ======================
      try {
        // 如果是接口返回的业务错误
        if (err?.response?.data?.status?.message) {
          message.error(err.response.data.status.message)
        }
        // 如果是接口抛出的错误信息
        else if (err?.message) {
          message.error(err.message)
        }
        // 兜底错误
        else {
          message.error('登录失败，请稍后重试')
        }
      } catch (e) {
        message.error('登录失败，请稍后重试')
      }
    }
  }

  // ====================== 页面渲染 ======================
  return (
    // 🔥 只加了这一个单词：suppressHydrationWarning
    <div suppressHydrationWarning style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0f121a',
      position: 'relative',
    }}>
      {/* 页面背景SVG渐变 + 装饰图形 */}
      <svg style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }} viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="skyDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f121a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#skyDark)" />
        <g fill="#0b0e16" opacity="0.85">
          <rect x="100" y="400" width="140" height="680" />
          <rect x="290" y="320" width="100" height="760" />
          <rect x="440" y="370" width="110" height="710" />
          <rect x="600" y="280" width="140" height="800" />
          <rect x="790" y="410" width="100" height="670" />
          <rect x="950" y="310" width="130" height="770" />
          <rect x="1140" y="360" width="100" height="720" />
          <rect x="1290" y="410" width="110" height="670" />
          <rect x="1450" y="340" width="100" height="740" />
          <rect x="1600" y="390" width="130" height="690" />
          <rect x="1750" y="420" width="120" height="660" />
        </g>
      </svg>

      {/* 登录卡片主体 */}
      <Card style={{
        width: 420,
        background: 'rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.12)',
        zIndex: 10,
        padding: '40px 36px',
      }}>
        {/* 标题区域 */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Title level={2} style={{ color: '#fff', margin: 0 }}>即时头条</Title>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: 10 }}>综合管理平台</p>
        </div>

        {/* 登录表单 */}
        <Form form={form} layout="vertical">
          {/* 用户名输入框 */}
          <Form.Item name="username" rules={[{ required: true, message: '请输入账号' }]}>
            <Input placeholder="请输入账号" size="large" style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
            }} />
          </Form.Item>

          {/* 密码输入框 */}
          <Form.Item name="password" rules={[
            { required: true, message: '请输入密码' },
            { min: 6, message: '密码至少6位' }
          ]}>
            <Input.Password placeholder="请输入密码" size="large" style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
            }} />
          </Form.Item>

          {/* 验证码输入框 + 验证码图片 */}
          <Form.Item name="captcha" rules={[{ required: true, message: '请输入验证码' }]}>
            <div style={{ display: 'flex', gap: 10 }}>
              <Input
                placeholder="验证码"
                size="large"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#fff',
                }}
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
              />
              <div onClick={generateCaptcha} style={{
                width: 120,
                height: 40,
                background: '#1e293b',
                color: '#fff',
                textAlign: 'center',
                lineHeight: '40px',
                borderRadius: 6,
                cursor: 'pointer',
                userSelect: 'none',
              }}>
                {captchaCode}
              </div>
            </div>
          </Form.Item>

          {/* 登录按钮 */}
          <Form.Item>
            <Button type="primary" onClick={handleLogin} block size="large">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
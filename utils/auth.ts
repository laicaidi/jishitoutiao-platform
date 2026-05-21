/**
 * 获取 Cookie 中的 token
 */
export function getTokenCookie() {
  const value = `; ${document.cookie}`
  const parts = value.split(`; token=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
}

/**
 * 将 token 存入 Cookie
 */
export function setTokenCookie(token: string) {
  const isProduction = process.env.NODE_ENV === 'production'

  document.cookie = `token=${token}; path=/; SameSite=Lax; ${isProduction ? 'Secure;' : ''}`.replace(/\s+/g, ' ')
}

/**
 * 退出登录：清除 Cookie 中的 token（🔥 加强版）
 */
export function removeTokenCookie() {
  const isProduction = process.env.NODE_ENV === 'production'

  // 🔥 关键：删除 .jishitoutiao.com 根域下所有 token，确保删干净
  document.cookie = `token=; path=/; domain=.jishitoutiao.com; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; ${isProduction ? 'Secure;' : ''}`.replace(/\s+/g, ' ')
  document.cookie = `token=; path=/; domain=www.jishitoutiao.com; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; ${isProduction ? 'Secure;' : ''}`.replace(/\s+/g, ' ')
  document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; ${isProduction ? 'Secure;' : ''}`.replace(/\s+/g, ' ')
}
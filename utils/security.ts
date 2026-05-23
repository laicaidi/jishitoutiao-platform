/**
 * XSS 攻击过滤
 * 转义 HTML 特殊字符，过滤恶意脚本
 */
export function xssFilter(str: string): string {
  if (!str) return ''
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/javascript:/gi, '')
    .replace(/script/gi, '')
    .replace(/on\w+=/gi, '')
}

/**
 * SQL 注入过滤
 * 前端兜底防护，过滤危险 SQL 关键字
 */
export function sqlFilter(str: string): string {
  if (!str) return ''
  const blackList = /union|select|insert|delete|update|drop|alter|sleep|--|#|\/\*|\*\/|;/gi
  return str.replace(blackList, '')
}

/**
 * 统一安全过滤（XSS + SQL）
 * 所有用户输入统一使用这个方法
 */
export function safeInput(str: string): string {
  return sqlFilter(xssFilter(str))
}
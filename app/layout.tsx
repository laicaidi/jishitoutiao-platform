// ==============================================
// 全局根布局（最终无闪烁 + TS 无报错版）
// ==============================================
import 'antd/dist/reset.css'
import './globals.css'
import type { Metadata } from 'next'
import QueryProvider from '@/providers/QueryProvider'
import GlobalProtect from './components/GlobalProtect'
import AuthGuard from './AuthGuard';

export const metadata: Metadata = {
  title: {
    default: '即时头条管理平台',
    template: '%s | 即时头条',
  },
  description: '企业级内容管理系统',
  keywords: '管理后台,内容管理',
  authors: [{ name: '开发团队' }],
  icons: { icon: '/favicon.ico' },

  other: {
    'Content-Security-Policy': `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://www.jishoutt.com; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';`,
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta httpEquiv="Cache-Control" content="no-store, no-cache, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body style={{ margin: 0, padding: 0, minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
        <div suppressHydrationWarning>
          <GlobalProtect />
          <AuthGuard />
          <QueryProvider>{children}</QueryProvider>
        </div>
      </body>
    </html>
  );
}
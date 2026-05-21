// ######################################################################
// 🔥 QueryProvider 项目意义
// 作用：给整个项目提供【React Query 数据请求能力】
// 地位：项目的【全局网络请求管家】
// 没有它，所有页面都不能用 useQuery / useMutation 发请求
// ######################################################################

'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren, useState } from 'react'

export default function QueryProvider({ children }: PropsWithChildren) {

  // ==============================================
  // 1. 创建一个全局的【请求客户端】
  // 用 useState 包裹：保证全局只创建一次，不会重复创建
  // ==============================================
  const [queryClient] = useState(() =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5, // 数据缓存 5 分钟（避免重复请求）
          retry: 1,                 // 请求失败自动重试 1 次
        },
      },
    })
  )

  // ==============================================
  // 2. 用 Provider 包裹整个项目
  // 让所有页面、组件都能使用网络请求能力
  // ==============================================
  return (
    <QueryClientProvider client={queryClient}>
      
      {/* 项目所有页面（children 就是整个应用） */}
      {children}

      {/* 开发工具：调试接口请求用，上线自动不显示 */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
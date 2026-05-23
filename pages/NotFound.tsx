'use client'

import { Button, Result } from 'antd'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <Result
      status="404"
      title="404"
      subTitle="您访问的页面不存在"
      extra={
        <Button type="primary" onClick={() => router.push('/')}>
          返回首页
        </Button>
      }
    />
  )
}
'use client'

import { useEffect } from 'react'

// 全局防调试、防右键、防F12
export default function GlobalProtect() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // 禁止右键
      const blockContextMenu = (e: MouseEvent) => {
        e.preventDefault()
      }

      // 禁止调试快捷键
      const blockKeys = (e: KeyboardEvent) => {
        if (e.key === 'F12') e.preventDefault()
        if (e.ctrlKey && e.shiftKey && e.key === 'I') e.preventDefault()
        if (e.ctrlKey && e.key === 'U') e.preventDefault()
      }

      document.addEventListener('contextmenu', blockContextMenu)
      document.addEventListener('keydown', blockKeys)
    }
  }, [])

  return null
}
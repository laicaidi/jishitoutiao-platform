// app/page.tsx
'use client';

import { useEffect } from 'react';

export default function IndexPage() {
  // 一进网站，直接跳登录页
  useEffect(() => {
    window.location.replace('/login');
  }, []);

  return null;
}
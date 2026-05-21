'use client';
import { useEffect, useRef } from 'react';
import { useUserStore } from '@/store/useUserStore';

export default function AuthGuard() {
  const token = useUserStore((state) => state.token);
  const executed = useRef(false);

  useEffect(() => {
    // 只执行1次，绝对不重复渲染
    if (executed.current) return;
    executed.current = true;

    const path = window.location.pathname;

    // ======================
    // 🔥 放行：根目录 / + /login
    // ======================
    const whiteList = ['/', '/login', '/login/'];
    if (whiteList.includes(path)) {
      return;
    }

    // 其他页面 → 无token才跳登录
    if (!token) {
      window.location.replace('/login');
    }
  }, [token]);

  return null;
}
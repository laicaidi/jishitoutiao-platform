'use client';

import React, { useMemo, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Layout, Menu, Button, Tooltip } from 'antd'
import {
  LogoutOutlined,
  AppstoreOutlined,
  BugOutlined,
  ExperimentOutlined,
  StarOutlined,
  DatabaseOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useUserStore } from '@/store/useUserStore'

// 解构 Ant Design 布局基础组件
const { Header, Sider, Content } = Layout

/**
 * 布局组件入参类型
 * children: 页面业务内容
 */
interface MainLayoutProps {
  children: React.ReactNode
}

/**
 * 全局统一菜单配置
 * 结构：一级菜单(分组) → 二级菜单(路由页面)
 * 所有菜单路由在此统一维护，避免多处硬编码
 */
const menuItems = [
  {
    key: 'crawler',
    icon: <BugOutlined />,
    label: '爬虫系统',
    children: [
      { key: '/crawler-source', label: '源管理' },
      { key: '/crawler-category', label: '类别管理' },
      { key: '/crawler-management', label: '爬虫管理' },
      { key: '/crawler-user-agent', label: 'user-agent管理' },
      { key: '/crawler-dynamic-ip', label: '动态ip管理' },
      { key: '/crawler-set', label: '爬虫时间设置' },
    ],
  },
  {
    key: 'clean',
    icon: <ExperimentOutlined />,
    label: '清洗系统',
    children: [
      { key: '/information-source', label: '源数据' },
      { key: '/information-repetition-pond', label: '滤重池' },
      { key: '/information-repetition-result', label: '滤重结果' },
      { key: '/information-illegality-pond', label: '滤非法池' },
      { key: '/information-illegality-result', label: '滤非法结果' },
      { key: '/information-illegality-set', label: '滤非法设置' },
    ],
  },
  {
    key: 'weight',
    icon: <StarOutlined />,
    label: '权重得分系统',
    children: [
      { key: '/information-weight-source', label: '源数据' },
      { key: '/information-weight-sort', label: '得分数据' },
      { key: '/information-weight-filtrate', label: '筛选600' },
      { key: '/information-weight-set', label: '权重设置' },
    ],
  },
  {
    key: 'storage',
    icon: <DatabaseOutlined />,
    label: '存储系统',
    children: [
      { key: '/information-output-list', label: '资讯列表源' },
      { key: '/information-output-article', label: '资讯内容' },
      { key: '/information-comment', label: '评论内容' },
    ],
  },
  {
    key: 'user',
    icon: <UserOutlined />,
    label: '用户系统',
    children: [{ key: '/user', label: '用户列表' }],
  },
]

/**
 * 全局主布局组件
 * 实现：顶部导航 + 左侧菜单 + 右侧内容区
 * 菜单核心能力：路由自动高亮、路由自动展开对应一级分组
 */
const MainLayout = ({ children }: MainLayoutProps) => {
  const router = useRouter()
  // 获取当前路由，兼容服务端渲染返回 null 情况
  const pathname = usePathname() || '/'
  // 全局用户状态：退出登录方法
  const { logout } = useUserStore()

  /**
   * 核心：自动计算当前路由所属的一级菜单分组 key
   * 实现路由切换时自动展开对应菜单分组
   * 不使用硬编码映射表，从 menuItems 配置自动推导
   */
  const autoOpenKey = useMemo(() => {
    const currentGroup = menuItems.find((group) =>
      group.children?.some((item) => item.key === pathname)
    )
    // 默认展开爬虫系统分组
    return currentGroup ? currentGroup.key : 'crawler'
  }, [pathname])

  // 菜单展开状态（支持用户手动展开/关闭）
  const [openKeys, setOpenKeys] = useState<string[]>([autoOpenKey])

  // 路由变化时，自动切换到当前分组
  useMemo(() => {
    setOpenKeys([autoOpenKey])
  }, [autoOpenKey])

  // 允许用户手动控制菜单展开/关闭
  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys)
  }

  /**
   * 菜单点击跳转
   * @param key 目标路由路径
   */
  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key)
  }

  /**
   * 退出登录
   * 调用全局状态退出方法，跳转至登录页
   */
const handleLogout = () => {
  // 1. 先清空登录状态
  logout();

  // 2. 【强制浏览器硬跳转 + 刷新】解决地址变了页面不变的问题
  setTimeout(() => {
    window.location.href = '/login';
    window.location.reload();
  }, 80);
};

  return (
    // 全局布局：占满全屏，禁止外层滚动
    <Layout style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* 顶部导航栏 */}
      <Header
        style={{
          background: '#1f2937',
          height: 64,
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#fff', fontSize: 16, fontWeight: 600 }}>
          <AppstoreOutlined style={{ fontSize: 20, color: '#40a9ff' }} />
          <span>即时头条管理平台</span>
        </div>

        {/* 退出登录按钮 */}
        <Tooltip title="退出登录">
          <Button type="primary" danger icon={<LogoutOutlined />} onClick={handleLogout}>
            退出登录
          </Button>
        </Tooltip>
      </Header>

      <Layout style={{ flex: 1, overflow: 'hidden' }}>
        {/* 左侧菜单区域 */}
        <Sider width={220} theme="dark" style={{ height: '100%' }}>
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={[pathname]}       // 当前路由菜单高亮
            onClick={handleMenuClick}        // 菜单点击路由跳转
            openKeys={openKeys}              // 受控展开：自动展开当前分组
            onOpenChange={handleOpenChange}  // 响应用户手动展开/关闭
            style={{
              height: '100%',
              overflowY: 'auto',             // 菜单超长可滚动
              borderRight: 0,
            }}
            items={menuItems}
          />
        </Sider>

        {/* 右侧业务内容区域 */}
        <Content
          style={{
            margin: 16,
            padding: 20,
            background: '#fff',
            borderRadius: 8,
            flex: 1,
            overflow: 'auto',               // 内容区域独立滚动
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
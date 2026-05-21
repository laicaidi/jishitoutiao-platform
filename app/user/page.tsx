// 用户系统-用户列表页
// 功能说明：提供用户列表 查询 / 搜索查看 功能（无新增、编辑、删除）
// 提示规则：所有接口异常优先显示后端返回的 message，无 message 时显示默认异常
// 核心修复：axios 拦截器已抛出错误信息，catch 中直接读取 err.message 即可
'use client';

import { useState, useEffect } from 'react';
import {
  Table, Spin, message, Input, Button, Space, Pagination,
  Typography, Tag
} from 'antd';
import type { ColumnType } from 'antd/es/table';
import {
  getUserApi
} from '@/api';
import { safeInput } from '@/utils/security';
import MainLayout from '@/layouts/MainLayout';

const { Text } = Typography;

// ==========================
// 常量定义
// ==========================
/** 每页显示条数 */
const PAGE_SIZE = 10;

// ==========================
// 类型定义（严格按线上返回结构）
// ==========================
interface UserItem {
  user_id: string;               // 用户id
  username: string;              // 用户名
  phone: string;                 // 手机号
  sex: string;                   // 性别
  head_portrait: string;         // 头像
  registration_time: string;     // 注册时间
  roles: string[];               // 角色数组
  last_update?: string;          // 最后更新
}

// ==========================
// 页面主组件
// ==========================
export default function UserListPage() {
  // ==========================
  // 状态管理
  // ==========================
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<UserItem[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const [pageNum, setPageNum] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  // ==========================
  // 获取列表数据 → 已修复：res.data.data.list
  // ==========================
  const fetchList = async () => {
    try {
      setLoading(true);
      const res = await getUserApi(safeInput(keyword), pageNum);
      // ✅ 完全按你给的后台结构解析
      setDataSource(res.data?.data?.list || []);
      setTotal(res.data?.data?.total_record || 0);
    } catch (err: any) {
      message.error(err?.message || '网络异常，加载失败');
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // 搜索
  // ==========================
  const handleSearch = () => {
    setPageNum(1);
    fetchList();
  };

  // 页码切换刷新
  useEffect(() => {
    fetchList();
  }, [pageNum]);

  // ==========================
  // 表格列（角色字段正确解析）
  // ==========================
  const columns: ColumnType<UserItem>[] = [
    {
      title: '序号',
      key: 'index',
      width: 80,
      align: 'center',
      render: (_, __, index) => (pageNum - 1) * PAGE_SIZE + index + 1
    },
    { title: '用户ID', dataIndex: 'user_id', width: 260 },
    { title: '用户名', dataIndex: 'username', width: 160 },
    { title: '关联手机号', dataIndex: 'phone', width: 160 },
    { title: '性别', dataIndex: 'sex', width: 100 },
    { title: '注册时间', dataIndex: 'registration_time', width: 190 },
    {
      title: '角色',
      dataIndex: 'roles',
      width: 160,
      render: (roles: string[]) => {
        if (!roles || roles.length === 0) return <Text type="secondary">-</Text>;
        return roles.map(role => (
          <Tag key={role} color="blue">{role}</Tag>
        ));
      }
    },
  ];

  // ==========================
  // 页面渲染
  // ==========================
  return (
    <MainLayout>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        
        {/* 搜索区 */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Space>
            <Input
              placeholder="输入用户名/手机号/用户ID搜索"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onPressEnter={handleSearch}
              style={{ width: 280 }}
            />
            <Button type="primary" onClick={handleSearch}>搜索</Button>
          </Space>
        </div>

        {/* 表格区 */}
        <div style={{ flex: 1 }}>
          <Spin spinning={loading}>
            <Table
              rowKey="user_id"
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              scroll={{ y: 'calc(100vh - 260px)' }}
              bordered
              size="middle"
              tableLayout="fixed"
            />
          </Spin>
        </div>

        {/* 分页区 */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>共计 {total} 条记录</div>
          <Pagination
            current={pageNum}
            total={total}
            pageSize={PAGE_SIZE}
            onChange={setPageNum}
            showSizeChanger={false}
          />
        </div>
      </div>
    </MainLayout>
  );
}
// 存储系统-评论内容页面
// 功能说明：提供评论内容 列表查询 / 搜索查看 功能（无新增、编辑、删除）
// 提示规则：所有接口异常优先显示后端返回的 message，无 message 时显示默认异常
// 核心修复：axios 拦截器已抛出错误信息，catch 中直接读取 err.message 即可
'use client';

import { useState, useEffect } from 'react';
import {
  Table, Spin, message, Input, Button, Space, Pagination,
  Typography
} from 'antd';
import type { ColumnType } from 'antd/es/table';
import {
  getInformationCommentApi
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
// 类型定义（严格按库表 information_comment）
// ==========================
/** 评论表列表项类型 */
interface InformationCommentItem {
  comment_id: string;        // 评论id
  user_id: string;           // 用户id
  content: string;           // 评论内容
  output_article_id: string; // 资讯内容表id
  comment_time: string;      // 评论时间
  last_update: string;       // 最后更新时间
}

// ==========================
// 页面主组件
// ==========================
export default function InformationCommentPage() {
  // ==========================
  // 状态管理
  // ==========================
  /** 表格加载状态 */
  const [loading, setLoading] = useState<boolean>(false);
  /** 表格数据源 */
  const [dataSource, setDataSource] = useState<InformationCommentItem[]>([]);
  /** 搜索关键词 */
  const [keyword, setKeyword] = useState<string>('');
  /** 当前页码 */
  const [pageNum, setPageNum] = useState<number>(1);
  /** 数据总条数 */
  const [total, setTotal] = useState<number>(0);

  // ==========================
  // 【核心】获取列表数据
  // ==========================
  const fetchList = async () => {
    try {
      setLoading(true);
      const res = await getInformationCommentApi(safeInput(keyword), pageNum);
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

  // 页码变化刷新列表
  useEffect(() => {
    fetchList();
  }, [pageNum]);

  // ==========================
  // 表格列（严格按库表注释）
  // ==========================
  const columns: ColumnType<InformationCommentItem>[] = [
    {
      title: '序号',
      key: 'index',
      width: 80,
      align: 'center',
      render: (_, __, index) => (pageNum - 1) * PAGE_SIZE + index + 1
    },
    { title: '评论ID', dataIndex: 'comment_id', width: 220 },
    { title: '用户ID', dataIndex: 'user_id', width: 220 },
    { title: '评论内容', dataIndex: 'content', ellipsis: true, width: 320 },
    { title: '资讯内容ID', dataIndex: 'output_article_id', width: 220 },
    { title: '评论时间', dataIndex: 'comment_time', width: 190 },
    { title: '最后更新', dataIndex: 'last_update', width: 190 }
  ];

  // ==========================
  // 页面布局
  // ==========================
  return (
    <MainLayout>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* 搜索区 */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Space>
            <Input
              placeholder="输入评论内容/用户ID/资讯ID搜索"
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
              rowKey="comment_id"
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
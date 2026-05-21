'use client';

import { useState, useEffect } from 'react';
import {
  Table, Spin, message, Input, Button, Space, Pagination,
  Modal, Form, TableProps
} from 'antd';
import MainLayout from '@/layouts/MainLayout';

import {
  getCrawlerUserAgentApi,
  addCrawlerUserAgentApi,
  updateCrawlerUserAgentApi,
  deleteCrawlerUserAgentApi
} from '@/api/index';

import { safeInput } from '@/utils/security';

// 每页显示条数
const PAGE_SIZE = 10;

// 实体类型：严格对应 crawler_user_agent 表
interface CrawlerUserAgentItem {
  user_agent_id: string;
  accept: string;
  accept_encoding: string;
  accept_language: string;
  connection: string;
  host: string;
  user_agent: string;
  remark: string;
  last_update: string;
}

export default function CrawlerUserAgentPage() {
  // ==================== 搜索条件 ====================
  const [keyword, setKeyword] = useState<string>('');

  // ==================== 表格数据 ====================
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<CrawlerUserAgentItem[]>([]);
  const [pageNum, setPageNum] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  // ==================== 弹窗状态 ====================
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();
  const [addLoading, setAddLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // ==================== 删除数据 ====================
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState<CrawlerUserAgentItem | null>(null);

  // ==================== 获取列表 ====================
  const fetchList = async () => {
    try {
      setLoading(true);
      const params = {
        keyword: safeInput(keyword) || undefined,
        page_num: pageNum
      };
      const res = await getCrawlerUserAgentApi(params);
      setDataSource(res.data?.data?.list || []);
      setTotal(res.data?.data?.total_record || 0);
    } catch (err: any) {
      message.error(err?.message || '网络异常，加载失败');
    } finally {
      setLoading(false);
    }
  };

  // ==================== 搜索 ====================
  const handleSearch = () => {
    setPageNum(1);
    fetchList();
  };

  // ==================== 自动加载 & 分页 ====================
  useEffect(() => {
    fetchList();
  }, [pageNum]);

  // ==================== 打开编辑 ====================
  const handleEditOpen = (record: CrawlerUserAgentItem) => {
    editForm.setFieldsValue(record);
    setEditVisible(true);
  };

  // ==================== 打开新增 ====================
  const handleAddOpen = () => {
    addForm.resetFields();
    setAddVisible(true);
  };

  // ==================== 新增提交 ====================
  const handleAddSubmit = async () => {
    try {
      const values = await addForm.validateFields();
      setAddLoading(true);

      const data = {
        accept: safeInput(values.accept),
        accept_encoding: safeInput(values.accept_encoding),
        accept_language: safeInput(values.accept_language),
        connection: safeInput(values.connection),
        host: safeInput(values.host),
        user_agent: safeInput(values.user_agent),
        remark: safeInput(values.remark || ''),
      };

      const res = await addCrawlerUserAgentApi(data);
      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        setAddVisible(false);
        addForm.resetFields();
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      message.error(err?.message || '网络异常，新增失败');
    } finally {
      setAddLoading(false);
    }
  };

  // ==================== 修改提交 ====================
  const handleEditSubmit = async () => {
    try {
      const values = await editForm.validateFields();
      setEditLoading(true);

      const data = {
        accept: safeInput(values.accept),
        accept_encoding: safeInput(values.accept_encoding),
        accept_language: safeInput(values.accept_language),
        connection: safeInput(values.connection),
        host: safeInput(values.host),
        user_agent: safeInput(values.user_agent),
        remark: safeInput(values.remark || ''),
      };

      const res = await updateCrawlerUserAgentApi(values.user_agent_id, data);
      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        setEditVisible(false);
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      message.error(err?.message || '网络异常，修改失败');
    } finally {
      setEditLoading(false);
    }
  };

  // ==================== 打开删除确认 ====================
  const handleDeleteOpen = (record: CrawlerUserAgentItem) => {
    setDeleteRecord(record);
    setDeleteVisible(true);
  };

  // ==================== 确认删除 ====================
  const handleDeleteConfirm = async () => {
    if (!deleteRecord) return;
    try {
      setDeleteLoading(true);
      const res = await deleteCrawlerUserAgentApi(deleteRecord.user_agent_id);
      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        setDeleteVisible(false);
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      message.error(err?.message || '网络异常，删除失败');
    } finally {
      setDeleteLoading(false);
    }
  };

  // ==================== 表格列 ====================
  const columns: TableProps<CrawlerUserAgentItem>['columns'] = [
    {
      title: '序号',
      width: 60,
      align: 'center',
      render: (_, __, index) => (pageNum - 1) * PAGE_SIZE + index + 1
    },
    { title: 'user_agent_id', dataIndex: 'user_agent_id', width: 220 },
    { title: 'Accept', dataIndex: 'accept', width: 200, ellipsis: true },
    { title: 'Accept-Encoding', dataIndex: 'accept_encoding', width: 160 },
    { title: 'Accept-Language', dataIndex: 'accept_language', width: 180 },
    { title: 'Connection', dataIndex: 'connection', width: 120 },
    { title: 'Host', dataIndex: 'host', width: 160 },
    { title: 'User-Agent', dataIndex: 'user_agent', width: 320, ellipsis: true },
    { title: '备注', dataIndex: 'remark', width: 160, ellipsis: true },
    { title: 'last_update', dataIndex: 'last_update', width: 180 },
    {
      title: '操作',
      width: 160,
      fixed: 'right',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => handleEditOpen(record)}>修改</Button>
          <Button type="link" danger onClick={() => handleDeleteOpen(record)}>删除</Button>
        </Space>
      )
    }
  ];

  // ==================== 页面渲染 ====================
  return (
    <MainLayout>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        
        {/* 搜索区域 */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Input
              placeholder="搜索 User-Agent / 备注"
              style={{ width: 280 }}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onPressEnter={handleSearch}
            />
            <Button type="primary" onClick={handleSearch}>搜索</Button>
          </div>
          <Button type="primary" onClick={handleAddOpen}>新增User-Agent</Button>
        </div>

        {/* 表格 */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Spin spinning={loading} style={{ height: '100%' }}>
            <Table
              rowKey="user_agent_id"
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              scroll={{ y: 'calc(100vh - 320px)' }}
              bordered
              style={{ height: '100%' }}
            />
          </Spin>
        </div>

        {/* 分页 */}
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

      {/* 新增弹窗 */}
      <Modal
        open={addVisible}
        onCancel={() => { setAddVisible(false); addForm.resetFields(); }}
        title="新增User-Agent"
        width={700}
        destroyOnHidden
        footer={[
          <Button key="cancel" onClick={() => { setAddVisible(false); addForm.resetFields(); }}>取消</Button>,
          <Button key="submit" type="primary" loading={addLoading} onClick={handleAddSubmit}>确定</Button>
        ]}
      >
        <Form form={addForm} layout="vertical">
          <Form.Item label="Accept" name="accept" rules={[{ required: true, message: '请输入Accept' }]}>
            <Input placeholder="text/html,application/json" />
          </Form.Item>
          <Form.Item label="Accept-Encoding" name="accept_encoding" rules={[{ required: true, message: '请输入Accept-Encoding' }]}>
            <Input placeholder="gzip, deflate" />
          </Form.Item>
          <Form.Item label="Accept-Language" name="accept_language" rules={[{ required: true, message: '请输入Accept-Language' }]}>
            <Input placeholder="zh-CN,zh;q=0.9" />
          </Form.Item>
          <Form.Item label="Connection" name="connection" rules={[{ required: true, message: '请输入Connection' }]}>
            <Input placeholder="keep-alive" />
          </Form.Item>
          <Form.Item label="Host" name="host" rules={[{ required: true, message: '请输入Host' }]}>
            <Input placeholder="目标域名" />
          </Form.Item>
          <Form.Item label="User-Agent" name="user_agent" rules={[{ required: true, message: '请输入User-Agent' }]}>
            <Input placeholder="浏览器UA标识" />
          </Form.Item>
          <Form.Item label="备注" name="remark">
            <Input.TextArea rows={3} placeholder="可选" />
          </Form.Item>
        </Form>
      </Modal>

      {/* 修改弹窗 */}
      <Modal
        open={editVisible}
        onCancel={() => setEditVisible(false)}
        title="修改User-Agent"
        width={700}
        destroyOnHidden
        footer={[
          <Button key="cancel" onClick={() => setEditVisible(false)}>取消</Button>,
          <Button key="submit" type="primary" loading={editLoading} onClick={handleEditSubmit}>确定</Button>
        ]}
      >
        <Form form={editForm} layout="vertical">
          <Form.Item label="user_agent_id" name="user_agent_id">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Accept" name="accept" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Accept-Encoding" name="accept_encoding" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Accept-Language" name="accept_language" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Connection" name="connection" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Host" name="host" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="User-Agent" name="user_agent" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="备注" name="remark">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>

      {/* 删除确认 */}
      <Modal
        title="删除确认"
        open={deleteVisible}
        onCancel={() => setDeleteVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setDeleteVisible(false)}>取消</Button>,
          <Button key="delete" type="primary" danger loading={deleteLoading} onClick={handleDeleteConfirm}>确定删除</Button>
        ]}
        width={650}
      >
        <p><strong>确定要删除该 User-Agent 配置吗？</strong></p>
        <p><strong>user_agent_id:</strong>{deleteRecord?.user_agent_id}</p>
        <p><strong>Accept:</strong>{deleteRecord?.accept}</p>
        <p><strong>Accept-Encoding:</strong>{deleteRecord?.accept_encoding}</p>
        <p><strong>Accept-Language:</strong>{deleteRecord?.accept_language}</p>
        <p><strong>Connection:</strong>{deleteRecord?.connection}</p>
        <p><strong>Host:</strong>{deleteRecord?.host}</p>
        <p><strong>User-Agent:</strong>{deleteRecord?.user_agent}</p>
        <p><strong>备注:</strong>{deleteRecord?.remark}</p>
        <p style={{ color: '#ff4d4d', marginTop: 10 }}>此操作不可恢复！</p>
      </Modal>
    </MainLayout>
  );
}
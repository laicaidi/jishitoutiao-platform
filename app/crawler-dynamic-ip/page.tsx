'use client';

import { useState, useEffect } from 'react';
import {
  Table, Spin, message, Input, Button, Space, Pagination,
  Modal, Form, Select, TableProps, InputNumber
} from 'antd';
import MainLayout from '@/layouts/MainLayout';

import {
  getCrawlerDynamicIpApi,
  addCrawlerDynamicIpApi,
  updateCrawlerDynamicIpApi,
  deleteCrawlerDynamicIpApi
} from '@/api/index';

import { safeInput } from '@/utils/security';

// 每页显示条数
const PAGE_SIZE = 10;

// 实体类型：严格对应 crawler_dynamic_ip 表
interface CrawlerDynamicIpItem {
  dynamic_id: string;
  ip_address: string;
  port: number;
  server_address: string;
  anonymity: string;
  protocol: string;
  speed: string;
  connect_time: string;
  alive_duration: string;
  verify_time: string;
  last_update: string;
}

export default function CrawlerDynamicIpPage() {
  // ==================== 查询条件 ====================
  const [keyword, setKeyword] = useState<string>('');
  const [protocol, setProtocol] = useState<string>('');

  // ==================== 表格数据 ====================
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<CrawlerDynamicIpItem[]>([]);
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
  const [deleteRecord, setDeleteRecord] = useState<CrawlerDynamicIpItem | null>(null);

  // ==================== 获取列表 ====================
  const fetchList = async () => {
    try {
      setLoading(true);
      const params = {
        keyword: safeInput(keyword) || undefined,
        protocol: protocol || undefined,
        page_num: pageNum
      };
      const res = await getCrawlerDynamicIpApi(params);
      setDataSource(res.data?.data?.list || []);
      setTotal(res.data?.data?.total_record || 0);
    } catch (err: any) {
      message.error(err?.message || '网络异常,加载失败');
    } finally {
      setLoading(false);
    }
  };

  // ==================== 搜索按钮事件：重置页码并查询 ====================
  const handleSearch = () => {
    setPageNum(1);
    fetchList();
  };

  // ==================== 筛选条件变化时，重置页码并重新查询 ====================
  useEffect(() => {
    setPageNum(1);
    fetchList();
  }, [protocol]);

  // ==================== 页码变化时，重新查询 ====================
  useEffect(() => {
    fetchList();
  }, [pageNum]);

  // ==================== 打开编辑 ====================
  const handleEditOpen = (record: CrawlerDynamicIpItem) => {
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
        ip_address: safeInput(values.ip_address),
        port: values.port,
        server_address: safeInput(values.server_address || ''),
        anonymity: safeInput(values.anonymity || ''),
        protocol: safeInput(values.protocol),
        speed: safeInput(values.speed || ''),
        connect_time: safeInput(values.connect_time || ''),
        alive_duration: safeInput(values.alive_duration || ''),
        verify_time: safeInput(values.verify_time || ''),
      };

      const res = await addCrawlerDynamicIpApi(data);
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
      message.error(err?.message || '网络异常,新增失败');
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
        ip_address: safeInput(values.ip_address),
        port: values.port,
        server_address: safeInput(values.server_address || ''),
        anonymity: safeInput(values.anonymity || ''),
        protocol: safeInput(values.protocol),
        speed: safeInput(values.speed || ''),
        connect_time: safeInput(values.connect_time || ''),
        alive_duration: safeInput(values.alive_duration || ''),
        verify_time: safeInput(values.verify_time || ''),
      };

      const res = await updateCrawlerDynamicIpApi(values.dynamic_id, data);
      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        setEditVisible(false);
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      message.error(err?.message || '网络异常,修改失败');
    } finally {
      setEditLoading(false);
    }
  };

  // ==================== 打开删除确认 ====================
  const handleDeleteOpen = (record: CrawlerDynamicIpItem) => {
    setDeleteRecord(record);
    setDeleteVisible(true);
  };

  // ==================== 确认删除 ====================
  const handleDeleteConfirm = async () => {
    if (!deleteRecord) return;
    try {
      setDeleteLoading(true);
      const res = await deleteCrawlerDynamicIpApi(deleteRecord.dynamic_id);
      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        setDeleteVisible(false);
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      message.error(err?.message || '网络异常,删除失败');
    } finally {
      setDeleteLoading(false);
    }
  };

  // ==================== 表格列 ====================
  const columns: TableProps<CrawlerDynamicIpItem>['columns'] = [
    { title: '序号', width: 60, align: 'center', render: (_, __, index) => (pageNum - 1) * PAGE_SIZE + index + 1 },
    { title: '动态ip_id', dataIndex: 'dynamic_id', width: 220 },
    { title: 'IP地址', dataIndex: 'ip_address', width: 160 },
    { title: '端口号', dataIndex: 'port', width: 100 },
    { title: '服务器地址', dataIndex: 'server_address', width: 160 },
    { title: '是否匿名', dataIndex: 'anonymity', width: 120 },
    { title: '类型', dataIndex: 'protocol', width: 100 },
    { title: '速度', dataIndex: 'speed', width: 120 },
    { title: '连接时间', dataIndex: 'connect_time', width: 120 },
    { title: '存活时间', dataIndex: 'alive_duration', width: 120 },
    { title: '验证时间', dataIndex: 'verify_time', width: 120 },
    { title: 'last_update', dataIndex: 'last_update', width: 180 },
    {
      title: '操作', width: 160, fixed: 'right',
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
        
        {/* 查询区域 */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Input
              placeholder="搜索IP地址/服务器地址"
              style={{ width: 260 }}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onPressEnter={handleSearch}
            />

            <Select
              placeholder="请选择类型"
              value={protocol}
              onChange={setProtocol}
              style={{ width: 160 }}
              allowClear
              options={[
                { label: 'HTTP', value: 'HTTP' },
                { label: 'HTTPS', value: 'HTTPS' },
              ]}
            />

            <Button type="primary" onClick={handleSearch}>搜索</Button>
          </div>
          <Button type="primary" onClick={handleAddOpen}>新增动态IP</Button>
        </div>

        {/* 表格 */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Spin spinning={loading} style={{ height: '100%' }}>
            <Table
              rowKey="dynamic_id"
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

      {/* 新增弹窗 - 固定顶部+底部，中间滚动 */}
      <Modal
        open={addVisible}
        onCancel={() => { setAddVisible(false); addForm.resetFields(); }}
        title="新增动态IP"
        width={700}
        destroyOnHidden
        footer={null}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '70vh' }}>
          {/* 中间表单滚动区域 */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 0' }}>
            <Form form={addForm} layout="vertical">
              <Form.Item label="IP地址" name="ip_address" rules={[{ required: true }]}>
                <Input placeholder="例如:192.168.1.1" />
              </Form.Item>
              <Form.Item label="端口号" name="port" rules={[{ required: true }]}>
                <InputNumber style={{ width: '100%' }} min={1} max={65535} placeholder="例如:8080" />
              </Form.Item>
              <Form.Item label="服务器地址" name="server_address">
                <Input placeholder="例如:中国 北京" />
              </Form.Item>
              <Form.Item label="是否匿名" name="anonymity">
                <Input placeholder="例如:匿名/透明" />
              </Form.Item>
              <Form.Item label="类型" name="protocol" rules={[{ required: true }]}>
                <Select placeholder="请选择类型" options={[{ label: 'HTTP', value: 'HTTP' },{ label: 'HTTPS', value: 'HTTPS' }]} />
              </Form.Item>
              <Form.Item label="速度" name="speed">
                <Input placeholder="例如:1.2s" />
              </Form.Item>
              <Form.Item label="连接时间" name="connect_time">
                <Input placeholder="例如:0.5s" />
              </Form.Item>
              <Form.Item label="存活时间" name="alive_duration">
                <Input placeholder="例如:10分钟" />
              </Form.Item>
              <Form.Item label="验证时间" name="verify_time">
                <Input placeholder="例如:2025-01-01 00:00:00" />
              </Form.Item>
            </Form>
          </div>

          {/* 底部按钮固定 */}
          <div style={{ padding: '10px 0', borderTop: '1px solid #e8e8e8', textAlign: 'right' }}>
            <Space>
              <Button onClick={() => { setAddVisible(false); addForm.resetFields(); }}>取消</Button>
              <Button type="primary" loading={addLoading} onClick={handleAddSubmit}>确定</Button>
            </Space>
          </div>
        </div>
      </Modal>

      {/* 修改弹窗 - 固定顶部+底部，中间滚动 */}
      <Modal
        open={editVisible}
        onCancel={() => setEditVisible(false)}
        title="修改动态IP"
        width={700}
        destroyOnHidden
        footer={null}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '70vh' }}>
          {/* 中间表单滚动区域 */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 0' }}>
            <Form form={editForm} layout="vertical">
              <Form.Item label="动态ip_id" name="dynamic_id">
                <Input disabled />
              </Form.Item>
              <Form.Item label="IP地址" name="ip_address" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="端口号" name="port" rules={[{ required: true }]}>
                <InputNumber style={{ width: '100%' }} min={1} max={65535} />
              </Form.Item>
              <Form.Item label="服务器地址" name="server_address">
                <Input />
              </Form.Item>
              <Form.Item label="是否匿名" name="anonymity">
                <Input />
              </Form.Item>
              <Form.Item label="类型" name="protocol" rules={[{ required: true }]}>
                <Select options={[{ label: 'HTTP', value: 'HTTP' },{ label: 'HTTPS', value: 'HTTPS' }]} />
              </Form.Item>
              <Form.Item label="速度" name="speed">
                <Input />
              </Form.Item>
              <Form.Item label="连接时间" name="connect_time">
                <Input />
              </Form.Item>
              <Form.Item label="存活时间" name="alive_duration">
                <Input />
              </Form.Item>
              <Form.Item label="验证时间" name="verify_time">
                <Input />
              </Form.Item>
            </Form>
          </div>

          {/* 底部按钮固定 */}
          <div style={{ padding: '10px 0', borderTop: '1px solid #e8e8e8', textAlign: 'right' }}>
            <Space>
              <Button onClick={() => setEditVisible(false)}>取消</Button>
              <Button type="primary" loading={editLoading} onClick={handleEditSubmit}>确定</Button>
            </Space>
          </div>
        </div>
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
        <p><strong>确定要删除该动态IP配置吗?</strong></p>
        <p><strong>动态ip_id:</strong> {deleteRecord?.dynamic_id}</p>
        <p><strong>IP地址:</strong> {deleteRecord?.ip_address}</p>
        <p><strong>端口号:</strong> {deleteRecord?.port}</p>
        <p><strong>服务器地址:</strong> {deleteRecord?.server_address}</p>
        <p><strong>是否匿名:</strong> {deleteRecord?.anonymity}</p>
        <p><strong>类型:</strong> {deleteRecord?.protocol}</p>
        <p style={{ color: '#ff4d4d', marginTop: 10 }}>此操作不可恢复!</p>
      </Modal>
    </MainLayout>
  );
}
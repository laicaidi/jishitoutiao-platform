'use client';

import { useState, useEffect } from 'react';
import {
  Table, Spin, message, Input, Button, Space, Pagination,
  Modal, Form, TableProps
} from 'antd';
import MainLayout from '@/layouts/MainLayout';

import {
  getCrawlerSetApi,
  addCrawlerSetApi,
  updateCrawlerSetApi,
  deleteCrawlerSetApi
} from '@/api/index';

import { safeInput } from '@/utils/security';

// 每页显示条数
const PAGE_SIZE = 10;

// 实体类型：严格对应 crawler_set 表
interface CrawlerSetItem {
  sid: string;
  ckey: string;
  cvalue: string;
  remark: string;
  last_update: string;
}

export default function CrawlerSetPage() {
  // ==================== 查询条件 ====================
  const [keyword, setKeyword] = useState<string>('');

  // ==================== 表格数据 ====================
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<CrawlerSetItem[]>([]);
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
  const [deleteRecord, setDeleteRecord] = useState<CrawlerSetItem | null>(null);

  // ==================== 获取列表 ====================
  const fetchList = async () => {
    try {
      setLoading(true);
      const params = {
        keyword: safeInput(keyword) || undefined,
        page_num: pageNum
      };
      const res = await getCrawlerSetApi(params);
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

  // ==================== 页码变化时，重新查询 ====================
  useEffect(() => {
    fetchList();
  }, [pageNum]);

  // ==================== 打开编辑 ====================
  const handleEditOpen = (record: CrawlerSetItem) => {
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
        ckey: safeInput(values.ckey),
        cvalue: safeInput(values.cvalue),
        remark: safeInput(values.remark || ''),
      };

      const res = await addCrawlerSetApi(data);
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
        ckey: safeInput(values.ckey),
        cvalue: safeInput(values.cvalue),
        remark: safeInput(values.remark || ''),
      };

      const res = await updateCrawlerSetApi(values.sid, data);
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
  const handleDeleteOpen = (record: CrawlerSetItem) => {
    setDeleteRecord(record);
    setDeleteVisible(true);
  };

  // ==================== 确认删除 ====================
  const handleDeleteConfirm = async () => {
    if (!deleteRecord) return;
    try {
      setDeleteLoading(true);
      const res = await deleteCrawlerSetApi(deleteRecord.sid);
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
  const columns: TableProps<CrawlerSetItem>['columns'] = [
    { title: '序号', width: 70, align: 'center', render: (_, __, index) => (pageNum - 1) * PAGE_SIZE + index + 1 },
    { title: '设置id', dataIndex: 'sid', width: 240 },
    { title: '键', dataIndex: 'ckey', width: 180 },
    { title: '值', dataIndex: 'cvalue', width: 180 },
    { title: '备注', dataIndex: 'remark', width: 260 },
    { title: 'last_update', dataIndex: 'last_update', width: 200 },
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
              placeholder="搜索键/备注"
              style={{ width: 280 }}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onPressEnter={handleSearch}
            />
            <Button type="primary" onClick={handleSearch}>搜索</Button>
          </div>
          <Button type="primary" onClick={handleAddOpen}>新增爬虫设置</Button>
        </div>

        {/* 表格 */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Spin spinning={loading} style={{ height: '100%' }}>
            <Table
              rowKey="sid"
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
        title="新增爬虫设置"
        width={650}
        destroyOnHidden
        footer={null}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '60vh' }}>
          {/* 中间表单滚动区域 */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 0' }}>
            <Form form={addForm} layout="vertical">
              <Form.Item label="键" name="ckey" rules={[{ required: true, message: '请输入键' }]}>
                <Input placeholder="例如:interval" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="值" name="cvalue" rules={[{ required: true, message: '请输入值' }]}>
                <Input placeholder="例如:30" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="备注" name="remark">
                <Input placeholder="例如:爬虫执行间隔时间(秒)" style={{ width: '100%' }} />
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
        title="修改爬虫设置"
        width={650}
        destroyOnHidden
        footer={null}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '60vh' }}>
          {/* 中间表单滚动区域 */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 0' }}>
            <Form form={editForm} layout="vertical">
              <Form.Item label="设置id" name="sid">
                <Input disabled />
              </Form.Item>
              <Form.Item label="键" name="ckey" rules={[{ required: true, message: '请输入键' }]}>
                <Input style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="值" name="cvalue" rules={[{ required: true, message: '请输入值' }]}>
                <Input style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="备注" name="remark">
                <Input style={{ width: '100%' }} />
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
        width={600}
      >
        <p><strong>确定要删除该爬虫设置吗?</strong></p>
        <p><strong>设置id:</strong> {deleteRecord?.sid}</p>
        <p><strong>键:</strong> {deleteRecord?.ckey}</p>
        <p><strong>值:</strong> {deleteRecord?.cvalue}</p>
        <p style={{ color: '#ff4d4d', marginTop: 10 }}>此操作不可恢复!</p>
      </Modal>
    </MainLayout>
  );
}
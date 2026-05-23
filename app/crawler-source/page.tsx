// 首页：爬虫源管理列表页面
// 功能：列表展示、分页、搜索、新增、编辑、删除确认
'use client';

import { useState, useEffect } from 'react';
import {
  Table, Spin, message, Input, Button, Space, Pagination,
  Modal, Form, Input as FormInput, Popover, Typography
} from 'antd';
import type { ColumnType } from 'antd/es/table';
import { useUserStore } from '@/store/useUserStore';
import {
  getCrawlerSourceApi,
  addCrawlerSourceApi,
  updateCrawlerSourceApi,
  deleteCrawlerSourceApi
} from '@/api';
import { safeInput } from '@/utils/security';
import MainLayout from '@/layouts/MainLayout';

const { Text } = Typography;
// 移除写死的 PAGE_SIZE
// const PAGE_SIZE = 10;

// 爬虫源数据类型定义
interface CrawlerSourceItem {
  bid: string;
  bkey: string;
  bname: string;
  homepage: string;
  logo: string;
  remark: string;
  update_time: string;
}

// 新增/编辑表单数据类型
interface SourceFormData {
  bid?: string;
  bkey: string;
  bname: string;
  homepage?: string;
  remark?: string;
}

export default function Page() {
  // 获取全局用户令牌
  const token = useUserStore((state) => state.token);

  // ==================== 列表数据状态 ====================
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<CrawlerSourceItem[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const [pageNum, setPageNum] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  // 新增：从后台获取的每页条数
  const [pageSize, setPageSize] = useState<number>(10);

  // ==================== 新增弹窗状态 ====================
  const [addVisible, setAddVisible] = useState<boolean>(false);
  const [addLoading, setAddLoading] = useState<boolean>(false);
  const [addForm] = Form.useForm<SourceFormData>();

  // ==================== 编辑弹窗状态 ====================
  const [editVisible, setEditVisible] = useState<boolean>(false);
  const [editLoading, setEditLoading] = useState<boolean>(false);
  const [editForm] = Form.useForm<SourceFormData>();

  // ==================== 删除浮层状态 ====================
  const [openDeleteId, setOpenDeleteId] = useState<string | null>(null);
  const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({});

  // ==================== 获取爬虫源列表 ====================
  // 功能：请求列表数据，支持搜索和分页
  const fetchList = async () => {
    try {
      setLoading(true);
      const safeKw = safeInput(keyword);
      const res = await getCrawlerSourceApi(safeKw, pageNum);
      const list = res.data?.data?.list || [];
      const totalRecord = res.data?.data?.total_record || 0;
      // 从后台获取 page_size 赋值
      const pageSizeRes = res.data?.data?.page_size || 10;

      setDataSource(list);
      setTotal(totalRecord);
      setPageSize(pageSizeRes);
    } catch (err: any) {
      // ✅ 统一异常：优先显示后端返回的提示语
      message.error(err?.message || '数据加载失败');
    } finally {
      setLoading(false);
    }
  };

  // ==================== 新增爬虫源提交 ====================
  // 功能：表单校验 → 参数安全处理 → 调用新增接口 → 刷新列表
  const handleAdd = async () => {
    try {
      const params = await addForm.validateFields();
      setAddLoading(true);

      const safeParams = {
        bkey: safeInput(params.bkey),
        bname: safeInput(params.bname),
        homepage: params.homepage ? safeInput(params.homepage) : '',
        remark: params.remark ? safeInput(params.remark) : '',
      };

      const res = await addCrawlerSourceApi(safeParams);
      if (res.data?.status?.success) {
        message.success('新增成功');
        setAddVisible(false);
        addForm.resetFields();
        // ==================== 优化：统一调用搜索，重置页码为1并携带搜索条件 ====================
        handleSearch();
      } else {
        // 直接使用后端返回的错误提示文案
        message.error(res.data?.status?.message || '新增失败');
      }
    } catch (err: any) {
      // ✅ 核心修复：axios拦截器已抛出后端message，直接读取显示
      message.error(err?.message || '新增失败，网络异常');
    } finally {
      setAddLoading(false);
    }
  };

  // ==================== 编辑爬虫源提交 ====================
  // 功能：表单校验 → 参数安全处理 → 调用编辑接口 → 刷新列表
  const handleEdit = async () => {
    try {
      const params = await editForm.validateFields();
      setEditLoading(true);

      const safeParams = {
        bkey: safeInput(params.bkey),
        bname: safeInput(params.bname),
        homepage: params.homepage ? safeInput(params.homepage) : '',
        remark: params.remark ? safeInput(params.remark) : '',
      };

      const res = await updateCrawlerSourceApi(params.bid!, safeParams);
      if (res.data?.status?.success) {
        message.success('修改成功');
        setEditVisible(false);
        // ==================== 优化：统一调用搜索，重置页码为1并携带搜索条件 ====================
        handleSearch();
      } else {
        // 直接使用后端返回的错误提示文案
        message.error(res.data?.status?.message || '修改失败');
      }
    } catch (err: any) {
      // ✅ 核心修复：显示后端真实错误信息
      message.error(err?.message || '修改失败，网络异常');
    } finally {
      setEditLoading(false);
    }
  };

  // ==================== 删除爬虫源确认 ====================
  // 功能：调用删除接口 → 处理结果 → 关闭浮层 → 刷新列表
  const handleDeleteConfirm = async (record: CrawlerSourceItem) => {
    try {
      setLoadingMap(prev => ({ ...prev, [record.bid]: true }));
      const res = await deleteCrawlerSourceApi(record.bid);

      if (res.data?.status?.success) {
        message.success('删除成功');
        // ==================== 优化：统一调用搜索，重置页码为1并携带搜索条件 ====================
        handleSearch();
      } else {
        // 直接使用后端返回的错误提示文案
        message.error(res.data?.status?.message || '删除失败');
      }
    } catch (err: any) {
      // ✅ 核心修复：显示后端真实错误信息
      message.error(err?.message || '删除失败，网络异常');
    } finally {
      setLoadingMap(prev => ({ ...prev, [record.bid]: false }));
      setOpenDeleteId(null);
    }
  };

  // 打开编辑弹窗，并自动回填当前行数据
  const openEdit = (record: CrawlerSourceItem) => {
    editForm.setFieldsValue(record);
    setEditVisible(true);
  };

  // 监听页码变化，自动刷新列表
  useEffect(() => {
    fetchList();
  }, [pageNum]);

  // 搜索操作：重置为第一页并刷新列表
  const handleSearch = () => {
    setPageNum(1);
    fetchList();
  };

  // 表格列配置
  const columns: ColumnType<CrawlerSourceItem>[] = [
    {
      title: '序号',
      key: 'index',
      width: 80,
      align: 'center',
      // 分页序号自动计算
      render: (_, __, index) => (pageNum - 1) * pageSize + index + 1
    },
    { title: '源ID', dataIndex: 'bid', width: 100 },
    { title: '源Key', dataIndex: 'bkey', width: 160 },
    { title: '源名称', dataIndex: 'bname', width: 160 },
    { title: '网站首页', dataIndex: 'homepage', ellipsis: true },
    { title: '品牌Logo', dataIndex: 'logo', ellipsis: true, width: 160 },
    { title: '介绍', dataIndex: 'remark', ellipsis: true },
    { title: '更新时间', dataIndex: 'update_time', width: 180 },
    {
      title: '操作',
      width: 200,
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => openEdit(record)}>修改</Button>

          {/* 删除确认浮层：点击打开，互斥显示 */}
          <Popover
            open={openDeleteId === record.bid}
            onOpenChange={(vis) => setOpenDeleteId(vis ? record.bid : null)}
            trigger="click"
            placement="right"
            content={
              <div style={{ width: 280 }}>
                <div style={{ marginBottom: 8 }}>
                  <Text type="secondary">主键ID:</Text>
                  <Text>{record.bid}</Text>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <Text type="secondary">源Key:</Text>
                  <Text>{record.bkey}</Text>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <Text type="secondary">源名称:</Text>
                  <Text>{record.bname}</Text>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <Text type="secondary">介绍:</Text>
                  <Text>{record.remark || '无'}</Text>
                </div>
                <Space style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button size="small" onClick={() => setOpenDeleteId(null)}>取消</Button>
                  <Button
                    size="small"
                    type="primary"
                    danger
                    loading={loadingMap[record.bid]}
                    onClick={() => handleDeleteConfirm(record)}
                  >
                    确定
                  </Button>
                </Space>
              </div>
            }
          >
            <Button type="link" danger>删除</Button>
          </Popover>
        </Space>
      )
    }
  ];

  // ==================== 页面渲染 ====================
  return (
    <MainLayout>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* 搜索栏 + 新增按钮 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <Space>
            <Input
              placeholder="输入关键词搜索"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onPressEnter={handleSearch}
              style={{ width: 280 }}
            />
            <Button type="primary" onClick={handleSearch}>搜索</Button>
          </Space>
          {/* ✅ 只在这里加了 resetFields()，其余完全不动 */}
          <Button type="primary" onClick={() => { addForm.resetFields(); setAddVisible(true); }}>+ 新增</Button>
        </div>

        {/* 数据表格 */}
        <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
          <Spin spinning={loading} style={{ width: '100%', height: '100%' }}>
            <Table
              rowKey="bid"
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              scroll={{ y: 'calc(100vh - 260px)' }}
              tableLayout="fixed"
              bordered
              size="middle"
            />
          </Spin>
        </div>

        {/* 分页工具栏 */}
        <div style={{ height: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 16 }}>
          <div style={{ paddingLeft: 8 }}>共计 {total} 条记录</div>
          <Pagination
            current={pageNum}
            total={total}
            pageSize={pageSize}
            onChange={setPageNum}
            showSizeChanger={false}
          />
        </div>
      </div>

      {/* 新增弹窗 */}
      <Modal
        title="新增数据源"
        open={addVisible}
        onCancel={() => setAddVisible(false)}
        mask={{ closable: false }}
        confirmLoading={addLoading}
        footer={[
          <Button key="cancel" onClick={() => setAddVisible(false)}>取消</Button>,
          <Button key="ok" type="primary" loading={addLoading} onClick={handleAdd}>确定</Button>,
        ]}
      >
        <Form form={addForm} layout="vertical">
          <Form.Item label="源Key" name="bkey" rules={[{ required: true, message: '请输入源Key' }]}>
            <FormInput placeholder="请输入唯一源Key" />
          </Form.Item>
          <Form.Item label="源名称" name="bname" rules={[{ required: true, message: '请输入源名称' }]}>
            <FormInput placeholder="请输入源名称" />
          </Form.Item>
          <Form.Item
            label="源网站首页"
            name="homepage"
            rules={[{ type: 'url', message: '请输入合法URL' }]}
          >
            <FormInput placeholder="https://www.example.com" />
          </Form.Item>
          <Form.Item label="介绍" name="remark">
            <FormInput.TextArea rows={3} placeholder="请输入介绍信息" />
          </Form.Item>
        </Form>
      </Modal>

      {/* 编辑弹窗 */}
      <Modal
        title="修改数据源"
        open={editVisible}
        onCancel={() => setEditVisible(false)}
        mask={{ closable: false }}
        confirmLoading={editLoading}
        footer={[
          <Button key="cancel" onClick={() => setEditVisible(false)}>取消</Button>,
          <Button key="ok" type="primary" loading={editLoading} onClick={handleEdit}>确定</Button>,
        ]}
      >
        <Form form={editForm} layout="vertical">
          <Form.Item label="源ID" name="bid">
            <FormInput disabled />
          </Form.Item>
          <Form.Item label="源Key" name="bkey" rules={[{ required: true }]}>
            <FormInput />
          </Form.Item>
          <Form.Item label="源名称" name="bname" rules={[{ required: true }]}>
            <FormInput />
          </Form.Item>
          <Form.Item label="源网站首页" name="homepage" rules={[{ type: 'url' }]}>
            <FormInput />
          </Form.Item>
          <Form.Item label="介绍" name="remark">
            <FormInput.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </MainLayout>
  );
}
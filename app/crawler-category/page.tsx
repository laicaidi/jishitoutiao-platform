// 爬虫类别管理页面
// 功能说明：提供类别数据的 列表查询 / 新增 / 编辑 / 删除 功能
// 提示规则：所有接口异常优先显示后端返回的 message，无 message 时显示默认异常
// 核心修复：axios 拦截器已抛出错误信息，catch 中直接读取 err.message 即可
'use client';

import { useState, useEffect } from 'react';
import {
  Table, Spin, message, Input, Button, Space, Pagination,
  Modal, Form, Input as FormInput, Popover, Typography
} from 'antd';
import type { ColumnType } from 'antd/es/table';
import {
  getCrawlerCategoryApi,
  addCrawlerCategoryApi,
  updateCrawlerCategoryApi,
  deleteCrawlerCategoryApi
} from '@/api';
import { safeInput } from '@/utils/security';
import MainLayout from '@/layouts/MainLayout';

const { Text } = Typography;

// ==========================
// 常量定义
// ==========================
/** 每页显示条数 */
// const PAGE_SIZE = 10;

// ==========================
// 类型定义（TS 规范）
// ==========================
/** 表格列表项类型 */
interface CrawlerCategoryItem {
  cid: string;          // 主键ID
  ckey: string;         // 类别唯一标识
  cname: string;        // 类别名称
  remark: string;       // 备注
  update_time: string;  // 更新时间
}

/** 新增/编辑表单类型 */
interface CategoryFormData {
  cid?: string;
  ckey: string;
  cname: string;
  remark?: string;
}

// ==========================
// 页面主组件
// ==========================
export default function Page() {
  // ==========================
  // 状态管理（全部带注释）
  // ==========================
  /** 表格加载状态 */
  const [loading, setLoading] = useState<boolean>(false);
  /** 表格数据源 */
  const [dataSource, setDataSource] = useState<CrawlerCategoryItem[]>([]);
  /** 搜索关键词 */
  const [keyword, setKeyword] = useState<string>('');
  /** 当前页码 */
  const [pageNum, setPageNum] = useState<number>(1);
  /** 数据总条数 */
  const [total, setTotal] = useState<number>(0);
  /** 后台返回每页条数 */
  const [pageSize, setPageSize] = useState<number>(10);

  /** 新增弹窗显示状态 */
  const [addVisible, setAddVisible] = useState<boolean>(false);
  /** 新增按钮加载状态 */
  const [addLoading, setAddLoading] = useState<boolean>(false);
  /** 新增表单实例 */
  const [addForm] = Form.useForm<CategoryFormData>();

  /** 编辑弹窗显示状态 */
  const [editVisible, setEditVisible] = useState<boolean>(false);
  /** 编辑按钮加载状态 */
  const [editLoading, setEditLoading] = useState<boolean>(false);
  /** 编辑表单实例 */
  const [editForm] = Form.useForm<CategoryFormData>();

  /** 控制删除确认 Popover 显示 */
  const [openDeleteId, setOpenDeleteId] = useState<string | null>(null);
  /** 批量控制删除按钮 loading */
  const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({});

  // ==========================
  // 【核心】获取列表数据
  // ==========================
  const fetchList = async () => {
    try {
      setLoading(true);
      // 调用查询接口，传入搜索关键词 + 当前页码
      const res = await getCrawlerCategoryApi(safeInput(keyword), pageNum);
      // 设置表格数据
      setDataSource(res.data?.data?.list || []);
      // 设置总条数
      setTotal(res.data?.data?.total_record || 0);
      // 设置后台返回每页条数
      setPageSize(res.data?.data?.page_size || 10);
    } catch (err: any) {
      // 异常处理：优先显示后端 message，否则显示默认提示
      message.error(err?.message || '网络异常，加载失败');
    } finally {
      // 无论成功失败，关闭 loading
      setLoading(false);
    }
  };

  // ==========================
  // 【核心】新增提交
  // ==========================
  const handleAdd = async () => {
    try {
      // 1. 校验表单
      const params = await addForm.validateFields();
      // 2. 开启按钮 loading
      setAddLoading(true);

      // 3. 调用新增接口
      const res = await addCrawlerCategoryApi({
        ckey: safeInput(params.ckey),
        cname: safeInput(params.cname),
        remark: safeInput(params.remark || ''),
      });

      // 4. 根据接口返回状态处理
      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        setAddVisible(false);    // 关闭弹窗
        addForm.resetFields();   // 重置表单
        // ==================== 统一刷新：重置页码1 + 携带搜索词 ====================
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      // ✅ 核心：axios 拦截器已抛出后端提示，直接读取 err.message
      message.error(err?.message || '网络异常，新增失败');
    } finally {
      setAddLoading(false);
    }
  };

  // ==========================
  // 【核心】编辑提交
  // ==========================
  const handleEdit = async () => {
    try {
      // 1. 校验编辑表单
      const params = await editForm.validateFields();
      // 2. 开启按钮 loading
      setEditLoading(true);

      // 3. 调用编辑接口（必须传入 cid）
      const res = await updateCrawlerCategoryApi(params.cid!, {
        ckey: safeInput(params.ckey),
        cname: safeInput(params.cname),
        remark: safeInput(params.remark || ''),
      });

      // 4. 处理返回结果
      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        setEditVisible(false);  // 关闭弹窗
        // ==================== 统一刷新：重置页码1 + 携带搜索词 ====================
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      // ✅ 核心：拦截器抛出后端提示语，直接显示
      message.error(err?.message || '网络异常，修改失败');
    } finally {
      setEditLoading(false);
    }
  };

  // ==========================
  // 【核心】删除提交
  // ==========================
  const handleDeleteConfirm = async (record: CrawlerCategoryItem) => {
    try {
      // 开启当前行删除 loading
      setLoadingMap(prev => ({ ...prev, [record.cid]: true }));
      // 调用删除接口
      const res = await deleteCrawlerCategoryApi(record.cid);

      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        // ==================== 统一刷新：重置页码1 + 携带搜索词 ====================
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      // 统一异常提示
      message.error(err?.message || '网络异常，删除失败');
    } finally {
      // 关闭 loading & 确认框
      setLoadingMap(prev => ({ ...prev, [record.cid]: false }));
      setOpenDeleteId(null);
    }
  };

  // ==========================
  // 打开编辑弹窗（赋值表单）
  // ==========================
  const openEdit = (record: CrawlerCategoryItem) => {
    editForm.setFieldsValue(record); // 回填当前行数据
    setEditVisible(true);            // 打开弹窗
  };

  // ==========================
  // 搜索按钮事件
  // ==========================
  const handleSearch = () => {
    setPageNum(1); // 搜索从第一页开始
    fetchList();
  };

  // ==========================
  // 副作用：页码变化刷新列表
  // ==========================
  useEffect(() => {
    fetchList();
  }, [pageNum]);

  // ==========================
  // 表格列配置
  // ==========================
  const columns: ColumnType<CrawlerCategoryItem>[] = [
    {
      title: '序号',
      key: 'index',
      width: 80,
      align: 'center',
      render: (_, __, index) => (pageNum - 1) * pageSize + index + 1
    },
    { title: '类别ID', dataIndex: 'cid', width: 120 },
    { title: '类别Key', dataIndex: 'ckey', width: 160 },
    { title: '类别名称', dataIndex: 'cname', width: 160 },
    { title: '介绍', dataIndex: 'remark', ellipsis: true },
    { title: '更新时间', dataIndex: 'update_time', width: 190 },
    {
      title: '操作',
      width: 200,
      render: (_, record) => (
        <Space>
          {/* 修改按钮 */}
          <Button type="link" onClick={() => openEdit(record)}>修改</Button>

          {/* 删除按钮（带确认框） */}
          <Popover
            open={openDeleteId === record.cid}
            onOpenChange={(v) => setOpenDeleteId(v ? record.cid : null)}
            trigger="click"
            placement="right"
            content={
              <div style={{ width: 280 }}>
                <div style={{ marginBottom: 8 }}><Text type="secondary">ID:</Text>{record.cid}</div>
                <div style={{ marginBottom: 8 }}><Text type="secondary">Key:</Text>{record.ckey}</div>
                <div style={{ marginBottom: 8 }}><Text type="secondary">名称:</Text>{record.cname}</div>
                <div style={{ marginTop: 10, textAlign: 'right' }}>
                  <Space>
                    <Button size="small" onClick={() => setOpenDeleteId(null)}>取消</Button>
                    <Button
                      size="small"
                      danger
                      loading={loadingMap[record.cid]}
                      onClick={() => handleDeleteConfirm(record)}
                    >
                      确定
                    </Button>
                  </Space>
                </div>
              </div>
            }
          >
            <Button type="link" danger>删除</Button>
          </Popover>
        </Space>
      )
    }
  ];

  // ==========================
  // 页面渲染
  // ==========================
  return (
    <MainLayout>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        
        {/* 搜索 + 新增区域 */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

          {/* ✅ 只在这里加了清空表单，其他完全没动 */}
          <Button type="primary" onClick={() => { addForm.resetFields(); setAddVisible(true); }}>+ 新增</Button>

        </div>

        {/* 表格区域 */}
        <div style={{ flex: 1 }}>
          <Spin spinning={loading}>
            <Table
              rowKey="cid"
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

        {/* 分页区域 */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>共计 {total} 条记录</div>
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
        title="新增爬虫类别"
        open={addVisible}
        onCancel={() => setAddVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setAddVisible(false)}>取消</Button>,
          <Button key="ok" type="primary" loading={addLoading} onClick={handleAdd}>确定</Button>
        ]}
      >
        <Form form={addForm} layout="vertical">
          <Form.Item label="类别Key" name="ckey" rules={[{ required: true }]}><FormInput /></Form.Item>
          <Form.Item label="类别名称" name="cname" rules={[{ required: true }]}><FormInput /></Form.Item>
          <Form.Item label="介绍" name="remark"><FormInput.TextArea rows={3} /></Form.Item>
        </Form>
      </Modal>

      {/* 编辑弹窗 */}
      <Modal
        title="修改爬虫类别"
        open={editVisible}
        onCancel={() => setEditVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setEditVisible(false)}>取消</Button>,
          <Button key="ok" type="primary" loading={editLoading} onClick={handleEdit}>确定</Button>
        ]}
      >
        <Form form={editForm} layout="vertical">
          <Form.Item label="ID" name="cid"><FormInput disabled /></Form.Item>
          <Form.Item label="类别Key" name="ckey" rules={[{ required: true }]}><FormInput /></Form.Item>
          <Form.Item label="类别名称" name="cname" rules={[{ required: true }]}><FormInput /></Form.Item>
          <Form.Item label="介绍" name="remark"><FormInput.TextArea rows={3} /></Form.Item>
        </Form>
      </Modal>
    </MainLayout>
  );
}
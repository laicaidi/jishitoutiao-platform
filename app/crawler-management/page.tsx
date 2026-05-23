'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  Table, Spin, message, Input, Button, Space, Pagination,
  Modal, Form, Select, TableProps, Descriptions, InputNumber
} from 'antd';
import MainLayout from '@/layouts/MainLayout';
import { useMetaStore } from '@/store/useMetaStore';

import {
  getCrawlerManagementApi,
  addCrawlerManagementApi,
  updateCrawlerManagementApi,
  deleteCrawlerManagementApi
} from '@/api/index';

import { safeInput } from '@/utils/security';

// 每页显示条数
// const PAGE_SIZE = 10;

// 爬虫管理表实体类型定义
interface CrawlerManageItem {
  bid: string;
  sld: string;
  cid: string;
  crawler_id: string;
  crawler_name: string;
  base_url: string;
  crawler_directory: string;
  crawler_weight_factor: number;
  crawler_weight_score: number;
  crawler_status: string;
  remark: string;
  crawler_switch: string;
  last_update: string;
  bname?: string;
  cname?: string;
}

export default function Page() {
  // 获取全局状态：数据源选项、分类选项
  const { sourceOptions, categoryOptions } = useMetaStore();

  // ==================== 筛选条件状态 ====================
  // 来源key
  const [bkey, setBkey] = useState<string | undefined>(undefined);
  // 分类key
  const [ckey, setCkey] = useState<string | undefined>(undefined);
  // 爬虫状态
  const [crawlerStatus, setCrawlerStatus] = useState<string | undefined>(undefined);
  // 爬虫开关
  const [crawlerSwitch, setCrawlerSwitch] = useState<string | undefined>(undefined);
  // 搜索关键词
  const [keyword, setKeyword] = useState<string>('');

  // ==================== 表格数据状态 ====================
  // 加载状态
  const [loading, setLoading] = useState<boolean>(false);
  // 表格数据源
  const [dataSource, setDataSource] = useState<CrawlerManageItem[]>([]);
  // 当前页码
  const [pageNum, setPageNum] = useState<number>(1);
  // 总记录数
  const [total, setTotal] = useState<number>(0);
  // 后台返回每页条数
  const [pageSize, setPageSize] = useState<number>(10);

  // ==================== 弹窗状态管理 ====================
  // 新增弹窗显示/隐藏
  const [addVisible, setAddVisible] = useState(false);
  // 编辑弹窗显示/隐藏
  const [editVisible, setEditVisible] = useState(false);
  // 新增表单实例
  const [addForm] = Form.useForm();
  // 编辑表单实例
  const [editForm] = Form.useForm();
  // 新增提交加载
  const [addLoading, setAddLoading] = useState(false);
  // 编辑提交加载
  const [editLoading, setEditLoading] = useState(false);
  // 删除提交加载
  const [deleteLoading, setDeleteLoading] = useState(false);

  // 删除确认弹窗
  const [deleteVisible, setDeleteVisible] = useState(false);
  // 当前删除的行数据
  const [deleteRecord, setDeleteRecord] = useState<CrawlerManageItem | null>(null);

  // ==================== 下拉选项配置 ====================
  // 来源下拉选项映射
  const sourceSelectOptions = useMemo(() =>
    sourceOptions.map(i => ({ label: i.bname, value: i.bkey, bid: i.bid })),
    [sourceOptions]
  );
  // 分类下拉选项映射
  const categorySelectOptions = useMemo(() =>
    categoryOptions.map(i => ({ label: i.cname, value: i.ckey, cid: i.cid })),
    [categoryOptions]
  );

  // 爬虫状态选项
  const crawlerStatusOptions = [
    { label: '正常', value: 'NORMAL' },
    { label: '异常', value: 'ABNORMAL' }
  ];
  // 爬虫开关选项
  const crawlerSwitchOptions = [
    { label: '开启', value: 'ON' },
    { label: '关闭', value: 'OFF' }
  ];

  // ==================== 获取爬虫管理列表 ====================
  const fetchList = async () => {
    try {
      setLoading(true);
      // 接口请求参数
      const params = {
        keyword: safeInput(keyword) || undefined,
        bkey,
        ckey,
        crawler_status: crawlerStatus,
        crawler_switch: crawlerSwitch,
        page_num: pageNum
      };
      const res = await getCrawlerManagementApi(params);
      // 设置表格数据
      setDataSource(res.data?.data?.list || []);
      // 设置总条数
      setTotal(res.data?.data?.total_record || 0);
      // 设置后台返回每页条数
      setPageSize(res.data?.data?.page_size || 10);
    } catch (err: any) {
      message.error(err?.message || '加载失败');
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
  }, [bkey, ckey, crawlerStatus, crawlerSwitch]);

  // ==================== 页码变化时，重新查询 ====================
  useEffect(() => {
    fetchList();
  }, [pageNum]);

  // ==================== 打开编辑弹窗，回填表单数据 ====================
  const handleEditOpen = (record: CrawlerManageItem) => {
    editForm.setFieldsValue({
      ...record,
      bkey: sourceSelectOptions.find(item => item.bid === record.bid)?.value,
      ckey: categorySelectOptions.find(item => item.cid === record.cid)?.value,
    });
    setEditVisible(true);
  };

  // ==================== 打开新增弹窗，清空表单 ====================
  const handleAddOpen = () => {
    addForm.resetFields();
    setAddVisible(true);
  };

  // ==================== 新增表单提交 ====================
  const handleAddSubmit = async () => {
    try {
      const values = await addForm.validateFields();
      setAddLoading(true);

      // 根据选择的value匹配对应的数据源信息
      const selectedSource = sourceSelectOptions.find(item => item.value === values.bkey);
      const selectedCategory = categorySelectOptions.find(item => item.value === values.ckey);

      // 组装提交参数
      const submitParams = {
        ...values,
        crawler_name: safeInput(values.crawler_name),
        sld: safeInput(values.sld),
        base_url: safeInput(values.base_url),
        crawler_directory: safeInput(values.crawler_directory),
        crawler_status: safeInput(values.crawler_status),
        crawler_switch: safeInput(values.crawler_switch),
        remark: safeInput(values.remark || ''),
        bid: selectedSource?.bid,
        cid: selectedCategory?.cid,
      };

      // 移除前端临时字段，不提交给后台
      delete submitParams.bkey;
      delete submitParams.ckey;

      // 调用新增接口
      const res = await addCrawlerManagementApi(submitParams);
      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        setAddVisible(false);
        addForm.resetFields();
        // 刷新列表
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      message.error(err?.message || '新增失败');
    } finally {
      setAddLoading(false);
    }
  };

  // ==================== 编辑表单提交 ====================
  const handleEditSubmit = async () => {
    try {
      setEditLoading(true);
      const values = await editForm.validateFields();

      // 根据选择的value匹配对应的数据源信息
      const selectedSource = sourceSelectOptions.find(item => item.value === values.bkey);
      const selectedCategory = categorySelectOptions.find(item => item.value === values.ckey);

      // 组装提交参数
      const submitParams = {
        ...values,
        crawler_name: safeInput(values.crawler_name),
        sld: safeInput(values.sld),
        base_url: safeInput(values.base_url),
        crawler_directory: safeInput(values.crawler_directory),
        crawler_status: safeInput(values.crawler_status),
        crawler_switch: safeInput(values.crawler_switch),
        remark: safeInput(values.remark || ''),
        bid: selectedSource?.bid,
        cid: selectedCategory?.cid,
      };

      // 删除前端临时字段，不提交给后端
      delete submitParams.crawler_id;
      delete submitParams.bkey;
      delete submitParams.ckey;

      // 调用修改接口
      const res = await updateCrawlerManagementApi(values.crawler_id, submitParams);
      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        setEditVisible(false);
        // 刷新列表
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      message.error(err?.message || '修改失败');
    } finally {
      setEditLoading(false);
    }
  };

  // ==================== 打开删除确认面板 ====================
  const handleDeleteOpen = (record: CrawlerManageItem) => {
    setDeleteRecord(record);
    setDeleteVisible(true);
  };

  // ==================== 确认删除 ====================
  const handleDeleteConfirm = async () => {
    if (!deleteRecord) return;
    try {
      setDeleteLoading(true);
      // 调用删除接口
      const res = await deleteCrawlerManagementApi(deleteRecord.crawler_id);
      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        setDeleteVisible(false);
        // 刷新列表
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      message.error(err?.message || '删除失败');
    } finally {
      setDeleteLoading(false);
    }
  };

  // ==================== 表格列配置 ====================
  const columns: TableProps<CrawlerManageItem>['columns'] = [
    { title: '序号', width: 60, align: 'center', render: (_, __, index) => (pageNum - 1) * pageSize + index + 1 },
    { title: '爬虫id', dataIndex: 'crawler_id', width: 180 },
    { title: '爬虫名', dataIndex: 'crawler_name', width: 180 },
    { title: '源名称', dataIndex: 'bname', width: 160 },
    { title: '二级源名', dataIndex: 'sld', width: 130 },
    { title: '类别名称', dataIndex: 'cname', width: 160 },
    { title: '爬取base_url', dataIndex: 'base_url', width: 200, ellipsis: true },
    { title: '爬虫文件所在目录', dataIndex: 'crawler_directory', width: 200, ellipsis: true },
    { title: '爬虫权重系数', dataIndex: 'crawler_weight_factor', width: 100, align: 'right' },
    { title: '爬虫权重分', dataIndex: 'crawler_weight_score', width: 100, align: 'right' },
    { title: '爬虫状态', dataIndex: 'crawler_status', width: 90, render: t => t === 'NORMAL' ? '正常' : '异常' },
    { title: '爬虫开关', dataIndex: 'crawler_switch', width: 90, render: t => t === 'ON' ? '开启' : '关闭' },
    { title: '爬虫备注', dataIndex: 'remark', width: 160, ellipsis: true },
    { title: '更新时间', dataIndex: 'last_update', width: 180 },
    {
      title: '操作', width: 180, fixed: 'right',
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
        
        {/* 查询筛选区域 */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Select
              placeholder="选择源"
              allowClear
              style={{ width: 150 }}
              value={bkey}
              onChange={setBkey}
              options={sourceSelectOptions}
              showSearch={{
                filterOption: (input: string, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
              }}
            />
            <Select
              placeholder="选择类别"
              allowClear
              style={{ width: 150 }}
              value={ckey}
              onChange={setCkey}
              options={categorySelectOptions}
              showSearch={{
                filterOption: (input: string, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
              }}
            />
            <Select placeholder="选择状态" allowClear style={{ width: 120 }} value={crawlerStatus} onChange={setCrawlerStatus} options={crawlerStatusOptions} />
            <Select placeholder="选择开关" allowClear style={{ width: 120 }} value={crawlerSwitch} onChange={setCrawlerSwitch} options={crawlerSwitchOptions} />
            <Input placeholder="搜索爬虫名/备注" style={{ width: 240 }} value={keyword} onChange={(e) => setKeyword(e.target.value)} onPressEnter={handleSearch} />
            <Button type="primary" onClick={handleSearch}>搜索</Button>
          </div>
          <Button type="primary" onClick={handleAddOpen}>新增爬虫</Button>
        </div>

        {/* 表格展示区域 */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Spin spinning={loading} style={{ height: '100%' }}>
            <Table
              rowKey="crawler_id"
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              scroll={{ y: 'calc(100vh - 320px)' }}
              bordered
              style={{ height: '100%' }}
            />
          </Spin>
        </div>

        {/* 分页组件 */}
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
        open={addVisible}
        onCancel={() => { setAddVisible(false); addForm.resetFields(); }}
        title="新增爬虫"
        width={650}
        styles={{ body: { padding: '16px 24px', maxHeight: 'calc(70vh - 60px)', overflowY: 'auto' }, footer: { position: 'sticky', bottom: 0, background: '#fff', borderTop: '1px solid #f0f0f0', padding: '12px 24px' } }}
        footer={[
          <Button key="cancelAdd" onClick={() => { setAddVisible(false); addForm.resetFields(); }}>取消</Button>,
          <Button key="confirmAdd" type="primary" loading={addLoading} onClick={handleAddSubmit}>确定</Button>
        ]}
      >
        <Form form={addForm} layout="vertical">
          <Form.Item label="爬虫名" name="crawler_name" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="源" name="bkey" rules={[{ required: true }]}>
            <Select placeholder="选择源" options={sourceSelectOptions} showSearch={{ filterOption: (input: string, option: any) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase()) }} />
          </Form.Item>
          <Form.Item label="二级源名" name="sld" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="类别" name="ckey" rules={[{ required: true }]}>
            <Select placeholder="选择类别" options={categorySelectOptions} showSearch={{ filterOption: (input: string, option: any) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase()) }} />
          </Form.Item>
          <Form.Item label="爬取base_url" name="base_url" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="爬虫文件所在目录" name="crawler_directory" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="爬虫权重系数" name="crawler_weight_factor" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} onWheel={(e) => e.preventDefault()} />
          </Form.Item>
          <Form.Item label="爬虫权重分" name="crawler_weight_score" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} onWheel={(e) => e.preventDefault()} />
          </Form.Item>
          <Form.Item label="爬虫状态" name="crawler_status" rules={[{ required: true }]}>
            <Select placeholder="选择状态" options={crawlerStatusOptions} />
          </Form.Item>
          <Form.Item label="爬虫开关" name="crawler_switch" rules={[{ required: true }]}>
            <Select placeholder="选择开关" options={crawlerSwitchOptions} />
          </Form.Item>
          <Form.Item label="爬虫备注" name="remark"><Input.TextArea rows={3} /></Form.Item>
        </Form>
      </Modal>

      {/* 修改弹窗 */}
      <Modal
        open={editVisible}
        onCancel={() => setEditVisible(false)}
        title="修改爬虫"
        width={650}
        styles={{ header: { position: 'sticky', top: 0, background: '#fff', zIndex: 10, borderBottom: '1px solid #f0f0f0' }, body: { padding: '16px 24px', maxHeight: 'calc(70vh - 120px)', overflowY: 'auto' }, footer: { position: 'sticky', bottom: 0, background: '#fff', borderTop: '1px solid #f0f0f0', padding: '12px 24px' } }}
        footer={[
          <Button key="cancelEdit" onClick={() => setEditVisible(false)}>取消</Button>,
          <Button key="confirmEdit" type="primary" loading={editLoading} onClick={handleEditSubmit}>确定</Button>
        ]}
      >
        <Form form={editForm} layout="vertical">
          <Form.Item label="爬虫id" name="crawler_id"><Input disabled /></Form.Item>
          <Form.Item label="爬虫名" name="crawler_name" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="源" name="bkey" rules={[{ required: true }]}>
            <Select placeholder="选择源" options={sourceSelectOptions} showSearch={{ filterOption: (input: string, option: any) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase()) }} />
          </Form.Item>
          <Form.Item label="二级源名" name="sld" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="类别" name="ckey" rules={[{ required: true }]}>
            <Select placeholder="选择类别" options={categorySelectOptions} showSearch={{ filterOption: (input: string, option: any) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase()) }} />
          </Form.Item>
          <Form.Item label="爬取base_url" name="base_url" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="爬虫文件所在目录" name="crawler_directory" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="爬虫权重系数" name="crawler_weight_factor" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} onWheel={(e) => e.preventDefault()} />
          </Form.Item>
          <Form.Item label="爬虫权重分" name="crawler_weight_score" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} onWheel={(e) => e.preventDefault()} />
          </Form.Item>
          <Form.Item label="爬虫状态" name="crawler_status" rules={[{ required: true }]}>
            <Select placeholder="选择状态" options={crawlerStatusOptions} />
          </Form.Item>
          <Form.Item label="爬虫开关" name="crawler_switch" rules={[{ required: true }]}>
            <Select placeholder="选择开关" options={crawlerSwitchOptions} />
          </Form.Item>
          <Form.Item label="爬虫备注" name="remark"><Input.TextArea rows={3} /></Form.Item>
        </Form>
      </Modal>

      {/* 删除确认弹窗 */}
      <Modal
        title="删除确认"
        open={deleteVisible}
        onCancel={() => setDeleteVisible(false)}
        footer={[
          <Button key="cancelDelete" onClick={() => setDeleteVisible(false)}>取消</Button>,
          <Button key="confirmDelete" type="primary" danger loading={deleteLoading} onClick={handleDeleteConfirm}>确定删除</Button>
        ]}
        width={600}
      >
        {deleteVisible && deleteRecord && (
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="爬虫id">{deleteRecord.crawler_id}</Descriptions.Item>
            <Descriptions.Item label="爬虫名">{deleteRecord.crawler_name}</Descriptions.Item>
            <Descriptions.Item label="爬取base_url">{deleteRecord.base_url}</Descriptions.Item>
            <Descriptions.Item label="爬虫文件所在目录">{deleteRecord.crawler_directory}</Descriptions.Item>
            <Descriptions.Item label="爬虫状态">{deleteRecord.crawler_status === 'NORMAL' ? '正常' : '异常'}</Descriptions.Item>
            <Descriptions.Item label="爬虫开关">{deleteRecord.crawler_switch === 'ON' ? '开启' : '关闭'}</Descriptions.Item>
          </Descriptions>
        )}
        <div style={{ marginTop: 16, color: '#ff4d4d' }}>确定要删除该爬虫数据吗？此操作不可恢复！</div>
      </Modal>
    </MainLayout>
  );
}
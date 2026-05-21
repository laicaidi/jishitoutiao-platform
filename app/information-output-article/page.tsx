'use client';

import { useState, useEffect } from 'react';
import {
  Table, Spin, message, Input, Button, Space, Pagination,
  Modal, Form, Select, Tag, InputNumber, DatePicker, TableProps, Radio
} from 'antd';
import dayjs from 'dayjs';
import MainLayout from '@/layouts/MainLayout';
import { useMetaStore } from '@/store/useMetaStore';

import {
  getInformationOutputArticleApi,
  addInformationOutputArticleApi,
  updateInformationOutputArticleApi,
  deleteInformationOutputArticleApi
} from '@/api/index';

import { safeInput } from '@/utils/security';

// 每页显示条数
const PAGE_SIZE = 10;

/**
 * 资讯内容输出表 实体类型定义
 * 对应数据库表：information_output_article
 */
interface InformationOutputArticleItem {
  output_article_id: string | number;
  bid: string;
  crawler_id: string;
  information_id: string | number;
  title: string;
  author: string;
  content: string;
  read_count: number;
  origin: string;
  type: string;
  picurl: string;
  comment_count: number;
  like_count: number;
  url: string;
  created_time: string;
  cid: string;
  last_update: string;
}

export default function InformationOutputArticlePage() {
  // 获取全局数据源：来源列表、分类列表
  const { sourceOptions, categoryOptions } = useMetaStore();

  // ====================== 查询条件状态 ======================
  // 搜索关键词
  const [keyword, setKeyword] = useState('');
  // 选中的分类标签（ckey）
  const [selectedCkey, setSelectedCkey] = useState('');
  // 选中的来源（bkey）
  const [selectedBkey, setSelectedBkey] = useState<string | undefined>(undefined);

  // ====================== 列表数据状态 ======================
  // 加载状态
  const [loading, setLoading] = useState(false);
  // 表格数据
  const [dataSource, setDataSource] = useState<InformationOutputArticleItem[]>([]);
  // 当前页码
  const [pageNum, setPageNum] = useState(1);
  // 总条数
  const [total, setTotal] = useState(0);

  // ====================== 弹窗状态 ======================
  // 新增弹窗
  const [addVisible, setAddVisible] = useState(false);
  // 修改弹窗
  const [editVisible, setEditVisible] = useState(false);
  // 新增表单实例
  const [addForm] = Form.useForm();
  // 修改表单实例
  const [editForm] = Form.useForm();
  // 新增加载
  const [addLoading, setAddLoading] = useState(false);
  // 修改加载
  const [editLoading, setEditLoading] = useState(false);

  // ====================== 删除弹窗状态 ======================
  const [deleteVisible, setDeleteVisible] = useState(false);
  // 当前要删除的记录
  const [deleteRecord, setDeleteRecord] = useState<InformationOutputArticleItem | null>(null);
  // 删除加载
  const [deleteLoading, setDeleteLoading] = useState(false);

  // ====================== 核心方法 ======================

  /**
   * 获取数据列表
   * 根据查询条件 + 分页 获取资讯内容输出列表
   */
  const fetchList = async () => {
    try {
      setLoading(true);
      const params = {
        keyword: safeInput(keyword || ''),
        bkey: selectedBkey ?? '',
        ckey: selectedCkey ?? '',
        page_num: pageNum,
      };
      const res = await getInformationOutputArticleApi(params);
      setDataSource(res.data?.data?.list || []);
      setTotal(res.data?.data?.total || 0);
    } catch (err: any) {
      message.error(err.message || '数据加载失败');
    } finally {
      setLoading(false);
    }
  };

  /**
   * 搜索按钮事件
   * 重置页码为1并重新查询
   */
  const handleSearch = () => {
    setPageNum(1);
    fetchList();
  };

  // 分类/来源筛选变化时，重置页码并刷新列表
  useEffect(() => {
    setPageNum(1);
    fetchList();
  }, [selectedCkey, selectedBkey]);

  // 页码变化时刷新列表
  useEffect(() => {
    fetchList();
  }, [pageNum]);

  /**
   * 打开修改弹窗
   * 回显当前行数据并转换 bid/cid 为下拉框可识别的 key
   */
  const handleEditOpen = (record: InformationOutputArticleItem) => {
    editForm.setFieldsValue({
      ...record,
      bkey: sourceOptions.find(item => item.bid === record.bid)?.bkey,
      ckey: categoryOptions.find(item => item.cid === record.cid)?.ckey,
    });
    setEditVisible(true);
  };

  /**
   * 打开新增弹窗
   * 重置表单并设置类型默认值：TEXT
   */
  const handleAddOpen = () => {
    addForm.resetFields();
    addForm.setFieldValue('type', 'TEXT'); // 默认选中TEXT
    setAddVisible(true);
  };

  /**
   * 新增提交
   * 校验表单 → 封装参数 → 调用新增接口 → 成功后关闭弹窗并刷新列表
   */
  const handleAddSubmit = async () => {
    try {
      const values = await addForm.validateFields();
      setAddLoading(true);

      // 根据选择的 bkey/ckey 找到对应的 bid/cid
      const selectedSource = sourceOptions.find(item => item.bkey === values.bkey);
      const selectedCategory = categoryOptions.find(item => item.ckey === values.ckey);

      // 封装提交参数
      const submitParams = {
        ...values,
        bid: selectedSource?.bid,
        cid: selectedCategory?.cid,
        information_id: safeInput(values.information_id),
        title: safeInput(values.title),
        author: safeInput(values.author || ''),
        content: safeInput(values.content),
        read_count: values.read_count || 0,
        origin: safeInput(values.origin || ''),
        type: safeInput(values.type),
        picurl: safeInput(values.picurl || ''),
        comment_count: values.comment_count || 0,
        like_count: values.like_count || 0,
        url: safeInput(values.url),
        created_time: dayjs(values.created_time).format('YYYY-MM-DD HH:mm:ss'),
      };

      // 删除前端临时使用的字段，不提交给后端
      delete submitParams.bkey;
      delete submitParams.ckey;

      const res = await addInformationOutputArticleApi(submitParams);
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
      message.error(err?.message || '操作失败');
    } finally {
      setAddLoading(false);
    }
  };

  /**
   * 修改提交
   * 逻辑同新增，仅接口不同
   */
  const handleEditSubmit = async () => {
    try {
      const values = await editForm.validateFields();
      setEditLoading(true);

      const selectedSource = sourceOptions.find(item => item.bkey === values.bkey);
      const selectedCategory = categoryOptions.find(item => item.ckey === values.ckey);

      const submitParams = {
        ...values,
        bid: selectedSource?.bid,
        cid: selectedCategory?.cid,
        information_id: safeInput(values.information_id),
        title: safeInput(values.title),
        author: safeInput(values.author || ''),
        content: safeInput(values.content),
        read_count: values.read_count || 0,
        origin: safeInput(values.origin || ''),
        type: safeInput(values.type),
        picurl: safeInput(values.picurl || ''),
        comment_count: values.comment_count || 0,
        like_count: values.like_count || 0,
        url: safeInput(values.url),
        created_time: dayjs(values.created_time).format('YYYY-MM-DD HH:mm:ss'),
      };

      // 删除不需要提交的字段
      delete submitParams.output_article_id;
      delete submitParams.bkey;
      delete submitParams.ckey;

      const res = await updateInformationOutputArticleApi(values.output_article_id, submitParams);
      const msg = res.data?.status?.message;

      if (res.data?.status?.success) {
        message.success(msg);
        setEditVisible(false);
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      message.error(err?.message || '操作失败');
    } finally {
      setEditLoading(false);
    }
  };

  /**
   * 打开删除确认弹窗
   */
  const handleDeleteOpen = (record: InformationOutputArticleItem) => {
    setDeleteRecord(record);
    setDeleteVisible(true);
  };

  /**
   * 确认删除
   * 调用删除接口 → 成功后刷新列表
   */
  const handleDeleteConfirm = async () => {
    if (!deleteRecord) return;
    try {
      setDeleteLoading(true);
      const res = await deleteInformationOutputArticleApi(deleteRecord.output_article_id);
      const msg = res.data?.status?.message;

      if (res.data?.status?.success) {
        message.success(msg);
        setDeleteVisible(false);
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      message.error(err?.message || '操作失败');
    } finally {
      setDeleteLoading(false);
    }
  };

  /**
   * 禁止数字输入框滚轮改变数值
   */
  const preventWheel = (e: React.WheelEvent) => {
    e.preventDefault();
  };

  /**
   * 数字输入框解析器：只保留数字
   */
  const integerParser = (value: string | undefined) => {
    if (!value) return 0;
    const num = value.replace(/[^\d]/g, '');
    return num ? parseInt(num, 10) : 0;
  };

  // ====================== 表格列配置 ======================
  const columns: TableProps<InformationOutputArticleItem>['columns'] = [
    { title: '序号', width: 70, align: 'center', render: (_: any, __: any, index: number) => (pageNum - 1) * PAGE_SIZE + index + 1 },
    { title: '输出内容id', dataIndex: 'output_article_id', width: 240 },
    { title: '资讯id', dataIndex: 'information_id', width: 220 },
    { title: '源名', width: 160, render: (_, record) => sourceOptions.find(i => i.bid === record.bid)?.bname || record.bid },
    { title: '爬虫id', dataIndex: 'crawler_id', width: 160 },
    { title: '标题', dataIndex: 'title', width: 300 },
    { title: '作者', dataIndex: 'author', width: 120 },
    { title: '来源', dataIndex: 'origin', width: 120 },
    { title: '类型', dataIndex: 'type', width: 100 },
    { title: '阅读数', dataIndex: 'read_count', width: 100 },
    { title: '评论数', dataIndex: 'comment_count', width: 100 },
    { title: '点赞数', dataIndex: 'like_count', width: 100 },
    { title: '资讯url', dataIndex: 'url', width: 320 },
    { title: '资讯创建时间', dataIndex: 'created_time', width: 200 },
    { title: '类别名', width: 160, render: (_, record) => categoryOptions.find(i => i.cid === record.cid)?.cname || record.cid },
    { title: '最后更新时间', dataIndex: 'last_update', width: 200 },
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

  // ====================== 页面渲染 ======================
  return (
    <MainLayout>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* 分类标签切换栏 */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Tag color={selectedCkey === '' ? 'blue' : 'default'} onClick={() => setSelectedCkey('')} style={{ cursor: 'pointer' }}>
            全部类别
          </Tag>
          {categoryOptions.map(item => (
            <Tag key={item.ckey} color={selectedCkey === item.ckey ? 'blue' : 'default'} onClick={() => setSelectedCkey(item.ckey)} style={{ cursor: 'pointer' }}>
              {item.cname}
            </Tag>
          ))}
        </div>

        {/* 查询与操作栏：搜索、来源筛选、新增按钮 */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Input
              placeholder="搜索标题/作者/来源"
              style={{ width: 280 }}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onPressEnter={handleSearch}
            />

            <Select
              placeholder="选择源名"
              value={selectedBkey}
              onChange={setSelectedBkey}
              style={{ width: 200 }}
              allowClear
              showSearch={{
                filterOption: (input: string, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
              }}
              options={sourceOptions.map(s => ({ label: s.bname, value: s.bkey }))}
            />

            <Button type="primary" onClick={handleSearch}>搜索</Button>
          </div>
          <Button type="primary" onClick={handleAddOpen}>新增</Button>
        </div>

        {/* 数据表格 */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Spin spinning={loading}>
            <Table
              rowKey="output_article_id"
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              scroll={{ y: 'calc(100vh - 320px)' }}
              bordered
            />
          </Spin>
        </div>

        {/* 分页组件 */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>共计 {total} 条</div>
          <Pagination current={pageNum} total={total} pageSize={PAGE_SIZE} onChange={setPageNum} />
        </div>
      </div>

      {/* 新增弹窗 */}
      <Modal open={addVisible} onCancel={() => setAddVisible(false)} title="新增资讯内容输出" footer={null} width={800}>
        <Form form={addForm} layout="vertical" style={{ height: '70vh', overflowY: 'auto' }}>
          <Form.Item label="资讯id" name="information_id" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="源名" name="bkey" rules={[{ required: true }]}>
            <Select placeholder="选择源名" allowClear showSearch options={sourceOptions.map(s => ({ label: s.bname, value: s.bkey }))} />
          </Form.Item>
          <Form.Item label="爬虫id" name="crawler_id" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="标题" name="title" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="作者" name="author"><Input /></Form.Item>
          <Form.Item label="来源" name="origin"><Input /></Form.Item>
          {/* 类型单选框：TEXT / PICTURE / VIDEO */}
          <Form.Item label="类型" name="type" rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value="TEXT">TEXT</Radio>
              <Radio value="PICTURE">PICTURE</Radio>
              <Radio value="VIDEO">VIDEO</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="内容" name="content" rules={[{ required: true }]}><Input.TextArea rows={6} /></Form.Item>
          <Form.Item label="图片URL" name="picurl"><Input /></Form.Item>
          <Form.Item label="阅读数" name="read_count"><InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} /></Form.Item>
          <Form.Item label="评论数" name="comment_count"><InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} /></Form.Item>
          <Form.Item label="点赞数" name="like_count"><InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} /></Form.Item>
          <Form.Item label="资讯url" name="url" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="资讯创建时间" name="created_time" rules={[{ required: true }]}>
            <DatePicker style={{ width: '100%' }} showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>
          <Form.Item label="类别名" name="ckey" rules={[{ required: true }]}>
            <Select placeholder="选择类别" allowClear showSearch options={categoryOptions.map(c => ({ label: c.cname, value: c.ckey }))} />
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'right', marginTop: 16 }}>
          <Space>
            <Button onClick={() => setAddVisible(false)}>取消</Button>
            <Button type="primary" loading={addLoading} onClick={handleAddSubmit}>确定</Button>
          </Space>
        </div>
      </Modal>

      {/* 修改弹窗 */}
      <Modal open={editVisible} onCancel={() => setEditVisible(false)} title="修改资讯内容输出" footer={null} width={800}>
        <Form form={editForm} layout="vertical" style={{ height: '70vh', overflowY: 'auto' }}>
          <Form.Item name="output_article_id" hidden><Input /></Form.Item>
          <Form.Item label="资讯id" name="information_id" rules={[{ required: true }]}><Input disabled /></Form.Item>
          <Form.Item label="源名" name="bkey" rules={[{ required: true }]}>
            <Select placeholder="选择源名" allowClear showSearch options={sourceOptions.map(s => ({ label: s.bname, value: s.bkey }))} />
          </Form.Item>
          <Form.Item label="爬虫id" name="crawler_id" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="标题" name="title" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="作者" name="author"><Input /></Form.Item>
          <Form.Item label="来源" name="origin"><Input /></Form.Item>
          {/* 类型单选框：TEXT / PICTURE / VIDEO */}
          <Form.Item label="类型" name="type" rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value="TEXT">TEXT</Radio>
              <Radio value="PICTURE">PICTURE</Radio>
              <Radio value="VIDEO">VIDEO</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="内容" name="content" rules={[{ required: true }]}><Input.TextArea rows={6} /></Form.Item>
          <Form.Item label="图片URL" name="picurl"><Input /></Form.Item>
          <Form.Item label="阅读数" name="read_count"><InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} /></Form.Item>
          <Form.Item label="评论数" name="comment_count"><InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} /></Form.Item>
          <Form.Item label="点赞数" name="like_count"><InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} /></Form.Item>
          <Form.Item label="资讯url" name="url" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item label="资讯创建时间" name="created_time" rules={[{ required: true }]}>
            <DatePicker style={{ width: '100%' }} showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>
          <Form.Item label="类别名" name="ckey" rules={[{ required: true }]}>
            <Select placeholder="选择类别" allowClear showSearch options={categoryOptions.map(c => ({ label: c.cname, value: c.ckey }))} />
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'right', marginTop: 16 }}>
          <Space>
            <Button onClick={() => setEditVisible(false)}>取消</Button>
            <Button type="primary" loading={editLoading} onClick={handleEditSubmit}>确定</Button>
          </Space>
        </div>
      </Modal>

      {/* 删除确认弹窗 */}
      <Modal
        open={deleteVisible}
        onCancel={() => setDeleteVisible(false)}
        title="确认删除"
        confirmLoading={deleteLoading}
        footer={[
          <Button key="cancel" onClick={() => setDeleteVisible(false)}>取消</Button>,
          <Button key="del" type="primary" danger loading={deleteLoading} onClick={handleDeleteConfirm}>确认删除</Button>,
        ]}
      >
        {deleteRecord && (
          <div style={{ padding: '10px 0' }}>
            <p><strong>输出内容id:</strong> {deleteRecord.output_article_id}</p>
            <p><strong>资讯id:</strong> {deleteRecord.information_id}</p>
            <p><strong>标题:</strong> {deleteRecord.title}</p>
            <p><strong>作者:</strong> {deleteRecord.author}</p>
            <p><strong>资讯url:</strong> {deleteRecord.url}</p>
            <p style={{ color: '#ff4d4f', marginTop: 10 }}>确定删除？此操作不可恢复！</p>
          </div>
        )}
      </Modal>
    </MainLayout>
  );
}
'use client';

import { useState, useEffect } from 'react';
import {
  Table, Spin, message, Input, Button, Space, Pagination,
  Modal, Form, Select, TableProps, Tag, InputNumber, DatePicker
} from 'antd';
import dayjs from 'dayjs';
import MainLayout from '@/layouts/MainLayout';
import { useMetaStore } from '@/store/useMetaStore';

// 接口按筛选600表适配
import {
  getInformationWeightFiltrateApi,
  addInformationWeightFiltrateApi,
  updateInformationWeightFiltrateApi,
  deleteInformationWeightFiltrateApi
} from '@/api/index';

import { safeInput } from '@/utils/security';

/**
 * 分页条数常量
 */
const PAGE_SIZE = 10;

/**
 * 筛选600实体类型定义
 * 严格对应数据库表 information_weight_filtrate 字段
 */
interface InformationWeightFiltrateItem {
  weight_filtrate_id: string | number;    // 筛选表id
  bid: string;                  // 源id
  crawler_id: string;           // 爬虫id
  crawler_weight_factor: number; // 爬虫权重系数
  crawler_weight_score: number;  // 爬虫权重分
  crawler_score: number;       // 爬虫得分
  information_id: string | number; // 资讯id
  title: string;                // 标题
  read_weight: string;         // 阅读权重
  read_weight_factor: number;  // 阅读权重系数
  read_count: number;          // 阅读数
  read_score: number;          // 阅读得分
  comment_weight: string;      // 评论权重
  comment_weight_factor: number; // 评论权重系数
  comment_count: number;       // 评论数
  comment_score: number;       // 评论得分
  like_weight: string;         // 点赞权重
  like_weight_factor: number;  // 点赞权重系数
  like_count: number;          // 点赞数
  like_score: number;          // 点赞得分
  word_weight: string;         // 字数权重
  word_weight_factor: number;  // 字数权重系数
  word_count: number;           // 文章字数
  word_score: number;          // 字数得分
  url: string;                  // 资讯url
  created_time: string;         // 资讯创建时间
  information_score: number;    // 总得分
  cid: string;                  // 类别id
  last_update: string;          // 最后更新时间
}

export default function InformationWeightFiltratePage() {
  // 获取全局公共数据源、分类数据源
  const { sourceOptions, categoryOptions } = useMetaStore();

  // ====================== 查询条件状态 ======================
  const [keyword, setKeyword] = useState('');
  const [selectedCkey, setSelectedCkey] = useState('');
  const [selectedBkey, setSelectedBkey] = useState<string | undefined>(undefined);

  // ====================== 列表数据状态 ======================
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<InformationWeightFiltrateItem[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [total, setTotal] = useState(0);

  // ====================== 新增/编辑弹窗状态 ======================
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();
  const [addLoading, setAddLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);

  // ====================== 删除弹窗状态 ======================
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState<InformationWeightFiltrateItem | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  /**
   * 获取筛选600列表（分页 + 筛选）
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
      const res = await getInformationWeightFiltrateApi(params);
      setDataSource(res.data?.data?.list || []);
      setTotal(res.data?.data?.total || 0);
    } catch (err: any) {
      message.error(err.message || '数据加载失败');
    } finally {
      setLoading(false);
    }
  };

  /**
   * 搜索按钮点击事件
   */
  const handleSearch = () => {
    setPageNum(1);
    fetchList();
  };

  /**
   * 监听筛选条件变化，自动刷新列表
   */
  useEffect(() => {
    setPageNum(1);
    fetchList();
  }, [selectedCkey, selectedBkey]);

  /**
   * 页码变化刷新列表
   */
  useEffect(() => {
    fetchList();
  }, [pageNum]);

  /**
   * 打开编辑弹窗
   */
  const handleEditOpen = (record: InformationWeightFiltrateItem) => {
    editForm.setFieldsValue({
      ...record,
      bkey: sourceOptions.find(item => item.bid === record.bid)?.bkey,
      ckey: categoryOptions.find(item => item.cid === record.cid)?.ckey,
    });
    setEditVisible(true);
  };

  /**
   * 打开新增弹窗
   */
  const handleAddOpen = () => {
    addForm.resetFields();
    setAddVisible(true);
  };

  /**
   * 新增表单提交
   */
  const handleAddSubmit = async () => {
    try {
      const values = await addForm.validateFields();
      setAddLoading(true);

      // 匹配数据源与分类
      const selectedSource = sourceOptions.find(item => item.bkey === values.bkey);
      const selectedCategory = categoryOptions.find(item => item.ckey === values.ckey);

      // 组装提交参数
      const submitParams = {
        ...values,
        bid: selectedSource?.bid,
        cid: selectedCategory?.cid,
        crawler_id: safeInput(values.crawler_id),
        crawler_weight_factor: values.crawler_weight_factor || 0,
        crawler_weight_score: values.crawler_weight_score || 0,
        crawler_score: values.crawler_score || 0,
        information_id: safeInput(values.information_id),
        title: safeInput(values.title),
        read_weight: safeInput(values.read_weight),
        read_weight_factor: values.read_weight_factor || 0,
        read_count: values.read_count || 0,
        read_score: values.read_score || 0,
        comment_weight: safeInput(values.comment_weight),
        comment_weight_factor: values.comment_weight_factor || 0,
        comment_count: values.comment_count || 0,
        comment_score: values.comment_score || 0,
        like_weight: safeInput(values.like_weight),
        like_weight_factor: values.like_weight_factor || 0,
        like_count: values.like_count || 0,
        like_score: values.like_score || 0,
        word_weight: safeInput(values.word_weight),
        word_weight_factor: values.word_weight_factor || 0,
        word_count: values.word_count || 0,
        word_score: values.word_score || 0,
        url: safeInput(values.url),
        created_time: dayjs(values.created_time).format('YYYY-MM-DD HH:mm:ss'),
        information_score: values.information_score || 0,
      };

      // 移除前端临时字段
      delete submitParams.bkey;
      delete submitParams.ckey;

      const res = await addInformationWeightFiltrateApi(submitParams);
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
   * 编辑表单提交
   */
  const handleEditSubmit = async () => {
    try {
      const values = await editForm.validateFields();
      setEditLoading(true);

      // 匹配数据源与分类
      const selectedSource = sourceOptions.find(item => item.bkey === values.bkey);
      const selectedCategory = categoryOptions.find(item => item.ckey === values.ckey);

      // 组装提交参数
      const submitParams = {
        ...values,
        bid: selectedSource?.bid,
        cid: selectedCategory?.cid,
        crawler_id: safeInput(values.crawler_id),
        crawler_weight_factor: values.crawler_weight_factor || 0,
        crawler_weight_score: values.crawler_weight_score || 0,
        crawler_score: values.crawler_score || 0,
        information_id: safeInput(values.information_id),
        title: safeInput(values.title),
        read_weight: safeInput(values.read_weight),
        read_weight_factor: values.read_weight_factor || 0,
        read_count: values.read_count || 0,
        read_score: values.read_score || 0,
        comment_weight: safeInput(values.comment_weight),
        comment_weight_factor: values.comment_weight_factor || 0,
        comment_count: values.comment_count || 0,
        comment_score: values.comment_score || 0,
        like_weight: safeInput(values.like_weight),
        like_weight_factor: values.like_weight_factor || 0,
        like_count: values.like_count || 0,
        like_score: values.like_score || 0,
        word_weight: safeInput(values.word_weight),
        word_weight_factor: values.word_weight_factor || 0,
        word_count: values.word_count || 0,
        word_score: values.word_score || 0,
        url: safeInput(values.url),
        created_time: dayjs(values.created_time).format('YYYY-MM-DD HH:mm:ss'),
        information_score: values.information_score || 0,
      };

      // 删除不需要提交的临时字段
      delete submitParams.weight_filtrate_id;
      delete submitParams.bkey;
      delete submitParams.ckey;

      const res = await updateInformationWeightFiltrateApi(values.weight_filtrate_id, submitParams);
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
  const handleDeleteOpen = (record: InformationWeightFiltrateItem) => {
    setDeleteRecord(record);
    setDeleteVisible(true);
  };

  /**
   * 确认删除
   */
  const handleDeleteConfirm = async () => {
    if (!deleteRecord) return;
    try {
      setDeleteLoading(true);
      const res = await deleteInformationWeightFiltrateApi(deleteRecord.weight_filtrate_id);
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
   * 禁止鼠标滚轮改变数字框值
   */
  const preventWheel = (e: React.WheelEvent) => {
    e.preventDefault();
  };

  /**
   * 数字输入框格式化：仅保留整数
   */
  const integerParser = (value: string | undefined) => {
    if (!value) return 0;
    const num = value.replace(/[^\d]/g, '');
    return num ? parseInt(num, 10) : 0;
  };

  /**
   * 表格列配置（严格与数据库 comment 一致）
   */
  const columns: TableProps<InformationWeightFiltrateItem>['columns'] = [
    {
      title: '序号',
      width: 70,
      align: 'center',
      render: (_, __, index) => (pageNum - 1) * PAGE_SIZE + index + 1,
    },
    { title: '筛选表id', dataIndex: 'weight_filtrate_id', width: 220 },
    { title: '资讯id', dataIndex: 'information_id', width: 220 },
    {
      title: '源名',
      width: 160,
      render: (_, record) => sourceOptions.find(item => item.bid === record.bid)?.bname || record.bid
    },
    { title: '爬虫id', dataIndex: 'crawler_id', width: 160 },
    { title: '爬虫权重系数', dataIndex: 'crawler_weight_factor', width: 120 },
    { title: '爬虫权重分', dataIndex: 'crawler_weight_score', width: 120 },
    { title: '爬虫得分', dataIndex: 'crawler_score', width: 120 },
    { title: '标题', dataIndex: 'title', width: 280 },
    { title: '阅读权重', dataIndex: 'read_weight', width: 120 },
    { title: '阅读权重系数', dataIndex: 'read_weight_factor', width: 120 },
    { title: '阅读数', dataIndex: 'read_count', width: 100 },
    { title: '阅读得分', dataIndex: 'read_score', width: 100 },
    { title: '评论权重', dataIndex: 'comment_weight', width: 120 },
    { title: '评论权重系数', dataIndex: 'comment_weight_factor', width: 120 },
    { title: '评论数', dataIndex: 'comment_count', width: 100 },
    { title: '评论得分', dataIndex: 'comment_score', width: 100 },
    { title: '点赞权重', dataIndex: 'like_weight', width: 120 },
    { title: '点赞权重系数', dataIndex: 'like_weight_factor', width: 120 },
    { title: '点赞数', dataIndex: 'like_count', width: 100 },
    { title: '点赞得分', dataIndex: 'like_score', width: 100 },
    { title: '字数权重', dataIndex: 'word_weight', width: 120 },
    { title: '字数权重系数', dataIndex: 'word_weight_factor', width: 120 },
    { title: '文章字数', dataIndex: 'word_count', width: 120 },
    { title: '字数得分', dataIndex: 'word_score', width: 100 },
    { title: '资讯url', dataIndex: 'url', width: 300 },
    { title: '资讯创建时间', dataIndex: 'created_time', width: 200 },
    { title: '总得分', dataIndex: 'information_score', width: 120 },
    {
      title: '类别名',
      width: 160,
      render: (_, record) => categoryOptions.find(item => item.cid === record.cid)?.cname || record.cid
    },
    { title: '最后更新时间', dataIndex: 'last_update', width: 200 },
    {
      title: '操作',
      width: 160,
      fixed: 'right',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => handleEditOpen(record)}>修改</Button>
          <Button type="link" danger onClick={() => handleDeleteOpen(record)}>删除</Button>
        </Space>
      ),
    },
  ];

  return (
    <MainLayout>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        
        {/* 分类标签筛选栏 */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Tag
            color={selectedCkey === '' ? 'blue' : 'default'}
            onClick={() => setSelectedCkey('')}
            style={{ cursor: 'pointer' }}
          >
            全部类别
          </Tag>
          {categoryOptions.map((item) => (
            <Tag
              key={item.ckey}
              color={selectedCkey === item.ckey ? 'blue' : 'default'}
              onClick={() => setSelectedCkey(item.ckey)}
              style={{ cursor: 'pointer' }}
            >
              {item.cname}
            </Tag>
          ))}
        </div>

        {/* 查询搜索栏 */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Input
              placeholder="搜索标题/资讯url"
              style={{ width: 280 }}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onPressEnter={handleSearch}
            />

            {/* 数据源下拉框 */}
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

        {/* 数据列表 */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Spin spinning={loading}>
            <Table
              rowKey="weight_filtrate_id"
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
      <Modal open={addVisible} onCancel={() => setAddVisible(false)} title="新增筛选600数据" footer={null} width={700}>
        <Form form={addForm} layout="vertical" style={{ height: '70vh', overflowY: 'auto' }}>
          <Form.Item label="资讯id" name="information_id" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="源名" name="bkey" rules={[{ required: true, message: '请选择源名' }]}>
            <Select
              placeholder="请选择源名"
              allowClear
              showSearch={{
                filterOption: (input: string, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
              }}
              options={sourceOptions.map(s => ({ label: s.bname, value: s.bkey }))}
            />
          </Form.Item>

          <Form.Item label="爬虫id" name="crawler_id" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="爬虫权重系数" name="crawler_weight_factor" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="爬虫权重分" name="crawler_weight_score" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="爬虫得分" name="crawler_score">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="标题" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="阅读权重" name="read_weight">
            <Input />
          </Form.Item>
          <Form.Item label="阅读权重系数" name="read_weight_factor">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="阅读数" name="read_count">
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="阅读得分" name="read_score">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="评论权重" name="comment_weight">
            <Input />
          </Form.Item>
          <Form.Item label="评论权重系数" name="comment_weight_factor">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="评论数" name="comment_count">
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="评论得分" name="comment_score">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="点赞权重" name="like_weight">
            <Input />
          </Form.Item>
          <Form.Item label="点赞权重系数" name="like_weight_factor">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="点赞数" name="like_count">
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="点赞得分" name="like_score">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="字数权重" name="word_weight">
            <Input />
          </Form.Item>
          <Form.Item label="字数权重系数" name="word_weight_factor">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="文章字数" name="word_count" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="字数得分" name="word_score">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="总得分" name="information_score" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="资讯url" name="url" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="资讯创建时间" name="created_time" rules={[{ required: true, message: '请选择资讯创建时间' }]}>
            <DatePicker
              style={{ width: '100%' }}
              showTime={{ format: 'HH:mm:ss' }}
              format="YYYY-MM-DD HH:mm:ss"
            />
          </Form.Item>

          <Form.Item label="类别名" name="ckey" rules={[{ required: true, message: '请选择类别名' }]}>
            <Select
              placeholder="请选择类别名"
              allowClear
              showSearch={{
                filterOption: (input: string, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
              }}
              options={categoryOptions.map(c => ({ label: c.cname, value: c.ckey }))}
            />
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
      <Modal open={editVisible} onCancel={() => setEditVisible(false)} title="修改筛选600数据" footer={null} width={700}>
        <Form form={editForm} layout="vertical" style={{ height: '70vh', overflowY: 'auto' }}>
          <Form.Item name="weight_filtrate_id" hidden><Input /></Form.Item>

          <Form.Item label="资讯id" name="information_id" rules={[{ required: true }]}>
            <Input disabled />
          </Form.Item>

          <Form.Item label="源名" name="bkey" rules={[{ required: true, message: '请选择源名' }]}>
            <Select
              placeholder="请选择源名"
              allowClear
              showSearch={{
                filterOption: (input: string, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
              }}
              options={sourceOptions.map(s => ({ label: s.bname, value: s.bkey }))}
            />
          </Form.Item>

          <Form.Item label="爬虫id" name="crawler_id" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="爬虫权重系数" name="crawler_weight_factor" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="爬虫权重分" name="crawler_weight_score" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="爬虫得分" name="crawler_score">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="标题" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="阅读权重" name="read_weight">
            <Input />
          </Form.Item>
          <Form.Item label="阅读权重系数" name="read_weight_factor">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="阅读数" name="read_count">
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="阅读得分" name="read_score">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="评论权重" name="comment_weight">
            <Input />
          </Form.Item>
          <Form.Item label="评论权重系数" name="comment_weight_factor">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="评论数" name="comment_count">
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="评论得分" name="comment_score">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="点赞权重" name="like_weight">
            <Input />
          </Form.Item>
          <Form.Item label="点赞权重系数" name="like_weight_factor">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="点赞数" name="like_count">
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="点赞得分" name="like_score">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="字数权重" name="word_weight">
            <Input />
          </Form.Item>
          <Form.Item label="字数权重系数" name="word_weight_factor">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="文章字数" name="word_count" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>
          <Form.Item label="字数得分" name="word_score">
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="总得分" name="information_score" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} min={0} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="资讯url" name="url" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="资讯创建时间" name="created_time" rules={[{ required: true, message: '请选择资讯创建时间' }]}>
            <DatePicker
              style={{ width: '100%' }}
              showTime={{ format: 'HH:mm:ss' }}
              format="YYYY-MM-DD HH:mm:ss"
            />
          </Form.Item>

          <Form.Item label="类别名" name="ckey" rules={[{ required: true, message: '请选择类别名' }]}>
            <Select
              placeholder="请选择类别名"
              allowClear
              showSearch={{
                filterOption: (input: string, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
              }}
              options={categoryOptions.map(c => ({ label: c.cname, value: c.ckey }))}
            />
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
            <p><strong>筛选表id:</strong> {deleteRecord.weight_filtrate_id}</p>
            <p><strong>资讯id:</strong> {deleteRecord.information_id}</p>
            <p><strong>标题:</strong> {deleteRecord.title}</p>
            <p><strong>总得分:</strong> {deleteRecord.information_score}</p>
            <p><strong>资讯url:</strong> {deleteRecord.url}</p>
            <p style={{ color: '#ff4d4f', marginTop: 10 }}>确定要删除该数据吗?此操作不可恢复!</p>
          </div>
        )}
      </Modal>
    </MainLayout>
  );
}
'use client';

import { useState, useEffect } from 'react';
import {
  Table, Spin, message, Input, Button, Space, Pagination,
  Modal, Form, Select, TableProps, Tag, InputNumber, DatePicker
} from 'antd';
import dayjs from 'dayjs';
import MainLayout from '@/layouts/MainLayout';
import { useMetaStore } from '@/store/useMetaStore';

import {
  getInformationRepetitionResultApi,
  addInformationRepetitionResultApi,
  updateInformationRepetitionResultApi,
  deleteInformationRepetitionResultApi
} from '@/api/index';

import { safeInput } from '@/utils/security';

/**
 * 分页条数常量
 */
const PAGE_SIZE = 10;

/**
 * 滤重结果实体类型定义
 * 严格对应数据库表 information_repetition_result 字段
 */
interface InformationRepetitionResultItem {
  repetition_result_id: string | number; // 滤重结果id 主键
  repetition_num: string;                // 滤重号
  bid: string;                           // 源id
  crawler_id: string;                    // 爬虫id
  information_id: string;                // 资讯id
  title: string;                         // 标题
  read_count: number;                    // 阅读数
  comment_count: number;                 // 评论数
  like_count: number;                    // 点赞次数
  word_count: number;                    // 文章字数
  url: string;                           // 资讯url
  created_time: string;                  // 资讯创建时间
  cid: string;                           // 类别id
  last_update: string;                   // 最后更新时间
}

export default function InformationRepetitionResultPage() {
  // 获取全局公共数据源、分类数据源
  const { sourceOptions, categoryOptions } = useMetaStore();

  // ====================== 查询条件状态 ======================
  const [keyword, setKeyword] = useState('');
  const [selectedCkey, setSelectedCkey] = useState('');
  const [selectedBkey, setSelectedBkey] = useState<string | undefined>(undefined);

  // ====================== 列表数据状态 ======================
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<InformationRepetitionResultItem[]>([]);
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
  const [deleteRecord, setDeleteRecord] = useState<InformationRepetitionResultItem | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  /**
   * 获取滤重结果列表（分页 + 筛选）
   * 严格按照查询条件请求接口
   */
  const fetchList = async () => {
    try {
      setLoading(true);
      const params = {
        keyword: safeInput(keyword || ''),
        bkey: selectedBkey ?? '',
        ckey: selectedCkey || '',
        page_num: pageNum,
      };
      const res = await getInformationRepetitionResultApi(params);
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
   * 重置页码并刷新列表
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
   * 回填数据并将 bid/cid 转为前端选择用的 bkey/ckey
   */
  const handleEditOpen = (record: InformationRepetitionResultItem) => {
    editForm.setFieldsValue({
      ...record,
      bkey: sourceOptions.find(item => item.bid === record.bid)?.bkey,
      ckey: categoryOptions.find(item => item.cid === record.cid)?.ckey,
    });
    setEditVisible(true);
  };

  /**
   * 打开新增弹窗，清空表单
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
        crawler_id: safeInput(values.crawler_id),
        title: safeInput(values.title),
        read_count: values.read_count || 0,
        comment_count: values.comment_count || 0,
        like_count: values.like_count || 0,
        word_count: values.word_count || 0,
        url: safeInput(values.url),
        created_time: dayjs(values.created_time).format('YYYY-MM-DD HH:mm:ss'),
        bid: selectedSource?.bid,
        cid: selectedCategory?.cid,
        repetition_num: safeInput(values.repetition_num),
      };

      // 移除前端临时字段 bkey、ckey
      delete submitParams.bkey;
      delete submitParams.ckey;

      const res = await addInformationRepetitionResultApi(submitParams);
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
        crawler_id: safeInput(values.crawler_id),
        title: safeInput(values.title),
        read_count: values.read_count || 0,
        comment_count: values.comment_count || 0,
        like_count: values.like_count || 0,
        word_count: values.word_count || 0,
        url: safeInput(values.url),
        created_time: dayjs(values.created_time).format('YYYY-MM-DD HH:mm:ss'),
        bid: selectedSource?.bid,
        cid: selectedCategory?.cid,
        repetition_num: safeInput(values.repetition_num),
      };

      // 删除不需要提交的临时字段
      delete submitParams.repetition_result_id;
      delete submitParams.bkey;
      delete submitParams.ckey;

      const res = await updateInformationRepetitionResultApi(values.repetition_result_id, submitParams);
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
  const handleDeleteOpen = (record: InformationRepetitionResultItem) => {
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
      const res = await deleteInformationRepetitionResultApi(deleteRecord.repetition_result_id);
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
   * 表格列配置
   */
  const columns: TableProps<InformationRepetitionResultItem>['columns'] = [
    {
      title: '序号',
      width: 70,
      align: 'center',
      render: (_, __, index) => (pageNum - 1) * PAGE_SIZE + index + 1,
    },
    { title: '滤重结果id', dataIndex: 'repetition_result_id', width: 220 },
    { title: '滤重号', dataIndex: 'repetition_num', width: 160 },
    {
      title: '源名',
      width: 160,
      render: (_, record) => sourceOptions.find(item => item.bid === record.bid)?.bname || record.bid
    },
    { title: '爬虫id', dataIndex: 'crawler_id', width: 160 },
    { title: '资讯id', dataIndex: 'information_id', width: 180 },
    { title: '标题', dataIndex: 'title', width: 280 },
    { title: '阅读数', dataIndex: 'read_count', width: 100 },
    { title: '评论数', dataIndex: 'comment_count', width: 100 },
    { title: '点赞次数', dataIndex: 'like_count', width: 100 },
    { title: '文章字数', dataIndex: 'word_count', width: 120 },
    { title: '资讯url', dataIndex: 'url', width: 300 },
    { title: '资讯创建时间', dataIndex: 'created_time', width: 200 },
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

            <Select
              placeholder="选择源"
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
              rowKey="repetition_result_id"
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
      <Modal open={addVisible} onCancel={() => setAddVisible(false)} title="新增滤重结果" footer={null} width={700}>
        <Form form={addForm} layout="vertical" style={{ height: '70vh', overflowY: 'auto' }}>
          <Form.Item label="滤重号" name="repetition_num" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="源" name="bkey" rules={[{ required: true, message: '请选择源' }]}>
            <Select
              placeholder="请选择源"
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

          <Form.Item label="资讯id" name="information_id" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="标题" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="阅读数" name="read_count">
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="评论数" name="comment_count">
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="点赞次数" name="like_count">
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="文章字数" name="word_count" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
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

          <Form.Item label="类别" name="ckey" rules={[{ required: true, message: '请选择类别' }]}>
            <Select
              placeholder="请选择类别"
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
      <Modal open={editVisible} onCancel={() => setEditVisible(false)} title="修改滤重结果" footer={null} width={700}>
        <Form form={editForm} layout="vertical" style={{ height: '70vh', overflowY: 'auto' }}>
          <Form.Item name="repetition_result_id" hidden><Input /></Form.Item>

          <Form.Item label="滤重号" name="repetition_num" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="源" name="bkey" rules={[{ required: true, message: '请选择源' }]}>
            <Select
              placeholder="请选择源"
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

          <Form.Item label="资讯id" name="information_id" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="标题" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="阅读数" name="read_count">
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="评论数" name="comment_count">
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="点赞次数" name="like_count">
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
          </Form.Item>

          <Form.Item label="文章字数" name="word_count" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} min={0} parser={integerParser} onWheel={preventWheel} />
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

          <Form.Item label="类别" name="ckey" rules={[{ required: true, message: '请选择类别' }]}>
            <Select
              placeholder="请选择类别"
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
            <p><strong>滤重结果id:</strong> {deleteRecord.repetition_result_id}</p>
            <p><strong>滤重号:</strong> {deleteRecord.repetition_num}</p>
            <p><strong>标题:</strong> {deleteRecord.title}</p>
            <p><strong>资讯id:</strong> {deleteRecord.information_id}</p>
            <p style={{ color: '#ff4d4f', marginTop: 10 }}>确定要删除该数据吗?此操作不可恢复!</p>
          </div>
        )}
      </Modal>
    </MainLayout>
  );
}
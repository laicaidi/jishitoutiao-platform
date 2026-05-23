// 滤非法词设置页面
// 功能说明：提供非法词设置 列表查询 / 新增 / 编辑 / 删除 功能
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
  getInformationIllegalitySetApi,
  addInformationIllegalitySetApi,
  updateInformationIllegalitySetApi,
  deleteInformationIllegalitySetApi
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
// 类型定义（严格按库表）
// ==========================
/** 表格列表项类型 */
interface InformationIllegalitySetItem {
  sid: string;          // 设置id
  ikey: string;         // 键
  ivalue: string;       // 值
  remark: string;       // 备注
  last_update: string;  // 更新时间
}

/** 新增/编辑表单类型 */
interface IllegalitySetFormData {
  sid?: string;
  ikey: string;
  ivalue: string;
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
  const [dataSource, setDataSource] = useState<InformationIllegalitySetItem[]>([]);
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
  const [addForm] = Form.useForm<IllegalitySetFormData>();

  /** 编辑弹窗显示状态 */
  const [editVisible, setEditVisible] = useState<boolean>(false);
  /** 编辑按钮加载状态 */
  const [editLoading, setEditLoading] = useState<boolean>(false);
  /** 编辑表单实例 */
  const [editForm] = Form.useForm<IllegalitySetFormData>();

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
      const res = await getInformationIllegalitySetApi(safeInput(keyword), pageNum);
      setDataSource(res.data?.data?.list || []);
      setTotal(res.data?.data?.total_record || 0);
      setPageSize(res.data?.data?.page_size || 10);
    } catch (err: any) {
      message.error(err?.message || '网络异常，加载失败');
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // 【核心】新增提交
  // ==========================
  const handleAdd = async () => {
    try {
      const params = await addForm.validateFields();
      setAddLoading(true);

      const res = await addInformationIllegalitySetApi({
        ikey: safeInput(params.ikey),
        ivalue: safeInput(params.ivalue),
        remark: safeInput(params.remark || ''),
      });

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

  // ==========================
  // 【核心】编辑提交
  // ==========================
  const handleEdit = async () => {
    try {
      const params = await editForm.validateFields();
      setEditLoading(true);

      const res = await updateInformationIllegalitySetApi(params.sid!, {
        ikey: safeInput(params.ikey),
        ivalue: safeInput(params.ivalue),
        remark: safeInput(params.remark || ''),
      });

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

  // ==========================
  // 【核心】删除提交
  // ==========================
  const handleDeleteConfirm = async (record: InformationIllegalitySetItem) => {
    try {
      setLoadingMap(prev => ({ ...prev, [record.sid]: true }));
      const res = await deleteInformationIllegalitySetApi(record.sid);

      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      message.error(err?.message || '网络异常，删除失败');
    } finally {
      setLoadingMap(prev => ({ ...prev, [record.sid]: false }));
      setOpenDeleteId(null);
    }
  };

  // ==========================
  // 打开编辑弹窗
  // ==========================
  const openEdit = (record: InformationIllegalitySetItem) => {
    editForm.setFieldsValue(record);
    setEditVisible(true);
  };

  // ==========================
  // 搜索
  // ==========================
  const handleSearch = () => {
    setPageNum(1);
    fetchList();
  };

  useEffect(() => {
    fetchList();
  }, [pageNum]);

  // ==========================
  // 表格列
  // ==========================
  const columns: ColumnType<InformationIllegalitySetItem>[] = [
    {
      title: '序号',
      key: 'index',
      width: 80,
      align: 'center',
      render: (_, __, index) => (pageNum - 1) * pageSize + index + 1
    },
    { title: '设置id', dataIndex: 'sid', width: 120 },
    { title: '键', dataIndex: 'ikey', width: 160 },
    { title: '值', dataIndex: 'ivalue', width: 160 },
    { title: '备注', dataIndex: 'remark', ellipsis: true },
    { title: '更新时间', dataIndex: 'last_update', width: 190 },
    {
      title: '操作',
      width: 200,
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => openEdit(record)}>修改</Button>
          <Popover
            open={openDeleteId === record.sid}
            onOpenChange={(v) => setOpenDeleteId(v ? record.sid : null)}
            trigger="click"
            placement="right"
            content={
              <div style={{ width: 280 }}>
                <div style={{ marginBottom: 8 }}><Text type="secondary">设置id:</Text>{record.sid}</div>
                <div style={{ marginBottom: 8 }}><Text type="secondary">键:</Text>{record.ikey}</div>
                <div style={{ marginBottom: 8 }}><Text type="secondary">值:</Text>{record.ivalue}</div>
                <div style={{ marginTop: 10, textAlign: 'right' }}>
                  <Space>
                    <Button size="small" onClick={() => setOpenDeleteId(null)}>取消</Button>
                    <Button
                      size="small"
                      danger
                      loading={loadingMap[record.sid]}
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
  // 【重点】布局 1:1 完全复刻类别管理
  // ==========================
  return (
    <MainLayout>
      {/* 这里是关键：height:100% 占满父容器高度，flex 纵向布局 */}
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* 搜索区 */}
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
          <Button type="primary" onClick={() => { addForm.resetFields(); setAddVisible(true); }}>+ 新增</Button>
        </div>

        {/* 表格区 flex:1 自动撑开，把分页挤到底部 */}
        <div style={{ flex: 1 }}>
          <Spin spinning={loading}>
            <Table
              rowKey="sid"
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

        {/* 分页区：被 flex 挤压到最底部 */}
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

      {/* 弹窗部分不变 */}
      <Modal
        title="新增非法词设置"
        open={addVisible}
        onCancel={() => setAddVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setAddVisible(false)}>取消</Button>,
          <Button key="ok" type="primary" loading={addLoading} onClick={handleAdd}>确定</Button>
        ]}
      >
        <Form form={addForm} layout="vertical">
          <Form.Item label="键" name="ikey" rules={[{ required: true }]}><FormInput /></Form.Item>
          <Form.Item label="值" name="ivalue" rules={[{ required: true }]}><FormInput /></Form.Item>
          <Form.Item label="备注" name="remark"><FormInput.TextArea rows={3} /></Form.Item>
        </Form>
      </Modal>

      <Modal
        title="修改非法词设置"
        open={editVisible}
        onCancel={() => setEditVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setEditVisible(false)}>取消</Button>,
          <Button key="ok" type="primary" loading={editLoading} onClick={handleEdit}>确定</Button>
        ]}
      >
        <Form form={editForm} layout="vertical">
          <Form.Item label="设置id" name="sid"><FormInput disabled /></Form.Item>
          <Form.Item label="键" name="ikey" rules={[{ required: true }]}><FormInput /></Form.Item>
          <Form.Item label="值" name="ivalue" rules={[{ required: true }]}><FormInput /></Form.Item>
          <Form.Item label="备注" name="remark"><FormInput.TextArea rows={3} /></Form.Item>
        </Form>
      </Modal>
    </MainLayout>
  );
}
'use client';

import { useState, useEffect } from 'react';
import {
  Table, Spin, message, Input, Button, Pagination,
  Modal, Select, TableProps, Tag
} from 'antd';
import MainLayout from '@/layouts/MainLayout';
import { useMetaStore } from '@/store/useMetaStore';
import { ClearOutlined } from '@ant-design/icons';

import {
  getInformationIllegalityPondApi,
  clearInformationIllegalityPondApi
} from '@/api/index';

import { safeInput } from '@/utils/security';

/**
 * 分页条数常量
 */
const PAGE_SIZE = 10;

/**
 * 滤非法池实体类型定义
 * 对应数据库表 information_illegality_pond
 */
interface InformationIllegalityPondItem {
  illegality_pond_id: string;        // 滤非法池id
  repetition_num: string;           // 滤重号
  bid: string;                      // 源id
  crawler_id: string;               // 爬虫id
  information_id: string;           // 资讯id
  title: string;                    // 标题
  read_count: number;               // 阅读数
  comment_count: number;            // 评论数
  like_count: number;               // 点赞次数
  word_count: number;               // 文章字数
  url: string;                      // 资讯url
  created_time: string;             // 资讯创建时间
  cid: string;                      // 类别id
  last_update: string;              // 最后更新时间
}

export default function InformationIllegalityPondPage() {
  // 获取全局公共数据源、分类数据源（全局store）
  const { sourceOptions, categoryOptions } = useMetaStore();

  // ====================== 查询条件状态 ======================
  const [keyword, setKeyword] = useState('');                // 搜索关键词
  const [selectedCkey, setSelectedCkey] = useState('');     // 选中的类别ckey
  const [selectedBkey, setSelectedBkey] = useState<string | undefined>(undefined); // 选中的源bkey

  // ====================== 列表数据状态 ======================
  const [loading, setLoading] = useState(false);           // 列表加载状态
  const [dataSource, setDataSource] = useState<InformationIllegalityPondItem[]>([]); // 列表数据
  const [pageNum, setPageNum] = useState(1);               // 当前页码
  const [total, setTotal] = useState(0);                   // 数据总条数

  // ====================== 清空滤非法池弹窗状态 ======================
  const [clearVisible, setClearVisible] = useState(false); // 清空确认框显示/隐藏
  const [clearLoading, setClearLoading] = useState(false); // 清空请求加载状态

  /**
   * 获取滤非法池列表（分页 + 条件查询）
   */
  const fetchList = async () => {
    try {
      setLoading(true);
      // 封装查询参数
      const params = {
        keyword: safeInput(keyword || ''),
        bkey: selectedBkey || '',
        ckey: selectedCkey || '',
        page_num: pageNum,
      };
      // 请求接口
      const res = await getInformationIllegalityPondApi(params);
      // 赋值列表数据与总数
      setDataSource(res.data?.data?.list || []);
      setTotal(res.data?.data?.total || 0);
    } catch (err: any) {
      message.error(err.message || '数据加载失败');
    } finally {
      setLoading(false);
    }
  };

  /**
   * 搜索按钮事件：重置页码为1并刷新列表
   */
  const handleSearch = () => {
    setPageNum(1);
    fetchList();
  };

  /**
   * 监听类别/源筛选变化：自动重置页码并刷新列表
   */
  useEffect(() => {
    setPageNum(1);
    fetchList();
  }, [selectedCkey, selectedBkey]);

  /**
   * 监听页码变化：切换页码时刷新列表
   */
  useEffect(() => {
    fetchList();
  }, [pageNum]);

  /**
   * 确认清空滤非法池（调用清空接口）
   * 提示信息以后台返回为准
   */
  const handleClearConfirm = async () => {
    try {
      setClearLoading(true);
      // 调用清空接口
      const res = await clearInformationIllegalityPondApi();
      // 后台返回提示信息
      const msg = res.data?.status?.message;
      if (res.data?.status?.success) {
        message.success(msg);
        setClearVisible(false);
        // 清空成功后刷新列表
        handleSearch();
      } else {
        message.error(msg);
      }
    } catch (err: any) {
      message.error(err?.message || '清空失败');
    } finally {
      setClearLoading(false);
    }
  };

  /**
   * 表格列配置
   */
  const columns: TableProps<InformationIllegalityPondItem>['columns'] = [
    {
      title: '序号',
      width: 70,
      align: 'center',
      render: (_, __, index) => (pageNum - 1) * PAGE_SIZE + index + 1,
    },
    { title: '滤非法池ID', dataIndex: 'illegality_pond_id', width: 220 },
    { title: '滤重号', dataIndex: 'repetition_num', width: 160 },
    {
      title: '源名',
      width: 160,
      render: (_, record) => sourceOptions.find(item => item.bid === record.bid)?.bname || record.bid
    },
    { title: '爬虫ID', dataIndex: 'crawler_id', width: 160 },
    { title: '资讯ID', dataIndex: 'information_id', width: 220 },
    { title: '标题', dataIndex: 'title', width: 280 },
    { title: '阅读数', dataIndex: 'read_count', width: 100 },
    { title: '评论数', dataIndex: 'comment_count', width: 100 },
    { title: '点赞次数', dataIndex: 'like_count', width: 100 },
    { title: '文章字数', dataIndex: 'word_count', width: 120 },
    { title: '资讯URL', dataIndex: 'url', width: 300 },
    { title: '资讯创建时间', dataIndex: 'created_time', width: 200 },
    {
      title: '类别名',
      width: 160,
      render: (_, record) => categoryOptions.find(item => item.cid === record.cid)?.cname || record.cid
    },
    { title: '最后更新时间', dataIndex: 'last_update', width: 200 },
  ];

  return (
    <MainLayout>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        
        {/* 类别标签筛选栏 */}
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

        {/* 查询搜索栏 + 清空滤非法池按钮 */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Input
              placeholder="搜索标题/资讯url"
              style={{ width: 280 }}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onPressEnter={handleSearch}
            />

            {/* 数据源下拉筛选 */}
            <Select
              placeholder="选择源"
              value={selectedBkey}
              onChange={setSelectedBkey}
              style={{ width: 200 }}
              allowClear
              showSearch
              options={sourceOptions.map(s => ({ label: s.bname, value: s.bkey }))}
            />

            <Button type="primary" onClick={handleSearch}>搜索</Button>
          </div>

          {/* 清空滤非法池按钮（危险操作） */}
          <Button
            type="primary"
            danger
            icon={<ClearOutlined />}
            onClick={() => setClearVisible(true)}
          >
            清空滤非法池
          </Button>
        </div>

        {/* 数据表格 */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Spin spinning={loading}>
            <Table
              rowKey="illegality_pond_id"
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

      {/* 清空滤非法池确认弹窗 */}
      <Modal
        title="确认清空"
        open={clearVisible}
        onCancel={() => setClearVisible(false)}
        confirmLoading={clearLoading}
        footer={[
          <Button key="cancel" onClick={() => setClearVisible(false)}>取消</Button>,
          <Button key="ok" type="primary" danger loading={clearLoading} onClick={handleClearConfirm}>确认清空</Button>
        ]}
      >
        <p style={{ color: '#ff4d4f', fontWeight: 500 }}>
          确定清空滤非法池表？清空后不可恢复，是否确认？
        </p>
      </Modal>
    </MainLayout>
  );
}
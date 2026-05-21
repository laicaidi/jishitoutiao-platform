// ==========================
// 全局元数据状态管理（Zustand）
// 作用：统一存储登录后获取的【爬虫源下拉选项】和【类别下拉选项】
// 所有页面（如爬虫管理）都可以从这里直接读取下拉数据
// ==========================
import { create } from 'zustand';

// ==========================
// TS 类型定义
// ==========================

/**
 * 爬虫源下拉选项类型
 * 对应后台 meta 接口返回的 source_option 数组
 */
export interface SourceOption {
  bid: string;    // 爬虫源唯一ID（下拉框value）
  bkey: string;   // 爬虫源key
  bname: string;  // 爬虫源名称（下拉框显示文字）
}

/**
 * 爬虫类别下拉选项类型
 * 对应后台 meta 接口返回的 category_list 数组
 */
export interface CategoryOption {
  cid: string;    // 类别唯一ID（下拉框value）
  ckey: string;   // 类别key
  cname: string;  // 类别名称（下拉框显示文字）
}

// ==========================
// Store 状态接口定义
// ==========================
interface MetaStore {
  // 状态数据
  sourceOptions: SourceOption[];     // 爬虫源下拉列表
  categoryOptions: CategoryOption[]; // 类别下拉列表

  // 操作方法
  /**
   * 保存后台返回的元数据（登录成功后调用）
   * @param data 包含 source_option + category_list
   */
  setMeta: (data: {
    source_option: SourceOption[];
    category_list: CategoryOption[];
  }) => void;

  /**
   * 清空元数据（退出登录时调用）
   */
  clearMeta: () => void;
}

// ==========================
// 创建 Zustand 全局 Store
// ==========================
export const useMetaStore = create<MetaStore>((set) => ({
  // 初始化状态：默认为空数组
  sourceOptions: [],
  categoryOptions: [],

  // ==========================
  // 保存元数据到全局状态
  // ==========================
  setMeta: (data) =>
    set({
      sourceOptions: data.source_option || [],   // 赋值爬虫源
      categoryOptions: data.category_list || [], // 赋值类别
    }),

  // ==========================
  // 清空所有元数据（退出登录用）
  // ==========================
  clearMeta: () =>
    set({
      sourceOptions: [],
      categoryOptions: [],
    }),
}));
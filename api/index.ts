import request from '@/utils/request'

// ==================== 用户模块 ====================
/**
 * 登录接口
 * @param username 用户名
 * @param password 密码
 */
export const loginApi = (username: string, password: string) => {
  return request.post('/user/login', { username, password })
}

// ==================== 全局元数据接口（登录后加载） ====================
/**
 * 获取全局元数据 meta
 * 包含：爬虫源下拉选项 source_option、类别下拉选项 category_list
 * 登录成功后调用一次，存入全局 store 供全局使用
 */
export const getMetaApi = () => {
  return request.get('/meta/')
}

// ==================== 爬虫源管理 ====================
/**
 * 获取源管理列表（带搜索 + 分页）
 * @param keyword 搜索关键词
 * @param page_num 页码
 */
export const getCrawlerSourceApi = (keyword: string, page_num: number) => {
  return request.get('/crawlersource/', {
    params: { keyword, page_num }
  })
}

/**
 * 新增爬虫源
 * @param data 表单参数 { bkey, bname, homepage?, remark? }
 */
export const addCrawlerSourceApi = (data: {
  bkey: string
  bname: string
  homepage?: string
  remark?: string
}) => {
  return request.post('/crawlersource/', data)
}

/**
 * 修改爬虫源
 * @param bid 主键ID
 * @param data 表单参数
 */
export const updateCrawlerSourceApi = (bid: string, data: {
  bkey: string
  bname: string
  homepage?: string
  remark?: string
}) => {
  return request.put(`/crawlersource/${bid}`, data)
}

/**
 * 删除爬虫源
 * @param bid 主键ID
 */
export const deleteCrawlerSourceApi = (bid: string) => {
  return request.delete(`/crawlersource/${bid}`)
}

// ==================== 爬虫类别管理 ====================
/**
 * 获取类别管理列表（带搜索 + 分页）
 * @param keyword 搜索关键词
 * @param page_num 页码
 */
export const getCrawlerCategoryApi = (keyword: string, page_num: number) => {
  return request.get('/crawlercategory/', {
    params: { keyword, page_num }
  })
}

/**
 * 新增爬虫类别
 * @param data 表单参数 { ckey, cname, remark? }
 */
export const addCrawlerCategoryApi = (data: {
  ckey: string
  cname: string
  remark?: string
}) => {
  return request.post('/crawlercategory/', data)
}

/**
 * 修改爬虫类别
 * @param cid 主键ID
 * @param data 表单参数
 */
export const updateCrawlerCategoryApi = (cid: string, data: {
  ckey: string
  cname: string
  remark?: string
}) => {
  return request.put(`/crawlercategory/${cid}`, data)
}

/**
 * 删除爬虫类别
 * @param cid 主键ID
 */
export const deleteCrawlerCategoryApi = (cid: string) => {
  return request.delete(`/crawlercategory/${cid}`)
}

// ==================== 爬虫管理 (严格对应库表 crawler_management，接口名 crawlermanagement，完整带ment) ====================
/**
 * 获取爬虫管理列表（带搜索、源、类别、状态、开关 + 分页）
 * @param params 查询参数
 */
export const getCrawlerManagementApi = (params: {
  keyword?: string
  bkey?: string
  ckey?: string
  crawler_status?: string
  crawler_switch?: string
  page_num: number
}) => {
  return request.get('/crawlermanagement/', { params })
}

/**
 * 新增爬虫
 * @param data 表单参数（严格对应 crawler_management 表）
 */
export const addCrawlerManagementApi = (data: {
  bid: string
  sld: string
  cid: string
  crawler_name: string
  base_url: string
  crawler_directory: string
  crawler_weight_factor: number
  crawler_weight_score: number
  crawler_status: string
  crawler_switch: string
  remark?: string
}) => {
  return request.post('/crawlermanagement/', data)
}

/**
 * 修改爬虫
 * @param crawler_id  放在 URL 里
 * @param data        Body 里不带 crawler_id
 */
export const updateCrawlerManagementApi = (
  crawler_id: string,
  data: {
    bid: string
    sld: string
    cid: string
    crawler_name: string
    base_url: string
    crawler_directory: string
    crawler_weight_factor: number
    crawler_weight_score: number
    crawler_status: string
    crawler_switch: string
    remark?: string
  }
) => {
  return request.put(`/crawlermanagement/${crawler_id}`, data)
}

/**
 * 删除爬虫
 * @param crawler_id 爬虫ID（主键）
 */
export const deleteCrawlerManagementApi = (crawler_id: string) => {
  return request.delete(`/crawlermanagement/${crawler_id}`)
}

// ==================== 爬虫 User-Agent 管理 (严格对齐 crawler_user_agent 表) ====================
/**
 * 获取爬虫 User-Agent 列表（带搜索 + 分页）
 * @param keyword 搜索关键词
 * @param page_num 页码
 */
export const getCrawlerUserAgentApi = (params: {
  keyword?: string
  page_num: number
}) => {
  return request.get('/crawleruseragent/', { params })
}

/**
 * 新增爬虫 User-Agent
 * @param data 表单参数（严格对应 crawler_user_agent 表）
 */
export const addCrawlerUserAgentApi = (data: {
  accept: string
  accept_encoding: string
  accept_language: string
  connection: string
  host: string
  user_agent: string
  remark?: string
}) => {
  return request.post('/crawleruseragent/', data)
}

/**
 * 修改爬虫 User-Agent
 * @param user_agent_id 主键ID
 * @param data 表单参数
 */
export const updateCrawlerUserAgentApi = (
  user_agent_id: string,
  data: {
    accept: string
    accept_encoding: string
    accept_language: string
    connection: string
    host: string
    user_agent: string
    remark?: string
  }
) => {
  return request.put(`/crawleruseragent/${user_agent_id}`, data)
}

/**
 * 删除爬虫 User-Agent
 * @param user_agent_id 主键ID
 */
export const deleteCrawlerUserAgentApi = (user_agent_id: string) => {
  return request.delete(`/crawleruseragent/${user_agent_id}`)
}

// ==================== 爬虫动态IP管理 (严格对应 crawler_dynamic_ip) ====================
/**
 * 获取动态IP列表（带搜索、protocol类型 + 分页）
 */
export const getCrawlerDynamicIpApi = (params: {
  keyword?: string
  protocol?: string
  page_num: number
}) => {
  return request.get('/crawlerdynamicip/', { params })
}

/**
 * 新增动态IP
 */
export const addCrawlerDynamicIpApi = (data: {
  ip_address: string
  port: number
  server_address?: string
  anonymity?: string
  protocol: string
  speed?: string
  connect_time?: string
  alive_duration?: string
  verify_time?: string
}) => {
  return request.post('/crawlerdynamicip/', data)
}

/**
 * 修改动态IP
 */
export const updateCrawlerDynamicIpApi = (
  dynamic_id: string,
  data: {
    ip_address: string
    port: number
    server_address?: string
    anonymity?: string
    protocol: string
    speed?: string
    connect_time?: string
    alive_duration?: string
    verify_time?: string
  }
) => {
  return request.put(`/crawlerdynamicip/${dynamic_id}`, data)
}

/**
 * 删除动态IP
 */
export const deleteCrawlerDynamicIpApi = (dynamic_id: string) => {
  return request.delete(`/crawlerdynamicip/${dynamic_id}`)
}

// ==================== 爬虫设置管理 (严格对应 crawler_set 表) ====================
/**
 * 获取爬虫设置列表（带搜索 + 分页）
 * @param params 查询参数
 */
export const getCrawlerSetApi = (params: {
  keyword?: string
  page_num: number
}) => {
  return request.get('/crawlerset/', { params })
}

/**
 * 新增爬虫设置
 * @param data 表单参数（严格对应 crawler_set 表）
 */
export const addCrawlerSetApi = (data: {
  ckey: string
  cvalue: string
  remark?: string
}) => {
  return request.post('/crawlerset/', data)
}

/**
 * 修改爬虫设置
 * @param sid 主键ID
 * @param data 表单参数
 */
export const updateCrawlerSetApi = (
  sid: string,
  data: {
    ckey: string
    cvalue: string
    remark?: string
  }
) => {
  return request.put(`/crawlerset/${sid}`, data)
}

/**
 * 删除爬虫设置
 * @param sid 主键ID
 */
export const deleteCrawlerSetApi = (sid: string) => {
  return request.delete(`/crawlerset/${sid}`)
}

// ==================== 清洗系统 - 资讯源数据管理 (严格对应 information_source 表) ====================
/**
 * 获取资讯源数据列表（带搜索、类别ckey、爬虫源bkey + 分页）
 * @param params 查询参数
 */
export const getInformationSourceApi = (params: {
  keyword?: string
  ckey?: string      // 统一：类别用 ckey 查询
  bkey?: string      // 统一：数据源用 bkey 查询
  page_num: number
}) => {
  return request.get('/informationsource/', { params });
};

/**
 * 新增资讯源数据
 * @param data 表单参数
 */
export const addInformationSourceApi = (data: {
  bid: string
  crawler_id: string
  title: string
  read_count?: number
  comment_count?: number
  like_count?: number
  word_count: number
  url: string
  created_time: string
  cid: string
}) => {
  return request.post('/informationsource/', data);
};

/**
 * 修改资讯源数据
 * @param information_id 主键ID
 * @param data 表单参数
 */
export const updateInformationSourceApi = (
  information_id: string | number,
  data: {
    bid: string
    crawler_id: string
    title: string
    read_count?: number
    comment_count?: number
    like_count?: number
    word_count: number
    url: string
    created_time: string
    cid: string
  }
) => {
  return request.put(`/informationsource/${information_id}`, data);
};

/**
 * 删除资讯源数据
 * @param information_id 主键ID
 */
export const deleteInformationSourceApi = (information_id: string | number) => {
  return request.delete(`/informationsource/${information_id}`);
};

// ==================== 清洗系统 - 滤重池管理 (严格对应 information_repetition_pond 表) ====================
/**
 * 获取滤重池列表（带搜索、类别ckey、爬虫源bkey + 分页）
 * @param params 查询参数
 */
export const getInformationRepetitionPondApi = (params: {
  keyword?: string
  ckey?: string
  bkey?: string
  page_num: number
}) => {
  return request.get('/informationrepetitionpond/', { params });
};

/**
 * 清空滤重池（DELETE 无ID，整表清空）
 */
export const clearInformationRepetitionPondApi = () => {
  return request.delete('/informationrepetitionpond/');
};

// ==================== 清洗系统 - 滤重结果管理 (严格对应 information_repetition_result 表) ====================
/**
 * 获取滤重结果列表（带搜索、类别ckey、爬虫源bkey + 分页）
 * @param params 查询参数
 */
export const getInformationRepetitionResultApi = (params: {
  keyword?: string
  ckey?: string
  bkey?: string
  page_num: number
}) => {
  return request.get('/informationrepetitionresult/', { params });
};

/**
 * 新增滤重结果
 * @param data 表单参数
 */
export const addInformationRepetitionResultApi = (data: {
  bid: string
  crawler_id: string
  title: string
  read_count?: number
  comment_count?: number
  like_count?: number
  word_count: number
  url: string
  created_time: string
  cid: string
  repetition_num: string
}) => {
  return request.post('/informationrepetitionresult/', data);
};

/**
 * 修改滤重结果
 * @param repetition_result_id 主键ID
 * @param data 表单参数
 */
export const updateInformationRepetitionResultApi = (
  repetition_result_id: string | number,
  data: {
    bid: string
    crawler_id: string
    title: string
    read_count?: number
    comment_count?: number
    like_count?: number
    word_count: number
    url: string
    created_time: string
    cid: string
    repetition_num: string
  }
) => {
  return request.put(`/informationrepetitionresult/${repetition_result_id}`, data);
};

/**
 * 删除滤重结果
 * @param repetition_result_id 主键ID
 */
export const deleteInformationRepetitionResultApi = (repetition_result_id: string | number) => {
  return request.delete(`/informationrepetitionresult/${repetition_result_id}`);
};

// ==================== 清洗系统 - 滤非法池管理 (严格对应 information_illegality_pond 表) ====================
/**
 * 获取滤非法池列表（带搜索、类别ckey、爬虫源bkey + 分页）
 * @param params 查询参数
 */
export const getInformationIllegalityPondApi = (params: {
  keyword?: string
  ckey?: string
  bkey?: string
  page_num: number
}) => {
  return request.get('/informationillegalitypond/', { params });
};

/**
 * 清空滤非法池（DELETE 无ID，整表清空）
 */
export const clearInformationIllegalityPondApi = () => {
  return request.delete('/informationillegalitypond/');
};

// ==================== 清洗系统 - 滤非法结果管理 (严格对应 information_illegality_result 表) ====================
/**
 * 获取滤非法结果列表（带搜索、类别ckey、爬虫源bkey + 分页）
 * @param params 查询参数
 */
export const getInformationIllegalityResultApi = (params: {
  keyword?: string
  ckey?: string
  bkey?: string
  page_num: number
}) => {
  return request.get('/informationillegalityresult/', { params });
};

/**
 * 新增滤非法结果
 * @param data 表单参数
 */
export const addInformationIllegalityResultApi = (data: {
  bid: string
  crawler_id: string
  title: string
  read_count?: number
  comment_count?: number
  like_count?: number
  word_count: number
  url: string
  created_time: string
  cid: string
  repetition_num: string
}) => {
  return request.post('/informationillegalityresult/', data);
};

/**
 * 修改滤非法结果
 * @param illegality_result_id 主键ID
 * @param data 表单参数
 */
export const updateInformationIllegalityResultApi = (
  illegality_result_id: string | number,
  data: {
    bid: string
    crawler_id: string
    title: string
    read_count?: number
    comment_count?: number
    like_count?: number
    word_count: number
    url: string
    created_time: string
    cid: string
    repetition_num: string
  }
) => {
  return request.put(`/informationillegalityresult/${illegality_result_id}`, data);
};

/**
 * 删除滤非法结果
 * @param illegality_result_id 主键ID
 */
export const deleteInformationIllegalityResultApi = (illegality_result_id: string | number) => {
  return request.delete(`/informationillegalityresult/${illegality_result_id}`);
};

// ==================== 清洗系统 - 滤非法设置 (严格对应 information_illegality_set 表) ====================
/**
 * 获取滤非法设置列表（带搜索 + 分页）
 * @param keyword 搜索关键词
 * @param page_num 页码
 */
export const getInformationIllegalitySetApi = (keyword: string, page_num: number) => {
  return request.get('/informationillegalityset/', {
    params: { keyword, page_num }
  })
}

/**
 * 新增滤非法设置
 * @param data 表单参数 { ikey, ivalue, remark? }
 */
export const addInformationIllegalitySetApi = (data: {
  ikey: string
  ivalue: string
  remark?: string
}) => {
  return request.post('/informationillegalityset/', data)
}

/**
 * 修改滤非法设置
 * @param sid 主键ID
 * @param data 表单参数
 */
export const updateInformationIllegalitySetApi = (sid: string, data: {
  ikey: string
  ivalue: string
  remark?: string
}) => {
  return request.put(`/informationillegalityset/${sid}`, data)
}

/**
 * 删除滤非法设置
 * @param sid 主键ID
 */
export const deleteInformationIllegalitySetApi = (sid: string) => {
  return request.delete(`/informationillegalityset/${sid}`)
}

// ==================== 权重得分系统 - 权重源数据 (严格对应 information_weight_source 表) ====================
/**
 * 获取权重源数据列表
 */
export const getInformationWeightSourceApi = (params: {
  keyword?: string
  ckey?: string
  bkey?: string
  page_num: number
}) => {
  return request.get('/informationweightsource/', { params });
};

/**
 * 新增权重源数据
 */
export const addInformationWeightSourceApi = (data: {
  bid: string
  crawler_id: string
  information_id: string
  title: string
  read_count?: number
  comment_count?: number
  like_count?: number
  word_count: number
  url: string
  created_time: string
  cid: string
}) => {
  return request.post('/informationweightsource/', data);
};

/**
 * 修改权重源数据
 */
export const updateInformationWeightSourceApi = (
  weight_source_id: string | number,
  data: {
    bid: string
    crawler_id: string
    information_id: string
    title: string
    read_count?: number
    comment_count?: number
    like_count?: number
    word_count: number
    url: string
    created_time: string
    cid: string
  }
) => {
  return request.put(`/informationweightsource/${weight_source_id}`, data);
};

/**
 * 删除权重源数据
 */
export const deleteInformationWeightSourceApi = (weight_source_id: string | number) => {
  return request.delete(`/informationweightsource/${weight_source_id}`);
};

// ==================== 权重得分系统 - 权重得分结果 (严格对应 information_weight_sort 表) ====================
/**
 * 获取权重得分结果列表
 */
export const getInformationWeightSortApi = (params: {
  keyword?: string
  ckey?: string
  bkey?: string
  page_num: number
}) => {
  return request.get('/informationweightsort/', { params });
};

/**
 * 新增权重得分结果
 */
export const addInformationWeightSortApi = (data: {
  bid: string
  crawler_id: string
  crawler_weight_factor: number
  crawler_weight_score: number
  crawler_score?: number
  information_id: string
  title: string
  read_weight?: string
  read_weight_factor?: number
  read_count?: number
  read_score?: number
  comment_weight?: string
  comment_weight_factor?: number
  comment_count?: number
  comment_score?: number
  like_weight?: string
  like_weight_factor?: number
  like_count?: number
  like_score?: number
  word_weight?: string
  word_weight_factor?: number
  word_count: number
  word_score?: number
  url: string
  created_time: string
  information_score: number
  cid: string
}) => {
  return request.post('/informationweightsort/', data);
};

/**
 * 修改权重得分结果
 */
export const updateInformationWeightSortApi = (
  weight_sort_id: string | number,
  data: {
    bid: string
    crawler_id: string
    crawler_weight_factor: number
    crawler_weight_score: number
    crawler_score?: number
    information_id: string
    title: string
    read_weight?: string
    read_weight_factor?: number
    read_count?: number
    read_score?: number
    comment_weight?: string
    comment_weight_factor?: number
    comment_count?: number
    comment_score?: number
    like_weight?: string
    like_weight_factor?: number
    like_count?: number
    like_score?: number
    word_weight?: string
    word_weight_factor?: number
    word_count: number
    word_score?: number
    url: string
    created_time: string
    information_score: number
    cid: string
  }
) => {
  return request.put(`/informationweightsort/${weight_sort_id}`, data);
};

/**
 * 删除权重得分结果
 */
export const deleteInformationWeightSortApi = (weight_sort_id: string | number) => {
  return request.delete(`/informationweightsort/${weight_sort_id}`);
};

// ==================== 权重得分系统 - 筛选600 (严格对应 information_weight_filtrate 表) ====================
/**
 * 获取筛选600列表
 */
export const getInformationWeightFiltrateApi = (params: {
  keyword?: string
  ckey?: string
  bkey?: string
  page_num: number
}) => {
  return request.get('/informationweightfiltrate/', { params });
};

/**
 * 新增筛选600数据
 */
export const addInformationWeightFiltrateApi = (data: {
  bid: string
  crawler_id: string
  crawler_weight_factor: number
  crawler_weight_score: number
  crawler_score?: number
  information_id: string
  title: string
  read_weight?: string
  read_weight_factor?: number
  read_count?: number
  read_score?: number
  comment_weight?: string
  comment_weight_factor?: number
  comment_count?: number
  comment_score?: number
  like_weight?: string
  like_weight_factor?: number
  like_count?: number
  like_score?: number
  word_weight?: string
  word_weight_factor?: number
  word_count: number
  word_score?: number
  url: string
  created_time: string
  information_score: number
  cid: string
}) => {
  return request.post('/informationweightfiltrate/', data);
};

/**
 * 修改筛选600数据
 */
export const updateInformationWeightFiltrateApi = (
  weight_filtrate_id: string | number,
  data: {
    bid: string
    crawler_id: string
    crawler_weight_factor: number
    crawler_weight_score: number
    crawler_score?: number
    information_id: string
    title: string
    read_weight?: string
    read_weight_factor?: number
    read_count?: number
    read_score?: number
    comment_weight?: string
    comment_weight_factor?: number
    comment_count?: number
    comment_score?: number
    like_weight?: string
    like_weight_factor?: number
    like_count?: number
    like_score?: number
    word_weight?: string
    word_weight_factor?: number
    word_count: number
    word_score?: number
    url: string
    created_time: string
    information_score: number
    cid: string
  }
) => {
  return request.put(`/informationweightfiltrate/${weight_filtrate_id}`, data);
};

/**
 * 删除筛选600数据
 */
export const deleteInformationWeightFiltrateApi = (weight_filtrate_id: string | number) => {
  return request.delete(`/informationweightfiltrate/${weight_filtrate_id}`);
};

// ==================== 权重得分系统 - 权重设置 (严格对应 information_weight_set 表) ====================
/**
 * 获取权重设置列表（带搜索 + 分页）
 * @param keyword 搜索关键词
 * @param page_num 页码
 */
export const getInformationWeightSetApi = (keyword: string, page_num: number) => {
  return request.get('/informationweightset/', {
    params: { keyword, page_num }
  })
}

/**
 * 新增权重设置
 * @param data 表单参数 { wkey, wvalue, remark? }
 */
export const addInformationWeightSetApi = (data: {
  wkey: string
  wvalue: number
  remark?: string
}) => {
  return request.post('/informationweightset/', data)
}

/**
 * 修改权重设置
 * @param sid 主键ID
 * @param data 表单参数
 */
export const updateInformationWeightSetApi = (sid: string, data: {
  wkey: string
  wvalue: number
  remark?: string
}) => {
  return request.put(`/informationweightset/${sid}`, data)
}

/**
 * 删除权重设置
 * @param sid 主键ID
 */
export const deleteInformationWeightSetApi = (sid: string) => {
  return request.delete(`/informationweightset/${sid}`)
}

// ==================== 存储系统 - 资讯列表输出（严格对应 information_output_list 表）====================
/**
 * 获取资讯列表源列表
 */
export const getInformationOutputListApi = (params: {
  keyword?: string
  ckey?: string
  bkey?: string
  page_num: number
}) => {
  return request.get('/informationoutputlist/', { params });
};

/**
 * 新增资讯列表源
 */
export const addInformationOutputListApi = (data: {
  bid: string
  crawler_id: string
  crawler_weight_factor: number
  crawler_weight_score: number
  crawler_score?: number
  information_id: string
  title: string
  read_weight?: string
  read_weight_factor?: number
  read_count?: number
  read_score?: number
  comment_weight?: string
  comment_weight_factor?: number
  comment_count?: number
  comment_score?: number
  like_weight?: string
  like_weight_factor?: number
  like_count?: number
  like_score?: number
  word_weight?: string
  word_weight_factor?: number
  word_count: number
  word_score?: number
  url: string
  created_time: string
  information_score: number
  cid: string
}) => {
  return request.post('/informationoutputlist/', data);
};

/**
 * 修改资讯列表源
 */
export const updateInformationOutputListApi = (
  output_list_id: string | number,
  data: {
    bid: string
    crawler_id: string
    crawler_weight_factor: number
    crawler_weight_score: number
    crawler_score?: number
    information_id: string
    title: string
    read_weight?: string
    read_weight_factor?: number
    read_count?: number
    read_score?: number
    comment_weight?: string
    comment_weight_factor?: number
    comment_count?: number
    comment_score?: number
    like_weight?: string
    like_weight_factor?: number
    like_count?: number
    like_score?: number
    word_weight?: string
    word_weight_factor?: number
    word_count: number
    word_score?: number
    url: string
    created_time: string
    information_score: number
    cid: string
  }
) => {
  return request.put(`/informationoutputlist/${output_list_id}`, data);
};

/**
 * 删除资讯列表源
 */
export const deleteInformationOutputListApi = (output_list_id: string | number) => {
  return request.delete(`/informationoutputlist/${output_list_id}`);
};

// ==================== 存储系统 - 资讯内容输出（严格对应 information_output_article 表）====================
export const getInformationOutputArticleApi = (params: {
  keyword?: string
  ckey?: string
  bkey?: string
  page_num: number
}) => {
  return request.get('/informationoutputarticle/', { params });
};

export const addInformationOutputArticleApi = (data: {
  bid: string
  crawler_id: string
  information_id: string
  title: string
  author?: string
  content: string
  read_count?: number
  origin?: string
  type: string
  picurl?: string
  comment_count?: number
  like_count?: number
  url: string
  created_time: string
  cid: string
}) => {
  return request.post('/informationoutputarticle/', data);
};

export const updateInformationOutputArticleApi = (
  output_article_id: string | number,
  data: {
    bid: string
    crawler_id: string
    information_id: string
    title: string
    author?: string
    content: string
    read_count?: number
    origin?: string
    type: string
    picurl?: string
    comment_count?: number
    like_count?: number
    url: string
    created_time: string
    cid: string
  }
) => {
  return request.put(`/informationoutputarticle/${output_article_id}`, data);
};

export const deleteInformationOutputArticleApi = (output_article_id: string | number) => {
  return request.delete(`/informationoutputarticle/${output_article_id}`);
};

// ==================== 存储系统 - 资讯评论管理（严格对应 information_comment 表）====================
/**
 * 获取评论列表（带搜索 + 分页）
 * @param keyword 搜索关键词
 * @param page_num 页码
 */
export const getInformationCommentApi = (keyword: string, page_num: number) => {
  return request.get('/informationcomment/', {
    params: { keyword, page_num }
  })
}

// ==================== 用户系统 - 用户管理（严格对应 user 表）====================
/**
 * 获取用户列表（带搜索 + 分页）
 * @param keyword 搜索关键词
 * @param page_num 页码
 */
export const getUserApi = (keyword: string, page_num: number) => {
  return request.get('/user/', {
    params: { keyword, page_num }
  })
}
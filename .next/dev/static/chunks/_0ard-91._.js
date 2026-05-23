(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/security.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * XSS 攻击过滤
 * 转义 HTML 特殊字符，过滤恶意脚本
 */ __turbopack_context__.s([
    "safeInput",
    ()=>safeInput,
    "sqlFilter",
    ()=>sqlFilter,
    "xssFilter",
    ()=>xssFilter
]);
function xssFilter(str) {
    if (!str) return '';
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/javascript:/gi, '').replace(/script/gi, '').replace(/on\w+=/gi, '');
}
function sqlFilter(str) {
    if (!str) return '';
    const blackList = /union|select|insert|delete|update|drop|alter|sleep|--|#|\/\*|\*\/|;/gi;
    return str.replace(blackList, '');
}
function safeInput(str) {
    return sqlFilter(xssFilter(str));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/request.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * @description 全局请求封装工具（Axios 二次封装）
 * 作用：统一处理项目中所有接口的请求/响应，实现全局配置与自动化处理
 *
 * 核心功能：
 * 1. 统一配置基础请求地址、超时时间、跨域凭证
 * 2. 全局防重复提交（500ms内相同请求自动拦截）
 * 3. 登录接口频率限制（1分钟最多5次）
 * 4. 自动在请求头携带 Token（鉴权）
 * 5. 统一安全参数过滤，防 XSS 攻击
 * 6. 响应统一处理：业务状态判断、错误提示、登录过期自动跳转
 * 7. 全局异常捕获，避免页面零散错误处理逻辑
 *
 * @dependency axios, useUserStore, auth, security
 * @used-by 项目所有 API 请求（登录、列表、增删改查等）
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$16$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/axios@1.16.0/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/security.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useUserStore.ts [app-client] (ecmascript)");
;
;
;
;
// 创建 axios 实例
const request = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$16$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    // baseURL: 'https://www.jishitoutiao.com/jishitoutiao-api', // 🔥 dev环境地址,不通过服务器的nginx转发，直接访问接口
    baseURL: '/jishitoutiao-api',
    timeout: 10000,
    withCredentials: true
});
// ===================== 全局配置 =====================
// 1. 防重复提交：500ms 内相同请求禁止重复发送
const pendingMap = new Map();
const REQUEST_INTERVAL = 500;
// 2. 登录接口频率限制：1分钟最多5次
const loginLimit = {
    count: 0,
    lastTime: 0,
    maxCount: 5,
    windowTime: 60 * 1000
};
// 生成请求唯一标识
const getRequestKey = (config)=>{
    return [
        config.method,
        config.url,
        JSON.stringify(config.params),
        JSON.stringify(config.data)
    ].join('&');
};
// ===================== 请求拦截器 =====================
request.interceptors.request.use((config)=>{
    const key = getRequestKey(config);
    // 全局防重复提交
    if (pendingMap.has(key)) {
        return Promise.reject(new Error('repeat'));
    }
    pendingMap.set(key, true);
    setTimeout(()=>pendingMap.delete(key), REQUEST_INTERVAL);
    // 仅对登录接口频率限制
    if (config.url?.includes('/user/login')) {
        const now = Date.now();
        // 超过时间窗口，重置计数
        if (now - loginLimit.lastTime > loginLimit.windowTime) {
            loginLimit.count = 0;
            loginLimit.lastTime = now;
        }
        loginLimit.count += 1;
        if (loginLimit.count > loginLimit.maxCount) {
            return Promise.reject(new Error('rate_limit'));
        }
    }
    // 自动携带 token（登录接口除外）
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTokenCookie"])();
    if (token && !config.url?.includes('/user/login')) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    // 统一安全参数过滤，防 XSS 攻击（数字类型不做过滤，避免后端401）
    if (config.data) {
        const safeData = {};
        Object.keys(config.data).forEach((key)=>{
            const val = config.data[key];
            if (typeof val === 'number') {
                safeData[key] = val;
            } else {
                safeData[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeInput"])(val);
            }
        });
        config.data = safeData;
    }
    return config;
});
// ===================== 响应拦截器 =====================
request.interceptors.response.use((response)=>{
    return response;
}, // HTTP 失败：处理登出、重复请求、网络错误
(error)=>{
    const { logout } = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"].getState();
    const pathname = window.location.pathname;
    const isLoginPage = pathname === '/login' || pathname === '/login/';
    // ======================
    // 🔥 核心修复：登录页不做任何拦截跳转！直接放行！
    // ======================
    if (isLoginPage) {
        return Promise.reject(error);
    }
    // 重复请求
    if (error.message === 'repeat') {
        return new Promise(()=>{});
    }
    // 登录限流
    if (error.message === 'rate_limit') {
        return Promise.reject(new Error('登录过于频繁,请1分钟后再试'));
    }
    // 401 / 403
    if (error.response?.status === 401 || error.response?.status === 403) {
        logout();
        window.location.replace('/login');
        return new Promise(()=>{});
    }
    // 网络异常
    if (!error.response) {
        return Promise.resolve({
            data: {}
        });
    }
    // 业务错误
    const errMsg = error.response?.data?.status?.message;
    if (errMsg) {
        return Promise.reject(new Error(errMsg));
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = request;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/api/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCrawlerCategoryApi",
    ()=>addCrawlerCategoryApi,
    "addCrawlerDynamicIpApi",
    ()=>addCrawlerDynamicIpApi,
    "addCrawlerManagementApi",
    ()=>addCrawlerManagementApi,
    "addCrawlerSetApi",
    ()=>addCrawlerSetApi,
    "addCrawlerSourceApi",
    ()=>addCrawlerSourceApi,
    "addCrawlerUserAgentApi",
    ()=>addCrawlerUserAgentApi,
    "addInformationIllegalityResultApi",
    ()=>addInformationIllegalityResultApi,
    "addInformationIllegalitySetApi",
    ()=>addInformationIllegalitySetApi,
    "addInformationOutputArticleApi",
    ()=>addInformationOutputArticleApi,
    "addInformationOutputListApi",
    ()=>addInformationOutputListApi,
    "addInformationRepetitionResultApi",
    ()=>addInformationRepetitionResultApi,
    "addInformationSourceApi",
    ()=>addInformationSourceApi,
    "addInformationWeightFiltrateApi",
    ()=>addInformationWeightFiltrateApi,
    "addInformationWeightSetApi",
    ()=>addInformationWeightSetApi,
    "addInformationWeightSortApi",
    ()=>addInformationWeightSortApi,
    "addInformationWeightSourceApi",
    ()=>addInformationWeightSourceApi,
    "clearInformationIllegalityPondApi",
    ()=>clearInformationIllegalityPondApi,
    "clearInformationRepetitionPondApi",
    ()=>clearInformationRepetitionPondApi,
    "deleteCrawlerCategoryApi",
    ()=>deleteCrawlerCategoryApi,
    "deleteCrawlerDynamicIpApi",
    ()=>deleteCrawlerDynamicIpApi,
    "deleteCrawlerManagementApi",
    ()=>deleteCrawlerManagementApi,
    "deleteCrawlerSetApi",
    ()=>deleteCrawlerSetApi,
    "deleteCrawlerSourceApi",
    ()=>deleteCrawlerSourceApi,
    "deleteCrawlerUserAgentApi",
    ()=>deleteCrawlerUserAgentApi,
    "deleteInformationIllegalityResultApi",
    ()=>deleteInformationIllegalityResultApi,
    "deleteInformationIllegalitySetApi",
    ()=>deleteInformationIllegalitySetApi,
    "deleteInformationOutputArticleApi",
    ()=>deleteInformationOutputArticleApi,
    "deleteInformationOutputListApi",
    ()=>deleteInformationOutputListApi,
    "deleteInformationRepetitionResultApi",
    ()=>deleteInformationRepetitionResultApi,
    "deleteInformationSourceApi",
    ()=>deleteInformationSourceApi,
    "deleteInformationWeightFiltrateApi",
    ()=>deleteInformationWeightFiltrateApi,
    "deleteInformationWeightSetApi",
    ()=>deleteInformationWeightSetApi,
    "deleteInformationWeightSortApi",
    ()=>deleteInformationWeightSortApi,
    "deleteInformationWeightSourceApi",
    ()=>deleteInformationWeightSourceApi,
    "getCrawlerCategoryApi",
    ()=>getCrawlerCategoryApi,
    "getCrawlerDynamicIpApi",
    ()=>getCrawlerDynamicIpApi,
    "getCrawlerManagementApi",
    ()=>getCrawlerManagementApi,
    "getCrawlerSetApi",
    ()=>getCrawlerSetApi,
    "getCrawlerSourceApi",
    ()=>getCrawlerSourceApi,
    "getCrawlerUserAgentApi",
    ()=>getCrawlerUserAgentApi,
    "getInformationCommentApi",
    ()=>getInformationCommentApi,
    "getInformationIllegalityPondApi",
    ()=>getInformationIllegalityPondApi,
    "getInformationIllegalityResultApi",
    ()=>getInformationIllegalityResultApi,
    "getInformationIllegalitySetApi",
    ()=>getInformationIllegalitySetApi,
    "getInformationOutputArticleApi",
    ()=>getInformationOutputArticleApi,
    "getInformationOutputListApi",
    ()=>getInformationOutputListApi,
    "getInformationRepetitionPondApi",
    ()=>getInformationRepetitionPondApi,
    "getInformationRepetitionResultApi",
    ()=>getInformationRepetitionResultApi,
    "getInformationSourceApi",
    ()=>getInformationSourceApi,
    "getInformationWeightFiltrateApi",
    ()=>getInformationWeightFiltrateApi,
    "getInformationWeightSetApi",
    ()=>getInformationWeightSetApi,
    "getInformationWeightSortApi",
    ()=>getInformationWeightSortApi,
    "getInformationWeightSourceApi",
    ()=>getInformationWeightSourceApi,
    "getMetaApi",
    ()=>getMetaApi,
    "getUserApi",
    ()=>getUserApi,
    "loginApi",
    ()=>loginApi,
    "updateCrawlerCategoryApi",
    ()=>updateCrawlerCategoryApi,
    "updateCrawlerDynamicIpApi",
    ()=>updateCrawlerDynamicIpApi,
    "updateCrawlerManagementApi",
    ()=>updateCrawlerManagementApi,
    "updateCrawlerSetApi",
    ()=>updateCrawlerSetApi,
    "updateCrawlerSourceApi",
    ()=>updateCrawlerSourceApi,
    "updateCrawlerUserAgentApi",
    ()=>updateCrawlerUserAgentApi,
    "updateInformationIllegalityResultApi",
    ()=>updateInformationIllegalityResultApi,
    "updateInformationIllegalitySetApi",
    ()=>updateInformationIllegalitySetApi,
    "updateInformationOutputArticleApi",
    ()=>updateInformationOutputArticleApi,
    "updateInformationOutputListApi",
    ()=>updateInformationOutputListApi,
    "updateInformationRepetitionResultApi",
    ()=>updateInformationRepetitionResultApi,
    "updateInformationSourceApi",
    ()=>updateInformationSourceApi,
    "updateInformationWeightFiltrateApi",
    ()=>updateInformationWeightFiltrateApi,
    "updateInformationWeightSetApi",
    ()=>updateInformationWeightSetApi,
    "updateInformationWeightSortApi",
    ()=>updateInformationWeightSortApi,
    "updateInformationWeightSourceApi",
    ()=>updateInformationWeightSourceApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/request.ts [app-client] (ecmascript)");
;
const loginApi = (username, password)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/user/login', {
        username,
        password
    });
};
const getMetaApi = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/meta/');
};
const getCrawlerSourceApi = (keyword, page_num)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/crawlersource/', {
        params: {
            keyword,
            page_num
        }
    });
};
const addCrawlerSourceApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/crawlersource/', data);
};
const updateCrawlerSourceApi = (bid, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/crawlersource/${bid}`, data);
};
const deleteCrawlerSourceApi = (bid)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/crawlersource/${bid}`);
};
const getCrawlerCategoryApi = (keyword, page_num)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/crawlercategory/', {
        params: {
            keyword,
            page_num
        }
    });
};
const addCrawlerCategoryApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/crawlercategory/', data);
};
const updateCrawlerCategoryApi = (cid, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/crawlercategory/${cid}`, data);
};
const deleteCrawlerCategoryApi = (cid)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/crawlercategory/${cid}`);
};
const getCrawlerManagementApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/crawlermanagement/', {
        params
    });
};
const addCrawlerManagementApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/crawlermanagement/', data);
};
const updateCrawlerManagementApi = (crawler_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/crawlermanagement/${crawler_id}`, data);
};
const deleteCrawlerManagementApi = (crawler_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/crawlermanagement/${crawler_id}`);
};
const getCrawlerUserAgentApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/crawleruseragent/', {
        params
    });
};
const addCrawlerUserAgentApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/crawleruseragent/', data);
};
const updateCrawlerUserAgentApi = (user_agent_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/crawleruseragent/${user_agent_id}`, data);
};
const deleteCrawlerUserAgentApi = (user_agent_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/crawleruseragent/${user_agent_id}`);
};
const getCrawlerDynamicIpApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/crawlerdynamicip/', {
        params
    });
};
const addCrawlerDynamicIpApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/crawlerdynamicip/', data);
};
const updateCrawlerDynamicIpApi = (dynamic_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/crawlerdynamicip/${dynamic_id}`, data);
};
const deleteCrawlerDynamicIpApi = (dynamic_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/crawlerdynamicip/${dynamic_id}`);
};
const getCrawlerSetApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/crawlerset/', {
        params
    });
};
const addCrawlerSetApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/crawlerset/', data);
};
const updateCrawlerSetApi = (sid, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/crawlerset/${sid}`, data);
};
const deleteCrawlerSetApi = (sid)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/crawlerset/${sid}`);
};
const getInformationSourceApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationsource/', {
        params
    });
};
const addInformationSourceApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/informationsource/', data);
};
const updateInformationSourceApi = (information_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/informationsource/${information_id}`, data);
};
const deleteInformationSourceApi = (information_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/informationsource/${information_id}`);
};
const getInformationRepetitionPondApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationrepetitionpond/', {
        params
    });
};
const clearInformationRepetitionPondApi = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete('/informationrepetitionpond/');
};
const getInformationRepetitionResultApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationrepetitionresult/', {
        params
    });
};
const addInformationRepetitionResultApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/informationrepetitionresult/', data);
};
const updateInformationRepetitionResultApi = (repetition_result_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/informationrepetitionresult/${repetition_result_id}`, data);
};
const deleteInformationRepetitionResultApi = (repetition_result_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/informationrepetitionresult/${repetition_result_id}`);
};
const getInformationIllegalityPondApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationillegalitypond/', {
        params
    });
};
const clearInformationIllegalityPondApi = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete('/informationillegalitypond/');
};
const getInformationIllegalityResultApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationillegalityresult/', {
        params
    });
};
const addInformationIllegalityResultApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/informationillegalityresult/', data);
};
const updateInformationIllegalityResultApi = (illegality_result_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/informationillegalityresult/${illegality_result_id}`, data);
};
const deleteInformationIllegalityResultApi = (illegality_result_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/informationillegalityresult/${illegality_result_id}`);
};
const getInformationIllegalitySetApi = (keyword, page_num)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationillegalityset/', {
        params: {
            keyword,
            page_num
        }
    });
};
const addInformationIllegalitySetApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/informationillegalityset/', data);
};
const updateInformationIllegalitySetApi = (sid, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/informationillegalityset/${sid}`, data);
};
const deleteInformationIllegalitySetApi = (sid)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/informationillegalityset/${sid}`);
};
const getInformationWeightSourceApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationweightsource/', {
        params
    });
};
const addInformationWeightSourceApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/informationweightsource/', data);
};
const updateInformationWeightSourceApi = (weight_source_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/informationweightsource/${weight_source_id}`, data);
};
const deleteInformationWeightSourceApi = (weight_source_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/informationweightsource/${weight_source_id}`);
};
const getInformationWeightSortApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationweightsort/', {
        params
    });
};
const addInformationWeightSortApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/informationweightsort/', data);
};
const updateInformationWeightSortApi = (weight_sort_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/informationweightsort/${weight_sort_id}`, data);
};
const deleteInformationWeightSortApi = (weight_sort_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/informationweightsort/${weight_sort_id}`);
};
const getInformationWeightFiltrateApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationweightfiltrate/', {
        params
    });
};
const addInformationWeightFiltrateApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/informationweightfiltrate/', data);
};
const updateInformationWeightFiltrateApi = (weight_filtrate_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/informationweightfiltrate/${weight_filtrate_id}`, data);
};
const deleteInformationWeightFiltrateApi = (weight_filtrate_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/informationweightfiltrate/${weight_filtrate_id}`);
};
const getInformationWeightSetApi = (keyword, page_num)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationweightset/', {
        params: {
            keyword,
            page_num
        }
    });
};
const addInformationWeightSetApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/informationweightset/', data);
};
const updateInformationWeightSetApi = (sid, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/informationweightset/${sid}`, data);
};
const deleteInformationWeightSetApi = (sid)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/informationweightset/${sid}`);
};
const getInformationOutputListApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationoutputlist/', {
        params
    });
};
const addInformationOutputListApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/informationoutputlist/', data);
};
const updateInformationOutputListApi = (output_list_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/informationoutputlist/${output_list_id}`, data);
};
const deleteInformationOutputListApi = (output_list_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/informationoutputlist/${output_list_id}`);
};
const getInformationOutputArticleApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationoutputarticle/', {
        params
    });
};
const addInformationOutputArticleApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/informationoutputarticle/', data);
};
const updateInformationOutputArticleApi = (output_article_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/informationoutputarticle/${output_article_id}`, data);
};
const deleteInformationOutputArticleApi = (output_article_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/informationoutputarticle/${output_article_id}`);
};
const getInformationCommentApi = (keyword, page_num)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/informationcomment/', {
        params: {
            keyword,
            page_num
        }
    });
};
const getUserApi = (keyword, page_num)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/user/', {
        params: {
            keyword,
            page_num
        }
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/layouts/MainLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/layout/index.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/menu/index.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LogoutOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+icons@6.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@ant-design/icons/es/icons/LogoutOutlined.js [app-client] (ecmascript) <export default as LogoutOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$AppstoreOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppstoreOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+icons@6.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@ant-design/icons/es/icons/AppstoreOutlined.js [app-client] (ecmascript) <export default as AppstoreOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BugOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BugOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+icons@6.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@ant-design/icons/es/icons/BugOutlined.js [app-client] (ecmascript) <export default as BugOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExperimentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExperimentOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+icons@6.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@ant-design/icons/es/icons/ExperimentOutlined.js [app-client] (ecmascript) <export default as ExperimentOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+icons@6.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@ant-design/icons/es/icons/StarOutlined.js [app-client] (ecmascript) <export default as StarOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DatabaseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+icons@6.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@ant-design/icons/es/icons/DatabaseOutlined.js [app-client] (ecmascript) <export default as DatabaseOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+icons@6.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@ant-design/icons/es/icons/UserOutlined.js [app-client] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useUserStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// 解构 Ant Design 布局基础组件
const { Header, Sider, Content } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
/**
 * 全局统一菜单配置
 * 结构：一级菜单(分组) → 二级菜单(路由页面)
 * 所有菜单路由在此统一维护，避免多处硬编码
 */ const menuItems = [
    {
        key: 'crawler',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BugOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BugOutlined$3e$__["BugOutlined"], {}, void 0, false, {
            fileName: "[project]/layouts/MainLayout.tsx",
            lineNumber: 36,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: '爬虫系统',
        children: [
            {
                key: '/crawler-source',
                label: '源管理'
            },
            {
                key: '/crawler-category',
                label: '类别管理'
            },
            {
                key: '/crawler-management',
                label: '爬虫管理'
            },
            {
                key: '/crawler-user-agent',
                label: 'user-agent管理'
            },
            {
                key: '/crawler-dynamic-ip',
                label: '动态ip管理'
            },
            {
                key: '/crawler-set',
                label: '爬虫时间设置'
            }
        ]
    },
    {
        key: 'clean',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExperimentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExperimentOutlined$3e$__["ExperimentOutlined"], {}, void 0, false, {
            fileName: "[project]/layouts/MainLayout.tsx",
            lineNumber: 49,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: '清洗系统',
        children: [
            {
                key: '/information-source',
                label: '源数据'
            },
            {
                key: '/information-repetition-pond',
                label: '滤重池'
            },
            {
                key: '/information-repetition-result',
                label: '滤重结果'
            },
            {
                key: '/information-illegality-pond',
                label: '滤非法池'
            },
            {
                key: '/information-illegality-result',
                label: '滤非法结果'
            },
            {
                key: '/information-illegality-set',
                label: '滤非法设置'
            }
        ]
    },
    {
        key: 'weight',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarOutlined$3e$__["StarOutlined"], {}, void 0, false, {
            fileName: "[project]/layouts/MainLayout.tsx",
            lineNumber: 62,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: '权重得分系统',
        children: [
            {
                key: '/information-weight-source',
                label: '源数据'
            },
            {
                key: '/information-weight-sort',
                label: '得分数据'
            },
            {
                key: '/information-weight-filtrate',
                label: '筛选600'
            },
            {
                key: '/information-weight-set',
                label: '权重设置'
            }
        ]
    },
    {
        key: 'storage',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DatabaseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseOutlined$3e$__["DatabaseOutlined"], {}, void 0, false, {
            fileName: "[project]/layouts/MainLayout.tsx",
            lineNumber: 73,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: '存储系统',
        children: [
            {
                key: '/information-output-list',
                label: '资讯列表源'
            },
            {
                key: '/information-output-article',
                label: '资讯内容'
            },
            {
                key: '/information-comment',
                label: '评论内容'
            }
        ]
    },
    {
        key: 'user',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"], {}, void 0, false, {
            fileName: "[project]/layouts/MainLayout.tsx",
            lineNumber: 83,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: '用户系统',
        children: [
            {
                key: '/user',
                label: '用户列表'
            }
        ]
    }
];
/**
 * 全局主布局组件
 * 实现：顶部导航 + 左侧菜单 + 右侧内容区
 * 菜单核心能力：路由自动高亮、路由自动展开对应一级分组
 */ const MainLayout = ({ children })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // 获取当前路由，兼容服务端渲染返回 null 情况
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    // 全局用户状态：退出登录方法
    const { logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"])();
    /**
   * 核心：自动计算当前路由所属的一级菜单分组 key
   * 实现路由切换时自动展开对应菜单分组
   * 不使用硬编码映射表，从 menuItems 配置自动推导
   */ const autoOpenKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MainLayout.useMemo[autoOpenKey]": ()=>{
            const currentGroup = menuItems.find({
                "MainLayout.useMemo[autoOpenKey].currentGroup": (group)=>group.children?.some({
                        "MainLayout.useMemo[autoOpenKey].currentGroup": (item)=>item.key === pathname
                    }["MainLayout.useMemo[autoOpenKey].currentGroup"])
            }["MainLayout.useMemo[autoOpenKey].currentGroup"]);
            // 默认展开爬虫系统分组
            return currentGroup ? currentGroup.key : 'crawler';
        }
    }["MainLayout.useMemo[autoOpenKey]"], [
        pathname
    ]);
    // 菜单展开状态（支持用户手动展开/关闭）
    const [openKeys, setOpenKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        autoOpenKey
    ]);
    // 路由变化时，自动切换到当前分组
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MainLayout.useMemo": ()=>{
            setOpenKeys([
                autoOpenKey
            ]);
        }
    }["MainLayout.useMemo"], [
        autoOpenKey
    ]);
    // 允许用户手动控制菜单展开/关闭
    const handleOpenChange = (keys)=>{
        setOpenKeys(keys);
    };
    /**
   * 菜单点击跳转
   * @param key 目标路由路径
   */ const handleMenuClick = ({ key })=>{
        router.push(key);
    };
    /**
   * 退出登录
   * 调用全局状态退出方法，跳转至登录页
   */ const handleLogout = ()=>{
        // 1. 先清空登录状态
        logout();
        // 2. 【强制浏览器硬跳转 + 刷新】解决地址变了页面不变的问题
        setTimeout(()=>{
            window.location.href = '/login';
            window.location.reload();
        }, 80);
    };
    return(// 全局布局：占满全屏，禁止外层滚动
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
        style: {
            height: '100vh',
            width: '100vw',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                style: {
                    background: '#1f2937',
                    height: 64,
                    padding: '0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 600
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$AppstoreOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppstoreOutlined$3e$__["AppstoreOutlined"], {
                                style: {
                                    fontSize: 20,
                                    color: '#40a9ff'
                                }
                            }, void 0, false, {
                                fileName: "[project]/layouts/MainLayout.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "即时头条管理平台"
                            }, void 0, false, {
                                fileName: "[project]/layouts/MainLayout.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/layouts/MainLayout.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                        title: "退出登录",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "primary",
                            danger: true,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LogoutOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutOutlined$3e$__["LogoutOutlined"], {}, void 0, false, {
                                fileName: "[project]/layouts/MainLayout.tsx",
                                lineNumber: 171,
                                columnNumber: 47
                            }, ("TURBOPACK compile-time value", void 0)),
                            onClick: handleLogout,
                            children: "退出登录"
                        }, void 0, false, {
                            fileName: "[project]/layouts/MainLayout.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/layouts/MainLayout.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/layouts/MainLayout.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                style: {
                    flex: 1,
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sider, {
                        width: 220,
                        theme: "dark",
                        style: {
                            height: '100%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            mode: "inline",
                            theme: "dark",
                            selectedKeys: [
                                pathname
                            ],
                            onClick: handleMenuClick,
                            openKeys: openKeys,
                            onOpenChange: handleOpenChange,
                            style: {
                                height: '100%',
                                overflowY: 'auto',
                                borderRight: 0
                            },
                            items: menuItems
                        }, void 0, false, {
                            fileName: "[project]/layouts/MainLayout.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/layouts/MainLayout.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                        style: {
                            margin: 16,
                            padding: 20,
                            background: '#fff',
                            borderRadius: 8,
                            flex: 1,
                            overflow: 'auto'
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/layouts/MainLayout.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/layouts/MainLayout.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/layouts/MainLayout.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(MainLayout, "Jh344szg7UNft18MmOk+/dr1GVI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"]
    ];
});
_c = MainLayout;
const __TURBOPACK__default__export__ = MainLayout;
var _c;
__turbopack_context__.k.register(_c, "MainLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/crawler-category/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/table/index.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/spin/index.js [app-client] (ecmascript) <export default as Spin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/message/index.js [app-client] (ecmascript) <export default as message>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/pagination/index.js [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/form/index.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/popover/index.js [app-client] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/security.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$layouts$2f$MainLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/layouts/MainLayout.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// 爬虫类别管理页面
// 功能说明：提供类别数据的 列表查询 / 新增 / 编辑 / 删除 功能
// 提示规则：所有接口异常优先显示后端返回的 message，无 message 时显示默认异常
// 核心修复：axios 拦截器已抛出错误信息，catch 中直接读取 err.message 即可
'use client';
;
;
;
;
;
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function Page() {
    _s();
    // ==========================
    // 状态管理（全部带注释）
    // ==========================
    /** 表格加载状态 */ const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /** 表格数据源 */ const [dataSource, setDataSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    /** 搜索关键词 */ const [keyword, setKeyword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    /** 当前页码 */ const [pageNum, setPageNum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    /** 数据总条数 */ const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    /** 后台返回每页条数 */ const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    /** 新增弹窗显示状态 */ const [addVisible, setAddVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /** 新增按钮加载状态 */ const [addLoading, setAddLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /** 新增表单实例 */ const [addForm] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm();
    /** 编辑弹窗显示状态 */ const [editVisible, setEditVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /** 编辑按钮加载状态 */ const [editLoading, setEditLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /** 编辑表单实例 */ const [editForm] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm();
    /** 控制删除确认 Popover 显示 */ const [openDeleteId, setOpenDeleteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /** 批量控制删除按钮 loading */ const [loadingMap, setLoadingMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // ==========================
    // 【核心】获取列表数据
    // ==========================
    const fetchList = async ()=>{
        try {
            setLoading(true);
            // 调用查询接口，传入搜索关键词 + 当前页码
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCrawlerCategoryApi"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeInput"])(keyword), pageNum);
            // 设置表格数据
            setDataSource(res.data?.data?.list || []);
            // 设置总条数
            setTotal(res.data?.data?.total_record || 0);
            // 设置后台返回每页条数
            setPageSize(res.data?.data?.page_size || 10);
        } catch (err) {
            // 异常处理：优先显示后端 message，否则显示默认提示
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error(err?.message || '网络异常，加载失败');
        } finally{
            // 无论成功失败，关闭 loading
            setLoading(false);
        }
    };
    // ==========================
    // 【核心】新增提交
    // ==========================
    const handleAdd = async ()=>{
        try {
            // 1. 校验表单
            const params = await addForm.validateFields();
            // 2. 开启按钮 loading
            setAddLoading(true);
            // 3. 调用新增接口
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addCrawlerCategoryApi"])({
                ckey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeInput"])(params.ckey),
                cname: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeInput"])(params.cname),
                remark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeInput"])(params.remark || '')
            });
            // 4. 根据接口返回状态处理
            const msg = res.data?.status?.message;
            if (res.data?.status?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(msg);
                setAddVisible(false); // 关闭弹窗
                addForm.resetFields(); // 重置表单
                // ==================== 统一刷新：重置页码1 + 携带搜索词 ====================
                handleSearch();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error(msg);
            }
        } catch (err) {
            // ✅ 核心：axios 拦截器已抛出后端提示，直接读取 err.message
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error(err?.message || '网络异常，新增失败');
        } finally{
            setAddLoading(false);
        }
    };
    // ==========================
    // 【核心】编辑提交
    // ==========================
    const handleEdit = async ()=>{
        try {
            // 1. 校验编辑表单
            const params = await editForm.validateFields();
            // 2. 开启按钮 loading
            setEditLoading(true);
            // 3. 调用编辑接口（必须传入 cid）
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCrawlerCategoryApi"])(params.cid, {
                ckey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeInput"])(params.ckey),
                cname: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeInput"])(params.cname),
                remark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeInput"])(params.remark || '')
            });
            // 4. 处理返回结果
            const msg = res.data?.status?.message;
            if (res.data?.status?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(msg);
                setEditVisible(false); // 关闭弹窗
                // ==================== 统一刷新：重置页码1 + 携带搜索词 ====================
                handleSearch();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error(msg);
            }
        } catch (err) {
            // ✅ 核心：拦截器抛出后端提示语，直接显示
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error(err?.message || '网络异常，修改失败');
        } finally{
            setEditLoading(false);
        }
    };
    // ==========================
    // 【核心】删除提交
    // ==========================
    const handleDeleteConfirm = async (record)=>{
        try {
            // 开启当前行删除 loading
            setLoadingMap((prev)=>({
                    ...prev,
                    [record.cid]: true
                }));
            // 调用删除接口
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCrawlerCategoryApi"])(record.cid);
            const msg = res.data?.status?.message;
            if (res.data?.status?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(msg);
                // ==================== 统一刷新：重置页码1 + 携带搜索词 ====================
                handleSearch();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error(msg);
            }
        } catch (err) {
            // 统一异常提示
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error(err?.message || '网络异常，删除失败');
        } finally{
            // 关闭 loading & 确认框
            setLoadingMap((prev)=>({
                    ...prev,
                    [record.cid]: false
                }));
            setOpenDeleteId(null);
        }
    };
    // ==========================
    // 打开编辑弹窗（赋值表单）
    // ==========================
    const openEdit = (record)=>{
        editForm.setFieldsValue(record); // 回填当前行数据
        setEditVisible(true); // 打开弹窗
    };
    // ==========================
    // 搜索按钮事件
    // ==========================
    const handleSearch = ()=>{
        setPageNum(1); // 搜索从第一页开始
        fetchList();
    };
    // ==========================
    // 副作用：页码变化刷新列表
    // ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            fetchList();
        }
    }["Page.useEffect"], [
        pageNum
    ]);
    // ==========================
    // 表格列配置
    // ==========================
    const columns = [
        {
            title: '序号',
            key: 'index',
            width: 80,
            align: 'center',
            render: (_, __, index)=>(pageNum - 1) * pageSize + index + 1
        },
        {
            title: '类别ID',
            dataIndex: 'cid',
            width: 120
        },
        {
            title: '类别Key',
            dataIndex: 'ckey',
            width: 160
        },
        {
            title: '类别名称',
            dataIndex: 'cname',
            width: 160
        },
        {
            title: '介绍',
            dataIndex: 'remark',
            ellipsis: true
        },
        {
            title: '更新时间',
            dataIndex: 'update_time',
            width: 190
        },
        {
            title: '操作',
            width: 200,
            render: (_, record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "link",
                            onClick: ()=>openEdit(record),
                            children: "修改"
                        }, void 0, false, {
                            fileName: "[project]/app/crawler-category/page.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
                            open: openDeleteId === record.cid,
                            onOpenChange: (v)=>setOpenDeleteId(v ? record.cid : null),
                            trigger: "click",
                            placement: "right",
                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 280
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                type: "secondary",
                                                children: "ID:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crawler-category/page.tsx",
                                                lineNumber: 266,
                                                columnNumber: 50
                                            }, this),
                                            record.cid
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crawler-category/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                type: "secondary",
                                                children: "Key:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crawler-category/page.tsx",
                                                lineNumber: 267,
                                                columnNumber: 50
                                            }, this),
                                            record.ckey
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crawler-category/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                type: "secondary",
                                                children: "名称:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crawler-category/page.tsx",
                                                lineNumber: 268,
                                                columnNumber: 50
                                            }, this),
                                            record.cname
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crawler-category/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 10,
                                            textAlign: 'right'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    size: "small",
                                                    onClick: ()=>setOpenDeleteId(null),
                                                    children: "取消"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/crawler-category/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    size: "small",
                                                    danger: true,
                                                    loading: loadingMap[record.cid],
                                                    onClick: ()=>handleDeleteConfirm(record),
                                                    children: "确定"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/crawler-category/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/crawler-category/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/crawler-category/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 265,
                                columnNumber: 15
                            }, this),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "link",
                                danger: true,
                                children: "删除"
                            }, void 0, false, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/crawler-category/page.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/crawler-category/page.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
        }
    ];
    // ==========================
    // 页面渲染
    // ==========================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$layouts$2f$MainLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                        placeholder: "输入关键词搜索",
                                        value: keyword,
                                        onChange: (e)=>setKeyword(e.target.value),
                                        onPressEnter: handleSearch,
                                        style: {
                                            width: 280
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/crawler-category/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        type: "primary",
                                        onClick: handleSearch,
                                        children: "搜索"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crawler-category/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "primary",
                                onClick: ()=>{
                                    addForm.resetFields();
                                    setAddVisible(true);
                                },
                                children: "+ 新增"
                            }, void 0, false, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/crawler-category/page.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__["Spin"], {
                            spinning: loading,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                                rowKey: "cid",
                                dataSource: dataSource,
                                columns: columns,
                                pagination: false,
                                scroll: {
                                    y: 'calc(100vh - 260px)'
                                },
                                bordered: true,
                                size: "middle",
                                tableLayout: "fixed"
                            }, void 0, false, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/crawler-category/page.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/crawler-category/page.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "共计 ",
                                    total,
                                    " 条记录"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"], {
                                current: pageNum,
                                total: total,
                                pageSize: pageSize,
                                onChange: setPageNum,
                                showSizeChanger: false
                            }, void 0, false, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/crawler-category/page.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/crawler-category/page.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                title: "新增爬虫类别",
                open: addVisible,
                onCancel: ()=>setAddVisible(false),
                footer: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: ()=>setAddVisible(false),
                        children: "取消"
                    }, "cancel", false, {
                        fileName: "[project]/app/crawler-category/page.tsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        type: "primary",
                        loading: addLoading,
                        onClick: handleAdd,
                        children: "确定"
                    }, "ok", false, {
                        fileName: "[project]/app/crawler-category/page.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this)
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                    form: addForm,
                    layout: "vertical",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                            label: "类别Key",
                            name: "ckey",
                            rules: [
                                {
                                    required: true
                                }
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {}, void 0, false, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 357,
                                columnNumber: 77
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/crawler-category/page.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                            label: "类别名称",
                            name: "cname",
                            rules: [
                                {
                                    required: true
                                }
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {}, void 0, false, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 358,
                                columnNumber: 77
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/crawler-category/page.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                            label: "介绍",
                            name: "remark",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"].TextArea, {
                                rows: 3
                            }, void 0, false, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 359,
                                columnNumber: 47
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/crawler-category/page.tsx",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/crawler-category/page.tsx",
                    lineNumber: 356,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/crawler-category/page.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                title: "修改爬虫类别",
                open: editVisible,
                onCancel: ()=>setEditVisible(false),
                footer: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: ()=>setEditVisible(false),
                        children: "取消"
                    }, "cancel", false, {
                        fileName: "[project]/app/crawler-category/page.tsx",
                        lineNumber: 369,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        type: "primary",
                        loading: editLoading,
                        onClick: handleEdit,
                        children: "确定"
                    }, "ok", false, {
                        fileName: "[project]/app/crawler-category/page.tsx",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this)
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                    form: editForm,
                    layout: "vertical",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                            label: "ID",
                            name: "cid",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                disabled: true
                            }, void 0, false, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 374,
                                columnNumber: 44
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/crawler-category/page.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                            label: "类别Key",
                            name: "ckey",
                            rules: [
                                {
                                    required: true
                                }
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {}, void 0, false, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 375,
                                columnNumber: 77
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/crawler-category/page.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                            label: "类别名称",
                            name: "cname",
                            rules: [
                                {
                                    required: true
                                }
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {}, void 0, false, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 376,
                                columnNumber: 77
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/crawler-category/page.tsx",
                            lineNumber: 376,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                            label: "介绍",
                            name: "remark",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"].TextArea, {
                                rows: 3
                            }, void 0, false, {
                                fileName: "[project]/app/crawler-category/page.tsx",
                                lineNumber: 377,
                                columnNumber: 47
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/crawler-category/page.tsx",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/crawler-category/page.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/crawler-category/page.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/crawler-category/page.tsx",
        lineNumber: 296,
        columnNumber: 5
    }, this);
}
_s(Page, "uDoZBcGEfvQJj7jxvjDnYWvlXn4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0ard-91._.js.map
module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/utils/security.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/utils/request.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$16$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/axios@1.16.0/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/security.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useUserStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useUserStore.ts [app-ssr] (ecmascript)");
;
;
;
;
// 创建 axios 实例
const request = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$16$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
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
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTokenCookie"])();
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
                safeData[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeInput"])(val);
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
    const { logout } = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useUserStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserStore"].getState();
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
}),
"[project]/api/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/request.ts [app-ssr] (ecmascript)");
;
const loginApi = (username, password)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/user/login', {
        username,
        password
    });
};
const getMetaApi = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/meta/');
};
const getCrawlerSourceApi = (keyword, page_num)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/crawlersource/', {
        params: {
            keyword,
            page_num
        }
    });
};
const addCrawlerSourceApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/crawlersource/', data);
};
const updateCrawlerSourceApi = (bid, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/crawlersource/${bid}`, data);
};
const deleteCrawlerSourceApi = (bid)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/crawlersource/${bid}`);
};
const getCrawlerCategoryApi = (keyword, page_num)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/crawlercategory/', {
        params: {
            keyword,
            page_num
        }
    });
};
const addCrawlerCategoryApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/crawlercategory/', data);
};
const updateCrawlerCategoryApi = (cid, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/crawlercategory/${cid}`, data);
};
const deleteCrawlerCategoryApi = (cid)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/crawlercategory/${cid}`);
};
const getCrawlerManagementApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/crawlermanagement/', {
        params
    });
};
const addCrawlerManagementApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/crawlermanagement/', data);
};
const updateCrawlerManagementApi = (crawler_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/crawlermanagement/${crawler_id}`, data);
};
const deleteCrawlerManagementApi = (crawler_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/crawlermanagement/${crawler_id}`);
};
const getCrawlerUserAgentApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/crawleruseragent/', {
        params
    });
};
const addCrawlerUserAgentApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/crawleruseragent/', data);
};
const updateCrawlerUserAgentApi = (user_agent_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/crawleruseragent/${user_agent_id}`, data);
};
const deleteCrawlerUserAgentApi = (user_agent_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/crawleruseragent/${user_agent_id}`);
};
const getCrawlerDynamicIpApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/crawlerdynamicip/', {
        params
    });
};
const addCrawlerDynamicIpApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/crawlerdynamicip/', data);
};
const updateCrawlerDynamicIpApi = (dynamic_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/crawlerdynamicip/${dynamic_id}`, data);
};
const deleteCrawlerDynamicIpApi = (dynamic_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/crawlerdynamicip/${dynamic_id}`);
};
const getCrawlerSetApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/crawlerset/', {
        params
    });
};
const addCrawlerSetApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/crawlerset/', data);
};
const updateCrawlerSetApi = (sid, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/crawlerset/${sid}`, data);
};
const deleteCrawlerSetApi = (sid)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/crawlerset/${sid}`);
};
const getInformationSourceApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationsource/', {
        params
    });
};
const addInformationSourceApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/informationsource/', data);
};
const updateInformationSourceApi = (information_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/informationsource/${information_id}`, data);
};
const deleteInformationSourceApi = (information_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/informationsource/${information_id}`);
};
const getInformationRepetitionPondApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationrepetitionpond/', {
        params
    });
};
const clearInformationRepetitionPondApi = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete('/informationrepetitionpond/');
};
const getInformationRepetitionResultApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationrepetitionresult/', {
        params
    });
};
const addInformationRepetitionResultApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/informationrepetitionresult/', data);
};
const updateInformationRepetitionResultApi = (repetition_result_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/informationrepetitionresult/${repetition_result_id}`, data);
};
const deleteInformationRepetitionResultApi = (repetition_result_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/informationrepetitionresult/${repetition_result_id}`);
};
const getInformationIllegalityPondApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationillegalitypond/', {
        params
    });
};
const clearInformationIllegalityPondApi = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete('/informationillegalitypond/');
};
const getInformationIllegalityResultApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationillegalityresult/', {
        params
    });
};
const addInformationIllegalityResultApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/informationillegalityresult/', data);
};
const updateInformationIllegalityResultApi = (illegality_result_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/informationillegalityresult/${illegality_result_id}`, data);
};
const deleteInformationIllegalityResultApi = (illegality_result_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/informationillegalityresult/${illegality_result_id}`);
};
const getInformationIllegalitySetApi = (keyword, page_num)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationillegalityset/', {
        params: {
            keyword,
            page_num
        }
    });
};
const addInformationIllegalitySetApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/informationillegalityset/', data);
};
const updateInformationIllegalitySetApi = (sid, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/informationillegalityset/${sid}`, data);
};
const deleteInformationIllegalitySetApi = (sid)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/informationillegalityset/${sid}`);
};
const getInformationWeightSourceApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationweightsource/', {
        params
    });
};
const addInformationWeightSourceApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/informationweightsource/', data);
};
const updateInformationWeightSourceApi = (weight_source_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/informationweightsource/${weight_source_id}`, data);
};
const deleteInformationWeightSourceApi = (weight_source_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/informationweightsource/${weight_source_id}`);
};
const getInformationWeightSortApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationweightsort/', {
        params
    });
};
const addInformationWeightSortApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/informationweightsort/', data);
};
const updateInformationWeightSortApi = (weight_sort_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/informationweightsort/${weight_sort_id}`, data);
};
const deleteInformationWeightSortApi = (weight_sort_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/informationweightsort/${weight_sort_id}`);
};
const getInformationWeightFiltrateApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationweightfiltrate/', {
        params
    });
};
const addInformationWeightFiltrateApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/informationweightfiltrate/', data);
};
const updateInformationWeightFiltrateApi = (weight_filtrate_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/informationweightfiltrate/${weight_filtrate_id}`, data);
};
const deleteInformationWeightFiltrateApi = (weight_filtrate_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/informationweightfiltrate/${weight_filtrate_id}`);
};
const getInformationWeightSetApi = (keyword, page_num)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationweightset/', {
        params: {
            keyword,
            page_num
        }
    });
};
const addInformationWeightSetApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/informationweightset/', data);
};
const updateInformationWeightSetApi = (sid, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/informationweightset/${sid}`, data);
};
const deleteInformationWeightSetApi = (sid)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/informationweightset/${sid}`);
};
const getInformationOutputListApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationoutputlist/', {
        params
    });
};
const addInformationOutputListApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/informationoutputlist/', data);
};
const updateInformationOutputListApi = (output_list_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/informationoutputlist/${output_list_id}`, data);
};
const deleteInformationOutputListApi = (output_list_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/informationoutputlist/${output_list_id}`);
};
const getInformationOutputArticleApi = (params)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationoutputarticle/', {
        params
    });
};
const addInformationOutputArticleApi = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/informationoutputarticle/', data);
};
const updateInformationOutputArticleApi = (output_article_id, data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/informationoutputarticle/${output_article_id}`, data);
};
const deleteInformationOutputArticleApi = (output_article_id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/informationoutputarticle/${output_article_id}`);
};
const getInformationCommentApi = (keyword, page_num)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/informationcomment/', {
        params: {
            keyword,
            page_num
        }
    });
};
const getUserApi = (keyword, page_num)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/user/', {
        params: {
            keyword,
            page_num
        }
    });
};
}),
"[project]/store/useMetaStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMetaStore",
    ()=>useMetaStore
]);
// ==========================
// 全局元数据状态管理（Zustand）
// 作用：统一存储登录后获取的【爬虫源下拉选项】和【类别下拉选项】
// 所有页面（如爬虫管理）都可以从这里直接读取下拉数据
// ==========================
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$13_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$4$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.13_@types+react@19.2.14_react@19.2.4/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useMetaStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$13_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$4$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        // 初始化状态：默认为空数组
        sourceOptions: [],
        categoryOptions: [],
        // ==========================
        // 保存元数据到全局状态
        // ==========================
        setMeta: (data)=>set({
                sourceOptions: data.source_option || [],
                categoryOptions: data.category_list || []
            }),
        // ==========================
        // 清空所有元数据（退出登录用）
        // ==========================
        clearMeta: ()=>set({
                sourceOptions: [],
                categoryOptions: []
            })
    }));
}),
"[project]/app/login/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/form/index.js [app-ssr] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/input/index.js [app-ssr] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/button/index.js [app-ssr] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/card/index.js [app-ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/message/index.js [app-ssr] (ecmascript) <export default as message>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useUserStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useUserStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$md5$40$2$2e$3$2e$0$2f$node_modules$2f$md5$2f$md5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/md5@2.3.0/node_modules/md5/md5.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useMetaStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useMetaStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/security.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const { Title } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function Login() {
    // ====================== 全局状态 & 路由 ======================
    /** 用户状态管理：设置token */ const { setToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useUserStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserStore"])();
    /** 全局元数据状态：设置系统基础数据 */ const metaStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useMetaStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMetaStore"])();
    /** 路由跳转工具 */ const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    /** 表单实例：用于表单校验、获取值 */ const [form] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm();
    // ====================== 验证码相关状态 ======================
    /** 用户输入的验证码 */ const [captcha, setCaptcha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    /** 系统生成的验证码 */ const [captchaCode, setCaptchaCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // ====================== 工具方法 ======================
    /**
   * 生成随机4位大写字母验证码
   */ const generateCaptcha = ()=>{
        const code = Math.random().toString(36).slice(2, 6).toUpperCase();
        setCaptchaCode(code);
    };
    // ====================== 生命周期 ======================
    /** 页面加载时，自动生成一次验证码 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        generateCaptcha();
    }, []);
    // ====================== 登录核心逻辑 ======================
    /**
   * 登录按钮点击事件
   * 1. 表单校验
   * 2. 验证码校验
   * 3. 密码MD5加密 + base64编码
   * 4. 调用登录接口
   * 5. 处理登录结果
   * 6. 保存token + 加载元数据 + 跳转首页
   */ const handleLogin = async ()=>{
        try {
            // 1. 执行表单必填项校验
            const values = await form.validateFields();
            // 2. 校验验证码是否正确（不区分大小写）
            if (values.captcha.toUpperCase() !== captchaCode) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error('验证码错误');
                generateCaptcha();
                return;
            }
            // ======================
            // 【安全过滤】XSS + SQL注入防护
            // ======================
            const safeUsername = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeInput"])(values.username);
            const safePassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$security$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeInput"])(values.password);
            // 3. 密码加密：先MD5，再base64（与后台规则保持一致）
            const encryptedPwd = btoa((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$md5$40$2$2e$3$2e$0$2f$node_modules$2f$md5$2f$md5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(safePassword));
            // 4. 调用登录接口
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginApi"])(safeUsername, encryptedPwd);
            const resData = res.data;
            // 5. 登录失败：动态读取后端返回的 message，不写死
            if (!resData.status.success) {
                const msg = resData.status.message || '登录失败';
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error(msg);
                return;
            }
            // 6. 登录成功：保存token到状态 + Cookie，提示固定为登录成功
            setToken(resData.auth.access_token);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success('登录成功');
            // 登录成功后加载全局元数据（分类、来源等）
            const metaRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMetaApi"])();
            metaStore.setMeta(metaRes.data.meta);
            // 跳转到首页
            router.push('/crawler-source');
        } catch (err) {
            // ======================
            // 异常处理：优先读取后端返回的真实错误信息
            // ======================
            try {
                // 如果是接口返回的业务错误
                if (err?.response?.data?.status?.message) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error(err.response.data.status.message);
                } else if (err?.message) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error(err.message);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error('登录失败，请稍后重试');
                }
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error('登录失败，请稍后重试');
            }
        }
    };
    // ====================== 页面渲染 ======================
    return(// 🔥 只加了这一个单词：suppressHydrationWarning
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        suppressHydrationWarning: true,
        style: {
            width: '100vw',
            height: '100vh',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0f121a',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                },
                viewBox: "0 0 1920 1080",
                preserveAspectRatio: "xMidYMid slice",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "skyDark",
                            x1: "0%",
                            y1: "0%",
                            x2: "0%",
                            y2: "100%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#0f121a"
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#1e293b"
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/login/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "100%",
                        height: "100%",
                        fill: "url(#skyDark)"
                    }, void 0, false, {
                        fileName: "[project]/app/login/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fill: "#0b0e16",
                        opacity: "0.85",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "100",
                                y: "400",
                                width: "140",
                                height: "680"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "290",
                                y: "320",
                                width: "100",
                                height: "760"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "440",
                                y: "370",
                                width: "110",
                                height: "710"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "600",
                                y: "280",
                                width: "140",
                                height: "800"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "790",
                                y: "410",
                                width: "100",
                                height: "670"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "950",
                                y: "310",
                                width: "130",
                                height: "770"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "1140",
                                y: "360",
                                width: "100",
                                height: "720"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "1290",
                                y: "410",
                                width: "110",
                                height: "670"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "1450",
                                y: "340",
                                width: "100",
                                height: "740"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "1600",
                                y: "390",
                                width: "130",
                                height: "690"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "1750",
                                y: "420",
                                width: "120",
                                height: "660"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/login/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/login/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                style: {
                    width: 420,
                    background: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    zIndex: 10,
                    padding: '40px 36px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 32
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                level: 2,
                                style: {
                                    color: '#fff',
                                    margin: 0
                                },
                                children: "即时头条"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(255,255,255,0.55)',
                                    marginTop: 10
                                },
                                children: "综合管理平台"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/login/page.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                        form: form,
                        layout: "vertical",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                name: "username",
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入账号'
                                    }
                                ],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                    placeholder: "请输入账号",
                                    size: "large",
                                    style: {
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        color: '#fff'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                name: "password",
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入密码'
                                    },
                                    {
                                        min: 6,
                                        message: '密码至少6位'
                                    }
                                ],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"].Password, {
                                    placeholder: "请输入密码",
                                    size: "large",
                                    style: {
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        color: '#fff'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                name: "captcha",
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入验证码'
                                    }
                                ],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 10
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            placeholder: "验证码",
                                            size: "large",
                                            style: {
                                                background: 'rgba(255,255,255,0.08)',
                                                border: '1px solid rgba(255,255,255,0.15)',
                                                color: '#fff'
                                            },
                                            value: captcha,
                                            onChange: (e)=>setCaptcha(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/login/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: generateCaptcha,
                                            style: {
                                                width: 120,
                                                height: 40,
                                                background: '#1e293b',
                                                color: '#fff',
                                                textAlign: 'center',
                                                lineHeight: '40px',
                                                borderRadius: 6,
                                                cursor: 'pointer',
                                                userSelect: 'none'
                                            },
                                            children: captchaCode
                                        }, void 0, false, {
                                            fileName: "[project]/app/login/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                    type: "primary",
                                    onClick: handleLogin,
                                    block: true,
                                    size: "large",
                                    children: "登录"
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/login/page.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/login/page.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/login/page.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this));
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0.m_ky9._.js.map
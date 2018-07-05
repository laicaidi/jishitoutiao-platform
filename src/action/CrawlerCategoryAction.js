import fetch from 'cross-fetch';
import moment from 'moment';
import { message } from 'antd';

function consoleAndMessageOnError(text) {
    console.log(text);
    message.error(text);
}

function messageAfterFetch(success, message) {
    if (success) {
        message.success(message);
    } else {
        message.error(message);
    }
}

/**
 *  action 类型
 */

 export const GET_ALL_CRAWLER_CATEGORY_REQUEST = 'GET_ALL_CRAWLER_CATEGORY_REQUEST';        // 获取所有类别
 export const GET_ALL_CRAWLER_CATEGORY_SUCCESS = 'GET_ALL_CRAWLER_CATEGORY_SUCCESS';        // 获取成功
 export const GET_ALL_CRAWLER_CATEGORY_FAILURE = 'GET_ALL_CRAWLER_CATEGORY_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllCrawlerCategoryRequest() {
    return {
        type: GET_ALL_CRAWLER_CATEGORY_REQUEST
    }
}
function getAllCrawlerCategorySuccess(json) {
    return {
        type: GET_ALL_CRAWLER_CATEGORY_SUCCESS,
        status: json.status,
        payload: json.data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllCrawlerCategoryFailure(error) {
    return {
        type: GET_ALL_CRAWLER_CATEGORY_FAILURE,
        error
    }
}
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} pageNum 页码
 */
export function fetchGetAllCrawlerCategory(keyword, pageNum) {
    return function(dispatch, getState) {
        dispatch(getAllCrawlerCategoryRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // 拼接url请求
        var url = '/crawlercategory/';
        var params = `?keyword=${keyword}&page_num=${pageNum}`;

        var myInit = {
            method: 'GET',
            mode: 'cors',       // 允许跨域发送请求
            headers: {
                'Authorization': token ? token : '',
                'Accept': 'application/json,text/javascript,application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Headers': 'x-requested-with,Cache-Control,Pragma,Content-Type,Authorization',     // //允许使用的请求方法
                'Access-Control-Allow-Credentials': 'true'      // 是否允许请求带有验证信息
            }
        }
        return fetch(url + params, myInit)
                    .then(
                        response => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                consoleAndMessageOnError('请求失败；Code:' + response.status);
                            }
                        }
                    )
                    .then(
                        json => dispatch(getAllCrawlerCategorySuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllCrawlerCategoryFailure(error));
                        message.error(error);
                    })
    }
}

export const ADD_CRAWLER_CATEGORY_REQUEST = 'ADD_CRAWLER_CATEGORY_REQUEST';     // 新增分类
export const ADD_CRAWLER_CATEGORY_SUCCESS = 'ADD_CRAWLER_CATEGORY_SUCCESS';     // 新增成功
export const ADD_CRAWLER_CATEGORY_FAILURE = 'ADD_CRAWLER_CATEGORY_FAILURE';     // 新增失败
function addCrawlerCategoryRequest() {
    return {
        type: ADD_CRAWLER_CATEGORY_REQUEST
    }
}
function addCrawlerCategorySuccess(json) {
    return {
        type: ADD_CRAWLER_CATEGORY_SUCCESS,
        status: json.status
    }
}
function addCrawlerCategoryFailure(error) {
    return {
        type: ADD_CRAWLER_CATEGORY_FAILURE,
        status: {
            'success': false,
            'message': '新增失败,请检查类别key或类别名称是否重复',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} formData 要增加的分类数据
 * @param {*} addResult 新增结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchAddCrawlerCategory(formData, addResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(addCrawlerCategoryRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = '/crawlercategory/';
        var myInit = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': token ? token : '',
                'Accept': 'application/json,text/javascript,application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Headers': 'x-requested-with,Cache-Control,Pragma,Content-Type,Authorization',     // //允许使用的请求方法
                'Access-Control-Allow-Credentials': 'true'      // 是否允许请求带有验证信息
            },
            body: JSON.stringify(formData)      // 新增数据
        }

        return fetch(url, myInit)
                    .then(
                        response => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                consoleAndMessageOnError('请求失败；Code:' + response.status);
                            }
                        }
                    )
                    .then(
                        json => {
                            dispatch(addCrawlerCategorySuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            addResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(addCrawlerCategoryFailure(error));
                        message.error(error);
                    })
    }
}

export const DELETE_CRAWLER_CATEGORY_REQUEST = 'DELETE_CRAWLER_CATEGORY_REQUEST';       // 删除分类
export const DELETE_CRAWLER_CATEGORY_SUCCESS = 'DELETE_CRAWLER_CATEGORY_SUCCESS';       // 删除成功
export const DELETE_CRAWLER_CATEGORY_FAILURE = 'DELETE_CRAWLER_CATEGROY_FAILURE';       // 删除失败
function deleteCrawlerCategoryRequest() {
    return {
        type: DELETE_CRAWLER_CATEGORY_REQUEST
    }
}
function deleteCrawlerCategorySuccess(json) {
    return {
        type: DELETE_CRAWLER_CATEGORY_SUCCESS,
        status: json.status
    }
}
function deleteCrawlerCategoryFailure(error) {
    return {
        type: DELETE_CRAWLER_CATEGORY_FAILURE,
        status: {
            'success': false,
            'message': '删除失败，无此记录',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} cid 要删除的分类id
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchDeleteCrawlerCategory(cid, handleGet) {
    return function(dispatch, getState) {
        dispatch(deleteCrawlerCategoryRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url =`/crawlercategory/${cid}`;
        var myInit = {
            method: 'DELETE',
            mode: 'cors',       // 允许跨域发送请求
            headers: {
                'Authorization': token ? token : '',
                'Accept': 'application/json,text/javascript,application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Headers': 'x-requested-with,Cache-Control,Pragma,Content-Type,Authorization',     // //允许使用的请求方法
                'Access-Control-Allow-Credentials': 'true'      // 是否允许请求带有验证信息
            }
        }

        return fetch(url, myInit)
                    .then(
                        response => {
                            if (response.ok) {
                                return response.json()
                            } else {
                                consoleAndMessageOnError('请求失败；Code:' + response.status);
                            }
                        }
                    )
                    .then(
                        // 删除成功,将消息体赋值给json
                        json => {
                            dispatch(deleteCrawlerCategorySuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteCrawlerCategoryFailure(error));
                        message.error(error);
                    })
    }
}

export const UPDATE_CRAWLER_CATEGORY_REQUEST = 'UPDATE_CRAWLER_CATEGORY_REQUEST';
export const UPDATE_CRAWLER_CATEGORY_SUCCESS = 'UPDATE_CRAWLER_CATEGORY_SUCCESS';
export const UPDATE_CRAWLER_CATEGORY_FAILURE = 'UPDATE_CRAWLER_CATEGORY_FAILURE';
function updateCrawlerCategoryRequest() {
    return {
        type: UPDATE_CRAWLER_CATEGORY_REQUEST
    }
}
function updateCrawlerCategorySuccess(json) {
    return {
        type: UPDATE_CRAWLER_CATEGORY_SUCCESS,
        status: json.status
    }
}
function updateCrawlerCategoryFailure(error) {
    return {
        type: UPDATE_CRAWLER_CATEGORY_FAILURE,
        status: {
            'success': false,
            'message': '更新失败,请检查类别key或类别名称是否重复',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} cid 要更新的分类id
 * @param {*} formData 要更新的分类数据
 * @param {*} updateResult 更新结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchUpdateCrawlerCategory(cid, formData, updateResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(updateCrawlerCategoryRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `/crawlercategory/${cid}`;
        var myInit = {
            method: 'PUT',
            mode: 'cors',       // 允许跨域发送请求
            headers: {
                'Authorization': token ? token : '',
                'Accept': 'application/json,text/javascript,application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Headers': 'x-requested-with,Cache-Control,Pragma,Content-Type,Authorization',     // //允许使用的请求方法
                'Access-Control-Allow-Credentials': 'true'      // 是否允许请求带有验证信息
            },
            body: JSON.stringify(formData)      // 更新数据
        }

        return fetch(url, myInit)
                    .then(
                        response => {
                            if (response.ok) {
                                return response.json()
                            } else {
                                consoleAndMessageOnError('请求失败；Code:' + response.status);
                            }
                        }
                    )
                    .then(
                        // 更新成功,将消息体赋值给json
                        json => {
                            dispatch(updateCrawlerCategorySuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            updateResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(updateCrawlerCategoryFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_CRAWLER_CATEGORY_FILTRATE = 'CHANGE_CRAWLER_CATEGORY_FILTRATE';
/**
 * 
 * @param {*} keyword 搜索关键字
 */
export function changeCrawlerCategoryFiltrate(keyword) {      // 更改筛选条件
    return {
        type: CHANGE_CRAWLER_CATEGORY_FILTRATE,
        keyword: keyword
    }
}
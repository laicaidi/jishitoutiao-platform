import fetch from 'cross-fetch';
import moment from 'moment';
import { message } from 'antd';
import {
    baseUrl
} from './BaseUrl';

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

 export const GET_ALL_CRAWLER_MANAGEMENT_REQUEST = 'GET_ALL_CRAWLER_MANAGEMENT_REQUEST';        // 获取所有爬虫
 export const GET_ALL_CRAWLER_MANAGEMENT_SUCCESS = 'GET_ALL_CRAWLER_MANAGEMENT_SUCCESS';        // 获取成功
 export const GET_ALL_CRAWLER_MANAGEMENT_FAILURE = 'GET_ALL_CRAWLER_MANAGEMENT_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllCrawlerManagementRequest() {
    return {
        type: GET_ALL_CRAWLER_MANAGEMENT_REQUEST
    }
}
function getAllCrawlerManagementSuccess(json) {
    return {
        type: GET_ALL_CRAWLER_MANAGEMENT_SUCCESS,
        status: json.status,
        payload: json.data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllCrawlerManagementFailure(error) {
    return {
        type: GET_ALL_CRAWLER_MANAGEMENT_FAILURE,
        error
    }
}
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} pageNum 页码
 * @param {*} bkey 源key
 * @param {*} ckey 类别key
 * @param {*} crawlerStatus 爬虫状态
 * @param {*} crawlerSwitch 爬虫开关
 */
export function fetchGetAllCrawlerManagement(keyword, pageNum, bkey, ckey, crawlerStatus, crawlerSwitch) {
    return function(dispatch, getState) {
        dispatch(getAllCrawlerManagementRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // 拼接url请求
        var url = `${baseUrl}/crawlermanagement/`;
        var params = `?keyword=${keyword}&bkey=${bkey}&ckey=${ckey}&crawler_status=${crawlerStatus}&crawler_switch=${crawlerSwitch}&page_num=${pageNum}`;

        var myInit = {
            method: 'GET',
            mode: 'cors',       // 允许跨域发送请求
            headers: {
                'Authorization': token ? token : '',
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
                        json => dispatch(getAllCrawlerManagementSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllCrawlerManagementFailure(error));
                        message.error(error);
                    })
    }
}

export const ADD_CRAWLER_MANAGEMENT_REQUEST = 'ADD_CRAWLER_MANAGEMENT_REQUEST';     // 新增爬虫
export const ADD_CRAWLER_MANAGEMENT_SUCCESS = 'ADD_CRAWLER_MANAGEMENT_SUCCESS';     // 新增成功
export const ADD_CRAWLER_MANAGEMENT_FAILURE = 'ADD_CRAWLER_MANAGEMENT_FAILURE';     // 新增失败
function addCrawlerManagementRequest() {
    return {
        type: ADD_CRAWLER_MANAGEMENT_REQUEST
    }
}
function addCrawlerManagementSuccess(json) {
    return {
        type: ADD_CRAWLER_MANAGEMENT_SUCCESS,
        status: json.status
    }
}
function addCrawlerManagementFailure(error) {
    return {
        type: ADD_CRAWLER_MANAGEMENT_FAILURE,
        status: {
            'success': false,
            'message': '新增失败,请检查爬虫名或爬虫base_url是否重复',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} formData 要增加的爬虫数据
 * @param {*} addResult 新增结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchAddCrawlerManagement(formData, addResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(addCrawlerManagementRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/crawlermanagement/`;
        var myInit = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': token ? token : '',
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
                            dispatch(addCrawlerManagementSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            addResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(addCrawlerManagementFailure(error));
                        message.error(error);
                    })
    }
}

export const DELETE_CRAWLER_MANAGEMENT_REQUEST = 'DELETE_CRAWLER_MANAGEMENT_REQUEST';       // 删除爬虫
export const DELETE_CRAWLER_MANAGEMENT_SUCCESS = 'DELETE_CRAWLER_MANAGEMENT_SUCCESS';       // 删除成功
export const DELETE_CRAWLER_MANAGEMENT_FAILURE = 'DELETE_CRAWLER_MANAGEMENT_FAILURE';       // 删除失败
function deleteCrawlerManagementRequest() {
    return {
        type: DELETE_CRAWLER_MANAGEMENT_REQUEST
    }
}
function deleteCrawlerManagementSuccess(json) {
    return {
        type: DELETE_CRAWLER_MANAGEMENT_SUCCESS,
        status: json.status
    }
}
function deleteCrawlerManagementFailure(error) {
    return {
        type: DELETE_CRAWLER_MANAGEMENT_FAILURE,
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
 * @param {*} id 要删除的爬虫id
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchDeleteCrawlerManagement(id, handleGet) {
    return function(dispatch, getState) {
        dispatch(deleteCrawlerManagementRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/crawlermanagement/${id}`;
        var myInit = {
            method: 'DELETE',
            mode: 'cors',       // 允许跨域发送请求
            headers: {
                'Authorization': token ? token : '',
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
                            dispatch(deleteCrawlerManagementSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteCrawlerManagementFailure(error));
                        message.error(error);
                    })
    }
}

export const UPDATE_CRAWLER_MANAGEMENT_REQUEST = 'UPDATE_CRAWLER_MANAGEMENT_REQUEST';
export const UPDATE_CRAWLER_MANAGEMENT_SUCCESS = 'UPDATE_CRAWLER_MANAGEMENT_SUCCESS';
export const UPDATE_CRAWLER_MANAGEMENT_FAILURE = 'UPDATE_CRAWLER_MANAGEMENT_FAILURE';
function updateCrawlerManagementRequest() {
    return {
        type: UPDATE_CRAWLER_MANAGEMENT_REQUEST
    }
}
function updateCrawlerManagementSuccess(json) {
    return {
        type: UPDATE_CRAWLER_MANAGEMENT_SUCCESS,
        status: json.status
    }
}
function updateCrawlerManagementFailure(error) {
    return {
        type: UPDATE_CRAWLER_MANAGEMENT_FAILURE,
        status: {
            'success': false,
            'message': '更新失败,请检查爬虫名或爬虫base_url是否重复',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} crawlerId 要更新的爬虫id
 * @param {*} formData 要更新的爬虫数据
 * @param {*} updateResult 更新结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchUpdateCrawlerManagement(crawlerId, formData, updateResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(updateCrawlerManagementRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/crawlermanagement/${crawlerId}`;
        var myInit = {
            method: 'PUT',
            mode: 'cors',       // 允许跨域发送请求
            headers: {
                'Authorization': token ? token : '',
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
                            dispatch(updateCrawlerManagementSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            updateResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(updateCrawlerManagementFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_CRAWLER_MANAGEMENT_FILTRATE = 'CHANGE_CRAWLER_MANAGEMENT_FILTRATE';
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} crawlerSource 爬虫源
 * @param {*} crawlerCategory 分类
 * @param {*} crawlerStatus 爬虫状态
 * @param {*} crawlerSwitch 爬虫开关
 */
export function changeCrawlerManagementFiltrate(keyword, bkey, ckey, crawlerStatus, crawlerSwitch) {      // 更改筛选条件
    return {
        type: CHANGE_CRAWLER_MANAGEMENT_FILTRATE,
        keyword: keyword,
        bkey: bkey,
        ckey: ckey,
        crawlerStatus: crawlerStatus,
        crawlerSwitch: crawlerSwitch
    }
}
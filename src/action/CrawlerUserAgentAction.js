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

 export const GET_ALL_CRAWLER_USER_AGENT_REQUEST = 'GET_ALL_CRAWLER_USER_AGENT_REQUEST';        // 获取所有UserAgent
 export const GET_ALL_CRAWLER_USER_AGENT_SUCCESS = 'GET_ALL_CRAWLER_USER_AGENT_SUCCESS';        // 获取成功
 export const GET_ALL_CRAWLER_USER_AGENT_FAILURE = 'GET_ALL_CRAWLER_USER_AGENT_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllCrawlerUserAgentRequest() {
    return {
        type: GET_ALL_CRAWLER_USER_AGENT_REQUEST
    }
}
function getAllCrawlerUserAgentSuccess(json) {
    return {
        type: GET_ALL_CRAWLER_USER_AGENT_SUCCESS,
        status: json.status,
        payload: json.data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllCrawlerUserAgentFailure(error) {
    return {
        type: GET_ALL_CRAWLER_USER_AGENT_FAILURE,
        error
    }
}
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} pageNum 页码
 */
export function fetchGetAllCrawlerUserAgent(keyword, pageNum) {
    return function(dispatch, getState) {
        dispatch(getAllCrawlerUserAgentRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // 拼接url请求
        var url = '/crawleruseragent/';
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
                        json => dispatch(getAllCrawlerUserAgentSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllCrawlerUserAgentFailure(error));
                        message.error(error);
                    })
    }
}

export const ADD_CRAWLER_USER_AGENT_REQUEST = 'ADD_CRAWLER_USER_AGENT_REQUEST';     // 新增用户代理
export const ADD_CRAWLER_USER_AGENT_SUCCESS = 'ADD_CRAWLER_USER_AGENT_SUCCESS';     // 新增成功
export const ADD_CRAWLER_USER_AGENT_FAILURE = 'ADD_CRAWLER_USER_AGENT_FAILURE';     // 新增失败
function addCrawlerUserAgentRequest() {
    return {
        type: ADD_CRAWLER_USER_AGENT_REQUEST
    }
}
function addCrawlerUserAgentSuccess(json) {
    return {
        type: ADD_CRAWLER_USER_AGENT_SUCCESS,
        status: json.status
    }
}
function addCrawlerUserAgentFailure(error) {
    return {
        type: ADD_CRAWLER_USER_AGENT_FAILURE,
        status: {
            'success': false,
            'message': '新增失败,请检查User-Agent是否重复',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} formData 要增加的用户代理数据
 * @param {*} addResult 新增结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchAddCrawlerUserAgent(formData, addResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(addCrawlerUserAgentRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = '/crawleruseragent/';
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
                            dispatch(addCrawlerUserAgentSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            addResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(addCrawlerUserAgentFailure(error));
                        message.error(error);
                    })
    }
}

export const DELETE_CRAWLER_USER_AGENT_REQUEST = 'DELETE_CRAWLER_USER_AGENT_REQUEST';       // 删除用户代理
export const DELETE_CRAWLER_USER_AGENT_SUCCESS = 'DELETE_CRAWLER_USER_AGENT_SUCCESS';       // 删除成功
export const DELETE_CRAWLER_USER_AGENT_FAILURE = 'DELETE_CRAWLER_CATEGROY_FAILURE';       // 删除失败
function deleteCrawlerUserAgentRequest() {
    return {
        type: DELETE_CRAWLER_USER_AGENT_REQUEST
    }
}
function deleteCrawlerUserAgentSuccess(json) {
    return {
        type: DELETE_CRAWLER_USER_AGENT_SUCCESS,
        status: json.status
    }
}
function deleteCrawlerUserAgentFailure(error) {
    return {
        type: DELETE_CRAWLER_USER_AGENT_FAILURE,
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
 * @param {*} cid 要删除的用户代理id
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchDeleteCrawlerUserAgent(id, handleGet) {
    return function(dispatch, getState) {
        dispatch(deleteCrawlerUserAgentRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url =`/crawleruseragent/${id}`;
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
                            dispatch(deleteCrawlerUserAgentSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteCrawlerUserAgentFailure(error));
                        message.error(error);
                    })
    }
}

export const UPDATE_CRAWLER_USER_AGENT_REQUEST = 'UPDATE_CRAWLER_USER_AGENT_REQUEST';
export const UPDATE_CRAWLER_USER_AGENT_SUCCESS = 'UPDATE_CRAWLER_USER_AGENT_SUCCESS';
export const UPDATE_CRAWLER_USER_AGENT_FAILURE = 'UPDATE_CRAWLER_USER_AGENT_FAILURE';
function updateCrawlerUserAgentRequest() {
    return {
        type: UPDATE_CRAWLER_USER_AGENT_REQUEST
    }
}
function updateCrawlerUserAgentSuccess(json) {
    return {
        type: UPDATE_CRAWLER_USER_AGENT_SUCCESS,
        status: json.status
    }
}
function updateCrawlerUserAgentFailure(error) {
    return {
        type: UPDATE_CRAWLER_USER_AGENT_FAILURE,
        status: {
            'success': false,
            'message': '更新失败,请检查User-Agent是否重复',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} cid 要更新的用户代理id
 * @param {*} formData 要更新的用户代理数据
 * @param {*} updateResult 更新结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchUpdateCrawlerUserAgent(id, formData, updateResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(updateCrawlerUserAgentRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `/crawleruseragent/${id}`;
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
                            dispatch(updateCrawlerUserAgentSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            updateResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(updateCrawlerUserAgentFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_CRAWLER_USER_AGENT_FILTRATE = 'CHANGE_CRAWLER_USER_AGENT_FILTRATE';
export function changeCrawlerUserAgentFiltrate(keyword) {      // 更改筛选条件
    return {
        type: CHANGE_CRAWLER_USER_AGENT_FILTRATE,
        keyword: keyword
    }
}
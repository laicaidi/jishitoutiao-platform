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

 export const GET_ALL_CRAWLER_DYNAMIC_IP_REQUEST = 'GET_ALL_CRAWLER_DYNAMIC_IP_REQUEST';        // 获取所有动态ip
 export const GET_ALL_CRAWLER_DYNAMIC_IP_SUCCESS = 'GET_ALL_CRAWLER_DYNAMIC_IP_SUCCESS';        // 获取成功
 export const GET_ALL_CRAWLER_DYNAMIC_IP_FAILURE = 'GET_ALL_CRAWLER_DYNAMIC_IP_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllCrawlerDynamicIpRequest() {
    return {
        type: GET_ALL_CRAWLER_DYNAMIC_IP_REQUEST
    }
}
function getAllCrawlerDynamicIpSuccess(json) {
    return {
        type: GET_ALL_CRAWLER_DYNAMIC_IP_SUCCESS,
        status: json.status,
        payload: json.data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllCrawlerDynamicIpFailure(error) {
    return {
        type: GET_ALL_CRAWLER_DYNAMIC_IP_FAILURE,
        error
    }
}
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} pageNum 页码
 * @param {*} protocol 网络协议类型
 */
export function fetchGetAllCrawlerDynamicIp(keyword, pageNum, protocol) {
    return function(dispatch, getState) {
        dispatch(getAllCrawlerDynamicIpRequest());

        // 拼接url请求
        var url = "/crawlerdynamicip/"
        var params = "?keyword=" + keyword + "&protocol=" + protocol + "&page_num=" + pageNum;
        console.log("CrawlerDynamicIpAction.fetchGetAllCrawlerDynamicIp() ----请求url: " + url + params);

        var myInit = {
            method: "GET",
            mode: 'cors',       // 允许跨域发送请求
            headers: {
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
                        json => dispatch(getAllCrawlerDynamicIpSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllCrawlerDynamicIpFailure(error));
                        message.error(error);
                    })
    }
}

export const ADD_CRAWLER_DYNAMIC_IP_REQUEST = 'ADD_CRAWLER_DYNAMIC_IP_REQUEST';     // 新增动态ip
export const ADD_CRAWLER_DYNAMIC_IP_SUCCESS = 'ADD_CRAWLER_DYNAMIC_IP_SUCCESS';     // 新增成功
export const ADD_CRAWLER_DYNAMIC_IP_FAILURE = 'ADD_CRAWLER_DYNAMIC_IP_FAILURE';     // 新增失败
function addCrawlerDynamicIpRequest() {
    return {
        type: ADD_CRAWLER_DYNAMIC_IP_REQUEST
    }
}
function addCrawlerDynamicIpSuccess(json) {
    return {
        type: ADD_CRAWLER_DYNAMIC_IP_SUCCESS,
        status: json.status
    }
}
function addCrawlerDynamicIpFailure(error) {
    return {
        type: ADD_CRAWLER_DYNAMIC_IP_FAILURE,
        status: {
            "success": false,
            "message": "新增失败,请检查IP地址是否重复",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} formData 要增加的动态ip数据
 */
export function fetchAddCrawlerDynamicIp(formData) {
    return function(dispatch, getState) {
        dispatch(addCrawlerDynamicIpRequest());

        var url = "/crawlerdynamicip/";
        var myInit = {
            method: "POST",
            mode: "cors",
            headers: {
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
                            dispatch(addCrawlerDynamicIpSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                        }
                    )
                    .catch((error) => {
                        dispatch(addCrawlerDynamicIpFailure(error));
                        message.error(error);
                    })
    }
}

export const DELETE_CRAWLER_DYNAMIC_IP_REQUEST = 'DELETE_CRAWLER_DYNAMIC_IP_REQUEST';       // 删除动态ip
export const DELETE_CRAWLER_DYNAMIC_IP_SUCCESS = 'DELETE_CRAWLER_DYNAMIC_IP_SUCCESS';       // 删除成功
export const DELETE_CRAWLER_DYNAMIC_IP_FAILURE = 'DELETE_CRAWLER_DYNAMIC_IP_FAILURE';       // 删除失败
function deleteCrawlerDynamicIpRequest() {
    return {
        type: DELETE_CRAWLER_DYNAMIC_IP_REQUEST
    }
}
function deleteCrawlerDynamicIpSuccess(json) {
    return {
        type: DELETE_CRAWLER_DYNAMIC_IP_SUCCESS,
        status: json.status
    }
}
function deleteCrawlerDynamicIpFailure(error) {
    return {
        type: DELETE_CRAWLER_DYNAMIC_IP_FAILURE,
        status: {
            "success": false,
            "message": "删除失败，无此记录",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} id 要删除的动态ip_id
 */
export function fetchDeleteCrawlerDynamicIp(id) {
    return function(dispatch, getState) {
        dispatch(deleteCrawlerDynamicIpRequest());

        var url =`/crawlerdynamicip/${id}`
        var myInit = {
            method: "DELETE",
            mode: 'cors',       // 允许跨域发送请求
            headers: {
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
                            dispatch(deleteCrawlerDynamicIpSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteCrawlerDynamicIpFailure(error));
                        message.error(error);
                    })
    }
}

export const UPDATE_CRAWLER_DYNAMIC_IP_REQUEST = 'UPDATE_CRAWLER_DYNAMIC_IP_REQUEST';
export const UPDATE_CRAWLER_DYNAMIC_IP_SUCCESS = 'UPDATE_CRAWLER_DYNAMIC_IP_SUCCESS';
export const UPDATE_CRAWLER_DYNAMIC_IP_FAILURE = 'UPDATE_CRAWLER_DYNAMIC_IP_FAILURE';
function updateCrawlerDynamicIpRequest() {
    return {
        type: UPDATE_CRAWLER_DYNAMIC_IP_REQUEST
    }
}
function updateCrawlerDynamicIpSuccess(json) {
    return {
        type: UPDATE_CRAWLER_DYNAMIC_IP_SUCCESS,
        status: json.status
    }
}
function updateCrawlerDynamicIpFailure(error) {
    return {
        type: UPDATE_CRAWLER_DYNAMIC_IP_FAILURE,
        status: {
            "success": false,
            "message": "更新失败,请检查IP地址是否重复",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} id 要更新的动态ip_id
 * @param {*} formData 要更新的动态ip数据
 */
export function fetchUpdateCrawlerDynamicIp(id, formData) {
    return function(dispatch, getState) {
        dispatch(updateCrawlerDynamicIpRequest());

        var url = `/crawlerdynamicip/${id}`;
        var myInit = {
            method: "PUT",
            mode: 'cors',       // 允许跨域发送请求
            headers: {
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
                            dispatch(updateCrawlerDynamicIpSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                        }
                    )
                    .catch((error) => {
                        dispatch(updateCrawlerDynamicIpFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_CRAWLER_DYNAMIC_IP_FILTRATE = 'CHANGE_CRAWLER_DYNAMIC_IP_FILTRATE';
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} protocol 网络协议类型
 */
export function changeCrawlerDynamicIpFiltrate(keyword, protocol) {      // 更改筛选条件
    return {
        type: CHANGE_CRAWLER_DYNAMIC_IP_FILTRATE,
        keyword: keyword,
        protocol: protocol
    }
}
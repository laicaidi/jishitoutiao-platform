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

 export const GET_ALL_INFORMATION_WEIGHT_FILTRATE_REQUEST = 'GET_ALL_INFORMATION_WEIGHT_FILTRATE_REQUEST';        // 获取所有得分筛选数据
 export const GET_ALL_INFORMATION_WEIGHT_FILTRATE_SUCCESS = 'GET_ALL_INFORMATION_WEIGHT_FILTRATE_SUCCESS';        // 获取成功
 export const GET_ALL_INFORMATION_WEIGHT_FILTRATE_FAILURE = 'GET_ALL_INFORMATION_WEIGHT_FILTRATE_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllInformationWeightFiltrateRequest() {
    return {
        type: GET_ALL_INFORMATION_WEIGHT_FILTRATE_REQUEST
    }
}
function getAllInformationWeightFiltrateSuccess(json) {
    return {
        type: GET_ALL_INFORMATION_WEIGHT_FILTRATE_SUCCESS,
        status: json.status,
        payload: json.data,
        redisData: json.redis_data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllInformationWeightFiltrateFailure(error) {
    return {
        type: GET_ALL_INFORMATION_WEIGHT_FILTRATE_FAILURE,
        error
    }
}
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} pageNum 页码
 * @param {*} bkey 源key
 * @param {*} ckey 类别key
 */
export function fetchGetAllInformationWeightFiltrate(keyword, pageNum, bkey, ckey) {
    return function(dispatch, getState) {
        dispatch(getAllInformationWeightFiltrateRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // 拼接url请求
        var url = `${baseUrl}/informationweightfiltrate/`;
        var params = `?keyword=${keyword}&bkey=${bkey}&ckey=${ckey}&page_num=${pageNum}`;

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
                        json => {
                            dispatch(getAllInformationWeightFiltrateSuccess(json));
                        }
                    )
                    .catch((error) => {
                        dispatch(getAllInformationWeightFiltrateFailure(error));
                        message.error(error);
                    })
    }
}

export const DELETE_INFORMATION_WEIGHT_FILTRATE_REQUEST = 'DELETE_INFORMATION_WEIGHT_FILTRATE_REQUEST';       // 删除得分筛选数据
export const DELETE_INFORMATION_WEIGHT_FILTRATE_SUCCESS = 'DELETE_INFORMATION_WEIGHT_FILTRATE_SUCCESS';       // 删除成功
export const DELETE_INFORMATION_WEIGHT_FILTRATE_FAILURE = 'DELETE_INFORMATION_WEIGHT_FILTRATE_FAILURE';       // 删除失败
function deleteInformationWeightFiltrateRequest() {
    return {
        type: DELETE_INFORMATION_WEIGHT_FILTRATE_REQUEST
    }
}
function deleteInformationWeightFiltrateSuccess(json) {
    return {
        type: DELETE_INFORMATION_WEIGHT_FILTRATE_SUCCESS,
        status: json.status
    }
}
function deleteInformationWeightFiltrateFailure(error) {
    return {
        type: DELETE_INFORMATION_WEIGHT_FILTRATE_FAILURE,
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
 * @param {*} id 要删除的得分筛选数据id
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchDeleteInformationWeightFiltrate(id, handleGet) {
    return function(dispatch, getState) {
        dispatch(deleteInformationWeightFiltrateRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/informationweightfiltrate/${id}`;
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
                            dispatch(deleteInformationWeightFiltrateSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteInformationWeightFiltrateFailure(error));
                        message.error(error);
                    })
    }
}

export const UPDATE_INFORMATION_WEIGHT_FILTRATE_REQUEST = 'UPDATE_INFORMATION_WEIGHT_FILTRATE_REQUEST';
export const UPDATE_INFORMATION_WEIGHT_FILTRATE_SUCCESS = 'UPDATE_INFORMATION_WEIGHT_FILTRATE_SUCCESS';
export const UPDATE_INFORMATION_WEIGHT_FILTRATE_FAILURE = 'UPDATE_INFORMATION_WEIGHT_FILTRATE_FAILURE';
function updateInformationWeightFiltrateRequest() {
    return {
        type: UPDATE_INFORMATION_WEIGHT_FILTRATE_REQUEST
    }
}
function updateInformationWeightFiltrateSuccess(json) {
    return {
        type: UPDATE_INFORMATION_WEIGHT_FILTRATE_SUCCESS,
        status: json.status
    }
}
function updateInformationWeightFiltrateFailure(error) {
    return {
        type: UPDATE_INFORMATION_WEIGHT_FILTRATE_FAILURE,
        status: {
            'success': false,
            'message': '更新失败',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} id 要更新的得分筛选数据id
 * @param {*} formData 要更新的得分筛选数据数据
 * @param {*} updateResult 更新结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchUpdateInformationWeightFiltrate(id, formData, updateResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(updateInformationWeightFiltrateRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/informationweightfiltrate/${id}`;
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
                            dispatch(updateInformationWeightFiltrateSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            updateResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(updateInformationWeightFiltrateFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_INFORMATION_WEIGHT_FILTRATE = 'CHANGE_INFORMATION_WEIGHT_FILTRATE';
/**
 * @param {*} keyword 搜索关键字
 * @param {*} crawlerFiltrate 源
 * @param {*} crawlerCategory 分类
 */
export function changeInformationWeightFiltrate(keyword, bkey, ckey) {      // 更改筛选条件
    return {
        type: CHANGE_INFORMATION_WEIGHT_FILTRATE,
        keyword: keyword,
        bkey: bkey,
        ckey: ckey
    }
}
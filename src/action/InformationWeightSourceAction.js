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

 export const GET_ALL_INFORMATION_WEIGHT_SOURCE_REQUEST = 'GET_ALL_INFORMATION_WEIGHT_SOURCE_REQUEST';        // 获取所有权重源
 export const GET_ALL_INFORMATION_WEIGHT_SOURCE_SUCCESS = 'GET_ALL_INFORMATION_WEIGHT_SOURCE_SUCCESS';        // 获取成功
 export const GET_ALL_INFORMATION_WEIGHT_SOURCE_FAILURE = 'GET_ALL_INFORMATION_WEIGHT_SOURCE_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllInformationWeightSourceRequest() {
    return {
        type: GET_ALL_INFORMATION_WEIGHT_SOURCE_REQUEST
    }
}
function getAllInformationWeightSourceSuccess(json) {
    return {
        type: GET_ALL_INFORMATION_WEIGHT_SOURCE_SUCCESS,
        status: json.status,
        payload: json.data,
        redisData: json.redis_data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllInformationWeightSourceFailure(error) {
    return {
        type: GET_ALL_INFORMATION_WEIGHT_SOURCE_FAILURE,
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
export function fetchGetAllInformationWeightSource(keyword, pageNum, bkey, ckey) {
    return function(dispatch, getState) {
        dispatch(getAllInformationWeightSourceRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // 拼接url请求
        var url = `${baseUrl}/informationweightsource/`;
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
                        json => dispatch(getAllInformationWeightSourceSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllInformationWeightSourceFailure(error));
                        message.error(error);
                    })
    }
}

export const DELETE_INFORMATION_WEIGHT_SOURCE_REQUEST = 'DELETE_INFORMATION_WEIGHT_SOURCE_REQUEST';       // 删除权重源
export const DELETE_INFORMATION_WEIGHT_SOURCE_SUCCESS = 'DELETE_INFORMATION_WEIGHT_SOURCE_SUCCESS';       // 删除成功
export const DELETE_INFORMATION_WEIGHT_SOURCE_FAILURE = 'DELETE_INFORMATION_WEIGHT_SOURCE_FAILURE';       // 删除失败
function deleteInformationWeightSourceRequest() {
    return {
        type: DELETE_INFORMATION_WEIGHT_SOURCE_REQUEST
    }
}
function deleteInformationWeightSourceSuccess(json) {
    return {
        type: DELETE_INFORMATION_WEIGHT_SOURCE_SUCCESS,
        status: json.status
    }
}
function deleteInformationWeightSourceFailure(error) {
    return {
        type: DELETE_INFORMATION_WEIGHT_SOURCE_FAILURE,
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
 * @param {*} id 要删除的权重源id
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchDeleteInformationWeightSource(id, handleGet) {
    return function(dispatch, getState) {
        dispatch(deleteInformationWeightSourceRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/informationweightsource/${id}`;
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
                            dispatch(deleteInformationWeightSourceSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteInformationWeightSourceFailure(error));
                        message.error(error);
                    })
    }
}

export const UPDATE_INFORMATION_WEIGHT_SOURCE_REQUEST = 'UPDATE_INFORMATION_WEIGHT_SOURCE_REQUEST';
export const UPDATE_INFORMATION_WEIGHT_SOURCE_SUCCESS = 'UPDATE_INFORMATION_WEIGHT_SOURCE_SUCCESS';
export const UPDATE_INFORMATION_WEIGHT_SOURCE_FAILURE = 'UPDATE_INFORMATION_WEIGHT_SOURCE_FAILURE';
function updateInformationWeightSourceRequest() {
    return {
        type: UPDATE_INFORMATION_WEIGHT_SOURCE_REQUEST
    }
}
function updateInformationWeightSourceSuccess(json) {
    return {
        type: UPDATE_INFORMATION_WEIGHT_SOURCE_SUCCESS,
        status: json.status
    }
}
function updateInformationWeightSourceFailure(error) {
    return {
        type: UPDATE_INFORMATION_WEIGHT_SOURCE_FAILURE,
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
 * @param {*} id 要更新的权重源id
 * @param {*} formData 要更新的权重源数据
 * @param {*} updateResult 更新结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchUpdateInformationWeightSource(id, formData, updateResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(updateInformationWeightSourceRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/informationweightsource/${id}`;
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
                            dispatch(updateInformationWeightSourceSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            updateResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(updateInformationWeightSourceFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_INFORMATION_WEIGHT_SOURCE_FILTRATE = 'CHANGE_INFORMATION_WEIGHT_SOURCE_FILTRATE';
/**
 * @param {*} keyword 搜索关键字
 * @param {*} crawlerSource 源
 * @param {*} crawlerCategory 分类
 */
export function changeInformationWeightSourceFiltrate(keyword, bkey, ckey) {      // 更改筛选条件
    return {
        type: CHANGE_INFORMATION_WEIGHT_SOURCE_FILTRATE,
        keyword: keyword,
        bkey: bkey,
        ckey: ckey
    }
}
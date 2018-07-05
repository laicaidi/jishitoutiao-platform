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

 export const GET_ALL_INFORMATION_WEIGHT_SORT_REQUEST = 'GET_ALL_INFORMATION_WEIGHT_SORT_REQUEST';        // 获取所有得分数据
 export const GET_ALL_INFORMATION_WEIGHT_SORT_SUCCESS = 'GET_ALL_INFORMATION_WEIGHT_SORT_SUCCESS';        // 获取成功
 export const GET_ALL_INFORMATION_WEIGHT_SORT_FAILURE = 'GET_ALL_INFORMATION_WEIGHT_SORT_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllInformationWeightSortRequest() {
    return {
        type: GET_ALL_INFORMATION_WEIGHT_SORT_REQUEST
    }
}
function getAllInformationWeightSortSuccess(json) {
    return {
        type: GET_ALL_INFORMATION_WEIGHT_SORT_SUCCESS,
        status: json.status,
        payload: json.data,
        redisData: json.redis_data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllInformationWeightSortFailure(error) {
    return {
        type: GET_ALL_INFORMATION_WEIGHT_SORT_FAILURE,
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
export function fetchGetAllInformationWeightSort(keyword, pageNum, bkey, ckey) {
    return function(dispatch, getState) {
        dispatch(getAllInformationWeightSortRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // 拼接url请求
        var url = '/informationweightsort/';
        var params = `?keyword=${keyword}&bkey=${bkey}&ckey=${ckey}&page_num=${pageNum}`;

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
                        json => {
                            dispatch(getAllInformationWeightSortSuccess(json));
                        } 
                    )
                    .catch((error) => {
                        dispatch(getAllInformationWeightSortFailure(error));
                        message.error(error);
                    })
    }
}

export const DELETE_INFORMATION_WEIGHT_SORT_REQUEST = 'DELETE_INFORMATION_WEIGHT_SORT_REQUEST';       // 删除得分数据
export const DELETE_INFORMATION_WEIGHT_SORT_SUCCESS = 'DELETE_INFORMATION_WEIGHT_SORT_SUCCESS';       // 删除成功
export const DELETE_INFORMATION_WEIGHT_SORT_FAILURE = 'DELETE_INFORMATION_WEIGHT_SORT_FAILURE';       // 删除失败
function deleteInformationWeightSortRequest() {
    return {
        type: DELETE_INFORMATION_WEIGHT_SORT_REQUEST
    }
}
function deleteInformationWeightSortSuccess(json) {
    return {
        type: DELETE_INFORMATION_WEIGHT_SORT_SUCCESS,
        status: json.status
    }
}
function deleteInformationWeightSortFailure(error) {
    return {
        type: DELETE_INFORMATION_WEIGHT_SORT_FAILURE,
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
 * @param {*} id 要删除的得分数据id
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchDeleteInformationWeightSort(id, handleGet) {
    return function(dispatch, getState) {
        dispatch(deleteInformationWeightSortRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url =`/informationweightsort/${id}`;
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
                            dispatch(deleteInformationWeightSortSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteInformationWeightSortFailure(error));
                        message.error(error);
                    })
    }
}

export const UPDATE_INFORMATION_WEIGHT_SORT_REQUEST = 'UPDATE_INFORMATION_WEIGHT_SORT_REQUEST';
export const UPDATE_INFORMATION_WEIGHT_SORT_SUCCESS = 'UPDATE_INFORMATION_WEIGHT_SORT_SUCCESS';
export const UPDATE_INFORMATION_WEIGHT_SORT_FAILURE = 'UPDATE_INFORMATION_WEIGHT_SORT_FAILURE';
function updateInformationWeightSortRequest() {
    return {
        type: UPDATE_INFORMATION_WEIGHT_SORT_REQUEST
    }
}
function updateInformationWeightSortSuccess(json) {
    return {
        type: UPDATE_INFORMATION_WEIGHT_SORT_SUCCESS,
        status: json.status
    }
}
function updateInformationWeightSortFailure(error) {
    return {
        type: UPDATE_INFORMATION_WEIGHT_SORT_FAILURE,
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
 * @param {*} id 要更新的得分数据id
 * @param {*} formData 要更新的得分数据数据
 * @param {*} updateResult 更新结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchUpdateInformationWeightSort(id, formData, updateResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(updateInformationWeightSortRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `/informationweightsort/${id}`;
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
        console.log('--------------fetchUpdateInformationWeightSort id: ' + id);

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
                            dispatch(updateInformationWeightSortSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            updateResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(updateInformationWeightSortFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_INFORMATION_WEIGHT_SORT_FILTRATE = 'CHANGE_INFORMATION_WEIGHT_SORT_FILTRATE';
/**
 * @param {*} keyword 搜索关键字
 * @param {*} crawlerSort 源
 * @param {*} crawlerCategory 分类
 */
export function changeInformationWeightSortFiltrate(keyword, bkey, ckey) {      // 更改筛选条件
    return {
        type: CHANGE_INFORMATION_WEIGHT_SORT_FILTRATE,
        keyword: keyword,
        bkey: bkey,
        ckey: ckey
    }
}
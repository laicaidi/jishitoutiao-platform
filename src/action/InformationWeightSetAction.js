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

/*
 * action 类型
 */
export const GET_ALL_INFORMATION_WEIGHT_SET_REQUEST = 'GET_ALL_INFORMATION_WEIGHT_SET_REQUEST';     // 获取所有权重设置数据请求
export const GET_ALL_INFORMATION_WEIGHT_SET_SUCCESS = 'GET_ALL_INFORMATION_WEIGHT_SET_SUCCESS';     // 获取成功
export const GET_ALL_INFORMATION_WEIGHT_SET_FAILURE = 'GET_ALL_INFORMATION_WEIGHT_SET_FAILURE';     // 获取失败
/*
 * action 创建函数
 */
function getAllInformationWeightSetRequest() {
    return {
        type: GET_ALL_INFORMATION_WEIGHT_SET_REQUEST
    }
}
function getAllInformationWeightSetSuccess(json) {
    return {
        type: GET_ALL_INFORMATION_WEIGHT_SET_SUCCESS,
        status: json.status, 
        payload: json.data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllInformationWeightSetFailure(error) {
    return {
        type: GET_ALL_INFORMATION_WEIGHT_SET_FAILURE,
        error
    }
}
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} pageNum 查询页码
 */
export function fetchGetAllInformationWeightSet(keyword, pageNum) {
    return function(dispatch, getState) {
        dispatch(getAllInformationWeightSetRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // 拼接请求url
        var url = '/informationweightset/';        // 请求url
        var params = `?keyword=${keyword}&page_num=${pageNum}`;       // 参数

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
                            if (response.ok) {      //正常返回
                                return response.json()
                            } else {
                                consoleAndMessageOnError('请求失败；Code:' + response.status);
                            } 
                        }
                    )
                    .then(
                        json => dispatch(getAllInformationWeightSetSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllInformationWeightSetFailure(error));
                        message.error(error);
                    })
    }
}

export const ADD_INFORMATION_WEIGHT_SET_REQUEST = 'ADD_INFORMATION_WEIGHT_SET_REQUEST';     // 新增权重设置
export const ADD_INFORMATION_WEIGHT_SET_SUCCESS = 'ADD_INFORMATION_WEIGHT_SET_SUCCESS';     // 新增成功
export const ADD_INFORMATION_WEIGHT_SET_FAILURE = 'ADD_INFORMATION_WEIGHT_SET_FAILURE';     // 新增失败
function addInformationWeightSetRequest() {
    return {
        type: ADD_INFORMATION_WEIGHT_SET_REQUEST
    }
}
function addInformationWeightSetSuccess(json) {
    return {
        type: ADD_INFORMATION_WEIGHT_SET_SUCCESS,
        status: json.status
    }
}
function addInformationWeightSetFailure(error) {
    return {
        type: ADD_INFORMATION_WEIGHT_SET_FAILURE,
        status: {
            'success': false,
            'message': '新增失败,请检查键是否重复',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} formData 新增的数据
 * @param {*} addResult 新增结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchAddInformationWeightSet(formData, addResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(addInformationWeightSetRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = '/informationweightset/';
        var myInit = {
            method: 'POST',
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
            body: JSON.stringify(formData)      // 新增数据
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
                        // 新增成功,将消息体赋值给json
                        json => {
                            dispatch(addInformationWeightSetSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            addResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(addInformationWeightSetFailure(error));
                        message.error(error);
                    })
    }
}

export const DELETE_INFORMATION_WEIGHT_SET_REQUEST = 'DELETE_INFORMATION_WEIGHT_SET_REQUEST';       // 删除权重设置
export const DELETE_INFORMATION_WEIGHT_SET_SUCCESS = 'DELETE_INFORMATION_WEIGHT_SET_SUCCESS';       // 删除成功
export const DELETE_INFORMATION_WEIGHT_SET_FAILURE = 'DELETE_INFORMATION_WEIGHT_SET_FAILURE';       // 删除失败
function deleteInformationWeightSetRequest() {
    return {
        type: DELETE_INFORMATION_WEIGHT_SET_REQUEST
    }
}
function deleteInformationWeightSetSuccess(json) {
    return {
        type: DELETE_INFORMATION_WEIGHT_SET_SUCCESS,
        status: json.status,
    }
}
function deleteInformationWeightSetFailure(error) {
    return {
        type: DELETE_INFORMATION_WEIGHT_SET_FAILURE,
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
 * @param {*} id 要删除的权重设置id
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchDeleteInformationWeightSet(id, handleGet) {
    return function(dispatch, getState) {
        dispatch(deleteInformationWeightSetRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url =`/informationweightset/${id}`;
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
                            dispatch(deleteInformationWeightSetSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteInformationWeightSetFailure(error));
                        message.error(error);
                    })
    }
}

export const UPDATE_INFORMATION_WEIGHT_SET_REQUEST = 'UPDATE_INFORMATION_WEIGHT_SET_REQUEST';       // 更新权重设置
export const UPDATE_INFORMATION_WEIGHT_SET_SUCCESS = 'UPDATE_INFORMATION_WEIGHT_SET_SUCCESS';       // 更新成功
export const UPDATE_INFORMATION_WEIGHT_SET_FAILURE = 'UPDATE_INFORMATION_WEIGHT_SET_FAILURE';       // 更新失败
function updateInformationWeightSetRequest() {
    return {
        type: UPDATE_INFORMATION_WEIGHT_SET_REQUEST
    }
}
function updateInformationWeightSetSuccess(json) {
    return {
        type: UPDATE_INFORMATION_WEIGHT_SET_SUCCESS,
        status: json.status
    }
}
function updateInformationWeightSetFailure(error) {
    return {
        type: UPDATE_INFORMATION_WEIGHT_SET_FAILURE,
        status: {
            'success': false,
            'message': '更新失败,请检查键是否重复',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} id 要更新的权重设置id
 * @param {*} formData 更新的数据
 * @param {*} updateResult 更新结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchUpdateInformationWeightSet(id, formData, updateResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(updateInformationWeightSetRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `/informationweightset/${id}`;
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
                            dispatch(updateInformationWeightSetSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            updateResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(updateInformationWeightSetFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_INFORMATION_WEIGHT_SET_FILTRATE = 'CHANGE_INFORMATION_WEIGHT_SET_FILTRATE';
/**
 * 
 * @param {*} keyword 搜索关键字
 */
export function changeInformationWeightSetFiltrate(keyword) {      // 更改筛选条件
    return {
        type: CHANGE_INFORMATION_WEIGHT_SET_FILTRATE,
        keyword: keyword
    }
}
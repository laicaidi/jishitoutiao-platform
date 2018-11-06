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

/*
 * action 类型
 */
export const GET_ALL_INFORMATION_ILLEGALITY_SET_REQUEST = 'GET_ALL_INFORMATION_ILLEGALITY_SET_REQUEST';     // 获取所有非法设置数据请求
export const GET_ALL_INFORMATION_ILLEGALITY_SET_SUCCESS = 'GET_ALL_INFORMATION_ILLEGALITY_SET_SUCCESS';     // 获取成功
export const GET_ALL_INFORMATION_ILLEGALITY_SET_FAILURE = 'GET_ALL_INFORMATION_ILLEGALITY_SET_FAILURE';     // 获取失败
/*
 * action 创建函数
 */
function getAllInformationIllegalitySetRequest() {
    return {
        type: GET_ALL_INFORMATION_ILLEGALITY_SET_REQUEST
    }
}
function getAllInformationIllegalitySetSuccess(json) {
    return {
        type: GET_ALL_INFORMATION_ILLEGALITY_SET_SUCCESS,
        status: json.status, 
        payload: json.data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllInformationIllegalitySetFailure(error) {
    return {
        type: GET_ALL_INFORMATION_ILLEGALITY_SET_FAILURE,
        error
    }
}
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} pageNum 查询页码
 */
export function fetchGetAllInformationIllegalitySet(keyword, pageNum) {
    return function(dispatch, getState) {
        dispatch(getAllInformationIllegalitySetRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // 拼接请求url
        var url = `${baseUrl}/informationillegalityset/`;        // 请求url
        var params = `?keyword=${keyword}&page_num=${pageNum}`;       // 参数

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
                            if (response.ok) {      //正常返回
                                return response.json()
                            } else {
                                consoleAndMessageOnError('请求失败；Code:' + response.status);
                            } 
                        }
                    )
                    .then(
                        json => dispatch(getAllInformationIllegalitySetSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllInformationIllegalitySetFailure(error));
                        message.error(error);
                    })
    }
}

export const ADD_INFORMATION_ILLEGALITY_SET_REQUEST = 'ADD_INFORMATION_ILLEGALITY_SET_REQUEST';     // 新增非法设置
export const ADD_INFORMATION_ILLEGALITY_SET_SUCCESS = 'ADD_INFORMATION_ILLEGALITY_SET_SUCCESS';     // 新增成功
export const ADD_INFORMATION_ILLEGALITY_SET_FAILURE = 'ADD_INFORMATION_ILLEGALITY_SET_FAILURE';     // 新增失败
function addInformationIllegalitySetRequest() {
    return {
        type: ADD_INFORMATION_ILLEGALITY_SET_REQUEST
    }
}
function addInformationIllegalitySetSuccess(json) {
    return {
        type: ADD_INFORMATION_ILLEGALITY_SET_SUCCESS,
        status: json.status
    }
}
function addInformationIllegalitySetFailure(error) {
    return {
        type: ADD_INFORMATION_ILLEGALITY_SET_FAILURE,
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
export function fetchAddInformationIllegalitySet(formData, addResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(addInformationIllegalitySetRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/informationillegalityset/`;
        var myInit = {
            method: 'POST',
            mode: 'cors',       // 允许跨域发送请求
            headers: {
                'Authorization': token ? token : '',
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
                            dispatch(addInformationIllegalitySetSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            addResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(addInformationIllegalitySetFailure(error));
                        message.error(error);
                    })
    }
}

export const DELETE_INFORMATION_ILLEGALITY_SET_REQUEST = 'DELETE_INFORMATION_ILLEGALITY_SET_REQUEST';       // 删除非法设置
export const DELETE_INFORMATION_ILLEGALITY_SET_SUCCESS = 'DELETE_INFORMATION_ILLEGALITY_SET_SUCCESS';       // 删除成功
export const DELETE_INFORMATION_ILLEGALITY_SET_FAILURE = 'DELETE_INFORMATION_ILLEGALITY_SET_FAILURE';       // 删除失败
function deleteInformationIllegalitySetRequest() {
    return {
        type: DELETE_INFORMATION_ILLEGALITY_SET_REQUEST
    }
}
function deleteInformationIllegalitySetSuccess(json) {
    return {
        type: DELETE_INFORMATION_ILLEGALITY_SET_SUCCESS,
        status: json.status,
    }
}
function deleteInformationIllegalitySetFailure(error) {
    return {
        type: DELETE_INFORMATION_ILLEGALITY_SET_FAILURE,
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
 * @param {*} id 要删除的非法设置id
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchDeleteInformationIllegalitySet(id, handleGet) {
    return function(dispatch, getState) {
        dispatch(deleteInformationIllegalitySetRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/informationillegalityset/${id}`;
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
                            dispatch(deleteInformationIllegalitySetSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteInformationIllegalitySetFailure(error));
                        message.error(error);
                    })
    }
}

export const UPDATE_INFORMATION_ILLEGALITY_SET_REQUEST = 'UPDATE_INFORMATION_ILLEGALITY_SET_REQUEST';       // 更新非法设置
export const UPDATE_INFORMATION_ILLEGALITY_SET_SUCCESS = 'UPDATE_INFORMATION_ILLEGALITY_SET_SUCCESS';       // 更新成功
export const UPDATE_INFORMATION_ILLEGALITY_SET_FAILURE = 'UPDATE_INFORMATION_ILLEGALITY_SET_FAILURE';       // 更新失败
function updateInformationIllegalitySetRequest() {
    return {
        type: UPDATE_INFORMATION_ILLEGALITY_SET_REQUEST
    }
}
function updateInformationIllegalitySetSuccess(json) {
    return {
        type: UPDATE_INFORMATION_ILLEGALITY_SET_SUCCESS,
        status: json.status
    }
}
function updateInformationIllegalitySetFailure(error) {
    return {
        type: UPDATE_INFORMATION_ILLEGALITY_SET_FAILURE,
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
 * @param {*} id 要更新的非法设置id
 * @param {*} formData 更新的数据
 * @param {*} updateResult 更新结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchUpdateInformationIllegalitySet(id, formData, updateResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(updateInformationIllegalitySetRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/informationillegalityset/${id}`;
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
                            dispatch(updateInformationIllegalitySetSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            updateResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(updateInformationIllegalitySetFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_INFORMATION_ILLEGALITY_SET_FILTRATE = 'CHANGE_INFORMATION_ILLEGALITY_SET_FILTRATE';
/**
 * 
 * @param {*} keyword 搜索关键字
 */
export function changeInformationIllegalitySetFiltrate(keyword) {      // 更改筛选条件
    return {
        type: CHANGE_INFORMATION_ILLEGALITY_SET_FILTRATE,
        keyword: keyword
    }
}
import fetch from 'cross-fetch';
import moment from 'moment';
import { message } from 'antd';
// action文件
import { routerActions } from 'react-router-redux';

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

 export const GET_ALL_USER_REQUEST = 'GET_ALL_USER_REQUEST';        // 获取所有用户
 export const GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS';        // 获取成功
 export const GET_ALL_USER_FAILURE = 'GET_ALL_USER_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllUserRequest() {
    return {
        type: GET_ALL_USER_REQUEST
    }
}
function getAllUserSuccess(json) {
    return {
        type: GET_ALL_USER_SUCCESS,
        status: json.status,
        payload: json.data,
        redisData: json.redis_data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllUserFailure(error) {
    return {
        type: GET_ALL_USER_FAILURE,
        error
    }
}
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} pageNum 页码
 */
export function fetchGetAllUser(keyword, pageNum) {
    return function(dispatch, getState) {
        dispatch(getAllUserRequest());

        // 拼接url请求
        var url = "/user/"
        var params = "?keyword=" + keyword + "&bkey="  + pageNum;
        console.log("UserAction.fetchGetAllUser() ----请求url: " + url + params);

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
                        json => dispatch(getAllUserSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllUserFailure(error));
                        message.error(error);
                    })
    }
}

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';     // 用户登录
export const USER_LOGIN_SUCCESS = 'USER_LOGIN__SUCCESS';     // 登录成功
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';     // 登录失败
function userLoginRequest() {
    return {
        type: USER_LOGIN_REQUEST
    }
}
function userLoginSuccess(json) {
    return {
        type: USER_LOGIN_SUCCESS,
        auth: json.auth ? json.auth : "",
        status: json.status
    }
}
function userLoginFailure(error) {
    return {
        type: USER_LOGIN_FAILURE,
        auth: "",     // 将登录证明清空
        status: {
            "success": false,
            "message": "登录失败，请检查用户名密码是否错误",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} formData 登录表单数据
 */
export function fetchUserLogin(formData) {
    return function(dispatch, getState) {
        dispatch(userLoginRequest());

        var url = "/user/login";
        var myInit = {
            method: "POST",
            mode: 'cors',       // 允许跨域发送请求
            headers: {
                'Accept': 'application/json,text/javascript,application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Headers': 'x-requested-with,Cache-Control,Pragma,Content-Type,Authorization',     // //允许使用的请求方法
                'Access-Control-Allow-Credentials': 'true'      // 是否允许请求带有验证信息
            },
            body: JSON.stringify(formData)      // 登录表单数据
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
                        // 登录成功,将消息体赋值给json
                        json => {
                            dispatch(userLoginSuccess(json));
                            if (json.status.success) {
                                if (json.auth.passport === true) {
                                    // 跳转 
                                    dispatch(routerActions.push('/home')); 
                                }
                            } else {
                               messageAfterFetch(json.status.success, json.status.message); 
                            }
                        }
                    )
                    .catch((error) => {
                        dispatch(userLoginFailure(error));
                        message.error(error);
                    })
    }
}

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';       // 删除用户
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';       // 删除成功
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';       // 删除失败
function deleteUserRequest() {
    return {
        type: DELETE_USER_REQUEST
    }
}
function deleteUserSuccess(json) {
    return {
        type: DELETE_USER_SUCCESS,
        status: json.status
    }
}
function deleteUserFailure(error) {
    return {
        type: DELETE_USER_FAILURE,
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
 * @param {*} id 要删除的用户id
 */
export function fetchDeleteUser(id) {
    return function(dispatch, getState) {
        dispatch(deleteUserRequest());

        var url =`/user/${id}`
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
                            dispatch(deleteUserSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteUserFailure(error));
                        message.error(error);
                    })
    }
}


export const CHANGE_USER_FILTRATE = 'CHANGE_USER_FILTRATE';
/**
 * 
 * @param {*} keyword 搜索关键字
 */
export function changeUserFiltrate(keyword) {      // 更改筛选条件
    return {
        type: CHANGE_USER_FILTRATE,
        keyword: keyword
    }
}
import fetch from 'cross-fetch';
import moment from 'moment';

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
        var url = "/jishitoutiao-server/user/"
        var params = "?keyword=" + keyword + "&bkey="  + pageNum;
        console.log("UserAction.fetchGetAllUser() ----请求url: " + url + params);

        var myInit = {
            method: "GET",
            mode: 'cors',       // 允许跨域发送请求
            headers: {
                'Accept': 'application/json,text/javascript,application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }
        return fetch(url + params, myInit)
                    .then(
                        response => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                console.error('请求失败; Code: ' + response.status);
                            }
                        }
                    )
                    .then(
                        json => dispatch(getAllUserSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllUserFailure(error));
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

        var url =`/jishitoutiao-server/user/${id}`
        var myInit = {
            method: "DELETE",
            mode: 'cors',       // 允许跨域发送请求
            headers: {
                'Accept': 'application/json,text/javascript,application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }

        return fetch(url, myInit)
                    .then(
                        response => {
                            if (response.ok) {
                                return response.json()
                            } else {
                                console.error('请求失败；Code:' + response.status);
                            }
                        }
                    )
                    .then(
                        // 删除成功,将消息体赋值给json
                        json => {
                            dispatch(deleteUserSuccess(json))
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteUserFailure(error));
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
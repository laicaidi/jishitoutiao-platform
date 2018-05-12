import fetch from 'cross-fetch';
import moment from 'moment';

/**
 *  action 类型
 */

 export const GET_ALL_INFORMATION_SOURCE_REQUEST = 'GET_ALL_INFORMATION_SOURCE_REQUEST';        // 获取所有资讯源
 export const GET_ALL_INFORMATION_SOURCE_SUCCESS = 'GET_ALL_INFORMATION_SOURCE_SUCCESS';        // 获取成功
 export const GET_ALL_INFORMATION_SOURCE_FAILURE = 'GET_ALL_INFORMATION_SOURCE_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllInformationSourceRequest() {
    return {
        type: GET_ALL_INFORMATION_SOURCE_REQUEST
    }
}
function getAllInformationSourceSuccess(json) {
    return {
        type: GET_ALL_INFORMATION_SOURCE_SUCCESS,
        status: json.status,
        payload: json.data,
        redisData: json.redis_data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllInformationSourceFailure(error) {
    return {
        type: GET_ALL_INFORMATION_SOURCE_FAILURE,
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
export function fetchGetAllInformationSource(keyword, pageNum, bkey, ckey) {
    return function(dispatch, getState) {
        dispatch(getAllInformationSourceRequest());

        // 拼接url请求
        var url = "/jishitoutiao-server/informationsource/"
        var params = "?keyword=" + keyword + "&bkey=" + bkey + "&ckey=" + ckey + "&page_num=" + pageNum;
        console.log("InformationSourceAction.fetchGetAllInformationSource() ----请求url: " + url + params);

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
                        json => dispatch(getAllInformationSourceSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllInformationSourceFailure(error));
                    })
    }
}

export const ADD_INFORMATION_SOURCE_REQUEST = 'ADD_INFORMATION_SOURCE_REQUEST';     // 新增资讯源
export const ADD_INFORMATION_SOURCE_SUCCESS = 'ADD_INFORMATION_SOURCE_SUCCESS';     // 新增成功
export const ADD_INFORMATION_SOURCE_FAILURE = 'ADD_INFORMATION_SOURCE_FAILURE';     // 新增失败
function addInformationSourceRequest() {
    return {
        type: ADD_INFORMATION_SOURCE_REQUEST
    }
}
function addInformationSourceSuccess(json) {
    return {
        type: ADD_INFORMATION_SOURCE_SUCCESS,
        status: json.status
    }
}
function addInformationSourceFailure(error) {
    return {
        type: ADD_INFORMATION_SOURCE_FAILURE,
        status: {
            "success": false,
            "message": "新增失败,请资讯url是否重复",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} formData 要增加的资讯源数据
 */
export function fetchAddInformationSource(formData) {
    return function(dispatch, getState) {
        dispatch(addInformationSourceRequest());

        var url = "/jishitoutiao-server/informationsource/";
        var myInit = {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json,text/javascript,application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData)      // 新增数据
        }

        return fetch(url, myInit)
                    .then(
                        response => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                console.error('请求失败；Code:' + response.status);
                            }
                        }
                    )
                    .then(
                        json => {
                            dispatch(addInformationSourceSuccess(json));
                        }
                    )
                    .catch((error) => {
                        dispatch(addInformationSourceFailure(error));
                    })
    }
}

export const DELETE_INFORMATION_SOURCE_REQUEST = 'DELETE_INFORMATION_SOURCE_REQUEST';       // 删除资讯源
export const DELETE_INFORMATION_SOURCE_SUCCESS = 'DELETE_INFORMATION_SOURCE_SUCCESS';       // 删除成功
export const DELETE_INFORMATION_SOURCE_FAILURE = 'DELETE_INFORMATION_SOURCE_FAILURE';       // 删除失败
function deleteInformationSourceRequest() {
    return {
        type: DELETE_INFORMATION_SOURCE_REQUEST
    }
}
function deleteInformationSourceSuccess(json) {
    return {
        type: DELETE_INFORMATION_SOURCE_SUCCESS,
        status: json.status
    }
}
function deleteInformationSourceFailure(error) {
    return {
        type: DELETE_INFORMATION_SOURCE_FAILURE,
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
 * @param {*} id 要删除的资讯源id
 */
export function fetchDeleteInformationSource(id) {
    return function(dispatch, getState) {
        dispatch(deleteInformationSourceRequest());

        var url =`/jishitoutiao-server/informationsource/${id}`
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
                            dispatch(deleteInformationSourceSuccess(json))
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteInformationSourceFailure(error));
                    })
    }
}

export const UPDATE_INFORMATION_SOURCE_REQUEST = 'UPDATE_INFORMATION_SOURCE_REQUEST';
export const UPDATE_INFORMATION_SOURCE_SUCCESS = 'UPDATE_INFORMATION_SOURCE_SUCCESS';
export const UPDATE_INFORMATION_SOURCE_FAILURE = 'UPDATE_INFORMATION_SOURCE_FAILURE';
function updateInformationSourceRequest() {
    return {
        type: UPDATE_INFORMATION_SOURCE_REQUEST
    }
}
function updateInformationSourceSuccess(json) {
    return {
        type: UPDATE_INFORMATION_SOURCE_SUCCESS,
        status: json.status
    }
}
function updateInformationSourceFailure(error) {
    return {
        type: UPDATE_INFORMATION_SOURCE_FAILURE,
        status: {
            "success": false,
            "message": "更新失败,请检查资讯url是否重复",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} id 要更新的资讯源id
 * @param {*} formData 要更新的资讯源数据
 */
export function fetchUpdateInformationSource(id, formData) {
    return function(dispatch, getState) {
        dispatch(updateInformationSourceRequest());

        var url = `/jishitoutiao-server/informationsource/${id}`;
        var myInit = {
            method: "PUT",
            mode: 'cors',       // 允许跨域发送请求
            headers: {
                'Accept': 'application/json,text/javascript,application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData)      // 更新数据
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
                        // 更新成功,将消息体赋值给json
                        json => {
                            dispatch(updateInformationSourceSuccess(json))
                        }
                    )
                    .catch((error) => {
                        dispatch(updateInformationSourceFailure(error));
                    })
    }
}

export const CHANGE_INFORMATION_SOURCE_FILTRATE = 'CHANGE_INFORMATION_SOURCE_FILTRATE';
/**
 * @param {*} keyword 搜索关键字
 * @param {*} crawlerSource 源
 * @param {*} crawlerCategory 分类
 */
export function changeInformationSourceFiltrate(keyword, bkey, ckey) {      // 更改筛选条件
    return {
        type: CHANGE_INFORMATION_SOURCE_FILTRATE,
        keyword: keyword,
        bkey: bkey,
        ckey: ckey
    }
}
import fetch from 'cross-fetch';
import moment from 'moment';

/**
 *  action 类型
 */

 export const GET_ALL_INFORMATION_REPETITION_RESULT_REQUEST = 'GET_ALL_INFORMATION_REPETITION_RESULT_REQUEST';        // 获取所有滤重结果
 export const GET_ALL_INFORMATION_REPETITION_RESULT_SUCCESS = 'GET_ALL_INFORMATION_REPETITION_RESULT_SUCCESS';        // 获取成功
 export const GET_ALL_INFORMATION_REPETITION_RESULT_FAILURE = 'GET_ALL_INFORMATION_REPETITION_RESULT_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllInformationRepetitionResultRequest() {
    return {
        type: GET_ALL_INFORMATION_REPETITION_RESULT_REQUEST
    }
}
function getAllInformationRepetitionResultSuccess(json) {
    return {
        type: GET_ALL_INFORMATION_REPETITION_RESULT_SUCCESS,
        status: json.status,
        payload: json.data,
        redisData: json.redis_data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllInformationRepetitionResultFailure(error) {
    return {
        type: GET_ALL_INFORMATION_REPETITION_RESULT_FAILURE,
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
export function fetchGetAllInformationRepetitionResult(keyword, pageNum, bkey, ckey) {
    return function(dispatch, getState) {
        dispatch(getAllInformationRepetitionResultRequest());

        // 拼接url请求
        var url = "/jishitoutiao-server/informationrepetitionresult/"
        var params = "?keyword=" + keyword + "&bkey=" + bkey + "&ckey=" + ckey + "&page_num=" + pageNum;
        console.log("InformationRepetitionResultAction.fetchGetAllInformationRepetitionResult() ----请求url: " + url + params);

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
                        json => dispatch(getAllInformationRepetitionResultSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllInformationRepetitionResultFailure(error));
                    })
    }
}

export const DELETE_INFORMATION_REPETITION_RESULT_REQUEST = 'DELETE_INFORMATION_REPETITION_RESULT_REQUEST';       // 删除滤重结果
export const DELETE_INFORMATION_REPETITION_RESULT_SUCCESS = 'DELETE_INFORMATION_REPETITION_RESULT_SUCCESS';       // 删除成功
export const DELETE_INFORMATION_REPETITION_RESULT_FAILURE = 'DELETE_INFORMATION_REPETITION_RESULT_FAILURE';       // 删除失败
function deleteInformationRepetitionResultRequest() {
    return {
        type: DELETE_INFORMATION_REPETITION_RESULT_REQUEST
    }
}
function deleteInformationRepetitionResultSuccess(json) {
    return {
        type: DELETE_INFORMATION_REPETITION_RESULT_SUCCESS,
        status: json.status
    }
}
function deleteInformationRepetitionResultFailure(error) {
    return {
        type: DELETE_INFORMATION_REPETITION_RESULT_FAILURE,
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
 * @param {*} id 要删除的滤重结果id
 */
export function fetchDeleteInformationRepetitionResult(id) {
    return function(dispatch, getState) {
        dispatch(deleteInformationRepetitionResultRequest());

        var url =`/jishitoutiao-server/informationrepetitionresult/${id}`
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
                            dispatch(deleteInformationRepetitionResultSuccess(json))
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteInformationRepetitionResultFailure(error));
                    })
    }
}

export const UPDATE_INFORMATION_REPETITION_RESULT_REQUEST = 'UPDATE_INFORMATION_REPETITION_RESULT_REQUEST';
export const UPDATE_INFORMATION_REPETITION_RESULT_SUCCESS = 'UPDATE_INFORMATION_REPETITION_RESULT_SUCCESS';
export const UPDATE_INFORMATION_REPETITION_RESULT_FAILURE = 'UPDATE_INFORMATION_REPETITION_RESULT_FAILURE';
function updateInformationRepetitionResultRequest() {
    return {
        type: UPDATE_INFORMATION_REPETITION_RESULT_REQUEST
    }
}
function updateInformationRepetitionResultSuccess(json) {
    return {
        type: UPDATE_INFORMATION_REPETITION_RESULT_SUCCESS,
        status: json.status
    }
}
function updateInformationRepetitionResultFailure(error) {
    return {
        type: UPDATE_INFORMATION_REPETITION_RESULT_FAILURE,
        status: {
            "success": false,
            "message": "更新失败",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} id 要更新的滤重结果id
 * @param {*} formData 要更新的滤重结果数据
 */
export function fetchUpdateInformationRepetitionResult(id, formData) {
    return function(dispatch, getState) {
        dispatch(updateInformationRepetitionResultRequest());

        var url = `/jishitoutiao-server/informationrepetitionresult/${id}`;
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
        console.log("--------------fetchUpdateInformationRepetitionResult id: " + id);

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
                            dispatch(updateInformationRepetitionResultSuccess(json))
                        }
                    )
                    .catch((error) => {
                        dispatch(updateInformationRepetitionResultFailure(error));
                    })
    }
}

export const CHANGE_INFORMATION_REPETITION_RESULT_FILTRATE = 'CHANGE_INFORMATION_REPETITION_RESULT_FILTRATE';
/**
 * @param {*} keyword 搜索关键字
 * @param {*} crawlerSource 源
 * @param {*} crawlerCategory 分类
 */
export function changeInformationRepetitionResultFiltrate(keyword, bkey, ckey) {      // 更改筛选条件
    return {
        type: CHANGE_INFORMATION_REPETITION_RESULT_FILTRATE,
        keyword: keyword,
        bkey: bkey,
        ckey: ckey
    }
}
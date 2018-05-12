import fetch from 'cross-fetch';
import moment from 'moment';

/**
 *  action 类型
 */

 export const GET_ALL_INFORMATION_OUTPUT_LIST_REQUEST = 'GET_ALL_INFORMATION_OUTPUT_LIST_REQUEST';        // 获取所有列表输出数据
 export const GET_ALL_INFORMATION_OUTPUT_LIST_SUCCESS = 'GET_ALL_INFORMATION_OUTPUT_LIST_SUCCESS';        // 获取成功
 export const GET_ALL_INFORMATION_OUTPUT_LIST_FAILURE = 'GET_ALL_INFORMATION_OUTPUT_LIST_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllInformationOutputListRequest() {
    return {
        type: GET_ALL_INFORMATION_OUTPUT_LIST_REQUEST
    }
}
function getAllInformationOutputListSuccess(json) {
    return {
        type: GET_ALL_INFORMATION_OUTPUT_LIST_SUCCESS,
        status: json.status,
        payload: json.data,
        redisData: json.redis_data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllInformationOutputListFailure(error) {
    return {
        type: GET_ALL_INFORMATION_OUTPUT_LIST_FAILURE,
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
export function fetchGetAllInformationOutputList(keyword, pageNum, bkey, ckey) {
    return function(dispatch, getState) {
        dispatch(getAllInformationOutputListRequest());

        // 拼接url请求
        var url = "/jishitoutiao-server/informationoutputlist/"
        var params = "?keyword=" + keyword + "&bkey=" + bkey + "&ckey=" + ckey + "&page_num=" + pageNum;
        console.log("InformationOutputListAction.fetchGetAllInformationOutputList() ----请求url: " + url + params);

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
                        json => dispatch(getAllInformationOutputListSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllInformationOutputListFailure(error));
                    })
    }
}

export const DELETE_INFORMATION_OUTPUT_LIST_REQUEST = 'DELETE_INFORMATION_OUTPUT_LIST_REQUEST';       // 删除列表输出数据
export const DELETE_INFORMATION_OUTPUT_LIST_SUCCESS = 'DELETE_INFORMATION_OUTPUT_LIST_SUCCESS';       // 删除成功
export const DELETE_INFORMATION_OUTPUT_LIST_FAILURE = 'DELETE_INFORMATION_OUTPUT_LIST_FAILURE';       // 删除失败
function deleteInformationOutputListRequest() {
    return {
        type: DELETE_INFORMATION_OUTPUT_LIST_REQUEST
    }
}
function deleteInformationOutputListSuccess(json) {
    return {
        type: DELETE_INFORMATION_OUTPUT_LIST_SUCCESS,
        status: json.status
    }
}
function deleteInformationOutputListFailure(error) {
    return {
        type: DELETE_INFORMATION_OUTPUT_LIST_FAILURE,
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
 * @param {*} id 要删除的列表输出数据id
 */
export function fetchDeleteInformationOutputList(id) {
    return function(dispatch, getState) {
        dispatch(deleteInformationOutputListRequest());

        var url =`/jishitoutiao-server/informationoutputlist/${id}`
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
                            dispatch(deleteInformationOutputListSuccess(json))
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteInformationOutputListFailure(error));
                    })
    }
}

export const UPDATE_INFORMATION_OUTPUT_LIST_REQUEST = 'UPDATE_INFORMATION_OUTPUT_LIST_REQUEST';
export const UPDATE_INFORMATION_OUTPUT_LIST_SUCCESS = 'UPDATE_INFORMATION_OUTPUT_LIST_SUCCESS';
export const UPDATE_INFORMATION_OUTPUT_LIST_FAILURE = 'UPDATE_INFORMATION_OUTPUT_LIST_FAILURE';
function updateInformationOutputListRequest() {
    return {
        type: UPDATE_INFORMATION_OUTPUT_LIST_REQUEST
    }
}
function updateInformationOutputListSuccess(json) {
    return {
        type: UPDATE_INFORMATION_OUTPUT_LIST_SUCCESS,
        status: json.status
    }
}
function updateInformationOutputListFailure(error) {
    return {
        type: UPDATE_INFORMATION_OUTPUT_LIST_FAILURE,
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
 * @param {*} id 要更新的列表输出数据id
 * @param {*} formData 要更新的列表输出数据数据
 */
export function fetchUpdateInformationOutputList(id, formData) {
    return function(dispatch, getState) {
        dispatch(updateInformationOutputListRequest());

        var url = `/jishitoutiao-server/informationoutputlist/${id}`;
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
        console.log("--------------fetchUpdateInformationOutputList id: " + id);

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
                            dispatch(updateInformationOutputListSuccess(json))
                        }
                    )
                    .catch((error) => {
                        dispatch(updateInformationOutputListFailure(error));
                    })
    }
}

export const CHANGE_INFORMATION_OUTPUT_LIST_FILTRATE = 'CHANGE_INFORMATION_OUTPUT_LIST_FILTRATE';
/**
 * @param {*} keyword 搜索关键字
 * @param {*} crawlerSort 源
 * @param {*} crawlerCategory 分类
 */
export function changeInformationOutputListFiltrate(keyword, bkey, ckey) {      // 更改筛选条件
    return {
        type: CHANGE_INFORMATION_OUTPUT_LIST_FILTRATE,
        keyword: keyword,
        bkey: bkey,
        ckey: ckey
    }
}
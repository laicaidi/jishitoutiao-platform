import fetch from 'cross-fetch';
import moment from 'moment';

/*
 * action 类型
 */
export const GET_ALL_CRAWLER_SET_REQUEST = 'GET_ALL_CRAWLER_SET_REQUEST';     // 获取所有爬虫设置数据请求
export const GET_ALL_CRAWLER_SET_SUCCESS = 'GET_ALL_CRAWLER_SET_SUCCESS';     // 获取成功
export const GET_ALL_CRAWLER_SET_FAILURE = 'GET_ALL_CRAWLER_SET_FAILURE';     // 获取失败
/*
 * action 创建函数
 */
function getAllCrawlerSetRequest() {
    return {
        type: GET_ALL_CRAWLER_SET_REQUEST
    }
}
function getAllCrawlerSetSuccess(json) {
    return {
        type: GET_ALL_CRAWLER_SET_SUCCESS,
        status: json.status, 
        payload: json.data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllCrawlerSetFailure(error) {
    return {
        type: GET_ALL_CRAWLER_SET_FAILURE,
        error
    }
}
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} pageNum 查询页码
 */
export function fetchGetAllCrawlerSet(keyword, pageNum) {
    return function(dispatch, getState) {
        dispatch(getAllCrawlerSetRequest());

        // 拼接请求url
        var url = "/jishitoutiao-server/crawlerset/";        // 请求url
        var params = "?keyword=" + keyword + "&page_num=" + pageNum;       // 参数
        console.log("CrawlerSetAction.fetchGetAllCrawlerSet()--------请求url: " + url + params);

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
                            if (response.ok) {      //正常返回
                                return response.json()
                            } else {
                                console.error('请求失败；Code:' + response.status);
                            } 
                        }
                    )
                    .then(
                        json => dispatch(getAllCrawlerSetSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllCrawlerSetFailure(error));
                    })
    }
}

export const ADD_CRAWLER_SET_REQUEST = 'ADD_CRAWLER_SET_REQUEST';     // 新增爬虫设置
export const ADD_CRAWLER_SET_SUCCESS = 'ADD_CRAWLER_SET_SUCCESS';     // 新增成功
export const ADD_CRAWLER_SET_FAILURE = 'ADD_CRAWLER_SET_FAILURE';     // 新增失败
function addCrawlerSetRequest() {
    return {
        type: ADD_CRAWLER_SET_REQUEST
    }
}
function addCrawlerSetSuccess(json) {
    return {
        type: ADD_CRAWLER_SET_SUCCESS,
        status: json.status
    }
}
function addCrawlerSetFailure(error) {
    return {
        type: ADD_CRAWLER_SET_FAILURE,
        status: {
            "success": false,
            "message": "新增失败,请检查键是否重复",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} formData 新增的数据
 */
export function fetchAddCrawlerSet(formData) {
    return function(dispatch, getState) {
        dispatch(addCrawlerSetRequest());

        var url = "/jishitoutiao-server/crawlerset/";
        var myInit = {
            method: "POST",
            mode: 'cors',       // 允许跨域发送请求
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
                                return response.json()
                            } else {
                                console.error('请求失败；Code:' + response.status);
                            }
                        }
                    )
                    .then(
                        // 新增成功,将消息体赋值给json
                        json => {
                            dispatch(addCrawlerSetSuccess(json));
                        }
                    )
                    .catch((error) => {
                        dispatch(addCrawlerSetFailure(error));
                    })
    }
}

export const DELETE_CRAWLER_SET_REQUEST = 'DELETE_CRAWLER_SET_REQUEST';       // 删除爬虫设置
export const DELETE_CRAWLER_SET_SUCCESS = 'DELETE_CRAWLER_SET_SUCCESS';       // 删除成功
export const DELETE_CRAWLER_SET_FAILURE = 'DELETE_CRAWLER_SET_FAILURE';       // 删除失败
function deleteCrawlerSetRequest() {
    return {
        type: DELETE_CRAWLER_SET_REQUEST
    }
}
function deleteCrawlerSetSuccess(json) {
    return {
        type: DELETE_CRAWLER_SET_SUCCESS,
        status: json.status,
    }
}
function deleteCrawlerSetFailure(error) {
    return {
        type: DELETE_CRAWLER_SET_FAILURE,
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
 * @param {*} id 要删除的爬虫设置id
 */
export function fetchDeleteCrawlerSet(id) {
    return function(dispatch, getState) {
        dispatch(deleteCrawlerSetRequest());

        var url =`/jishitoutiao-server/crawlerset/${id}`
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
                            dispatch(deleteCrawlerSetSuccess(json))
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteCrawlerSetFailure(error));
                    })
    }
}

export const UPDATE_CRAWLER_SET_REQUEST = 'UPDATE_CRAWLER_SET_REQUEST';       // 更新爬虫设置
export const UPDATE_CRAWLER_SET_SUCCESS = 'UPDATE_CRAWLER_SET_SUCCESS';       // 更新成功
export const UPDATE_CRAWLER_SET_FAILURE = 'UPDATE_CRAWLER_SET_FAILURE';       // 更新失败
function updateCrawlerSetRequest() {
    return {
        type: UPDATE_CRAWLER_SET_REQUEST
    }
}
function updateCrawlerSetSuccess(json) {
    return {
        type: UPDATE_CRAWLER_SET_SUCCESS,
        status: json.status
    }
}
function updateCrawlerSetFailure(error) {
    return {
        type: UPDATE_CRAWLER_SET_FAILURE,
        status: {
            "success": false,
            "message": "更新失败,请检查键是否重复",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} id 要更新的爬虫设置id
 * @param {*} formData 更新的数据
 */
export function fetchUpdateCrawlerSet(id, formData) {
    return function(dispatch, getState) {
        dispatch(updateCrawlerSetRequest());

        var url = `/jishitoutiao-server/crawlerset/${id}`;
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
                            dispatch(updateCrawlerSetSuccess(json))
                        }
                    )
                    .catch((error) => {
                        dispatch(updateCrawlerSetFailure(error));
                    })
    }
}

export const CHANGE_CRAWLER_SET_FILTRATE = 'CHANGE_CRAWLER_SET_FILTRATE';
/**
 * 
 * @param {*} keyword 搜索关键字
 */
export function changeCrawlerSetFiltrate(keyword) {      // 更改筛选条件
    return {
        type: CHANGE_CRAWLER_SET_FILTRATE,
        keyword: keyword
    }
}
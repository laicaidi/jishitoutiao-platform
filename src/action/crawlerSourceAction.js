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
export const GET_ALL_CRAWLER_SOURCE_REQUEST = 'GET_ALL_CRAWLER_SOURCE_REQUEST';     // 获取所有爬虫源数据请求
export const GET_ALL_CRAWLER_SOURCE_SUCCESS = 'GET_ALL_CRAWLER_SOURCE_SUCCESS';     // 获取成功
export const GET_ALL_CRAWLER_SOURCE_FAILURE = 'GET_ALL_CRAWLER_SOURCE_FAILURE';     // 获取失败
/*
 * action 创建函数
 */
function getAllCrawlerSourceRequest() {
    return {
        type: GET_ALL_CRAWLER_SOURCE_REQUEST
    }
}
function getAllCrawlerSourceSuccess(json) {
    return {
        type: GET_ALL_CRAWLER_SOURCE_SUCCESS,
        status: json.status, 
        payload: json.data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')      // 接收数据时间
    }
}
function getAllCrawlerSourceFailure(error) {
    return {
        type: GET_ALL_CRAWLER_SOURCE_FAILURE,
        error
    }
}
// 来看一下我们写的第一个 thunk action 创建函数！
// 虽然内部操作不同，你可以像其它 action 创建函数 一样使用它
// store.dispatch(fetchGetAllCrawlerSource())
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} pageNum 查询页码
 */
export function fetchGetAllCrawlerSource(keyword, pageNum) {
    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，以此来让它自己也能 dispatch action。
    return function(dispatch, getState) {
        // 首次 dispatch：更新应用的 state 来通知 API 请求发起了。
        dispatch(getAllCrawlerSourceRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // thunk middleware 调用的函数可以有返回值，它会被当作 dispatch 方法的返回值传递。
        // 这个案例中，我们返回一个等待处理的 promise。
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。

        // 拼接请求url
        var url = `${baseUrl}/crawlersource/`;        // 请求url
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
                        // 发起获取数据成功的dispatch，使用 API 请求结果来更新应用的 state。
                        // 注：可以多次 dispatch
                        json => dispatch(getAllCrawlerSourceSuccess(json))
                    )
                    // 不要使用 catch，因为会捕获在 dispatch 和渲染中出现的任何错误，
                    // 会导致 'Unexpected batch number' 错误。
                    // https://github.com/facebook/react/issues/6895
                    .catch((error) => {
                        dispatch(getAllCrawlerSourceFailure(error));
                        message.error(error);
                    })
    }
}

export const ADD_CRAWLER_SOURCE_REQUEST = 'ADD_CRAWLER_SOURCE_REQUEST';     // 新增爬虫源
export const ADD_CRAWLER_SOURCE_SUCCESS = 'ADD_CRAWLER_SOURCE_SUCCESS';     // 新增成功
export const ADD_CRAWLER_SOURCE_FAILURE = 'ADD_CRAWLER_SOURCE_FAILURE';     // 新增失败
function addCrawlerSourceRequest() {
    return {
        type: ADD_CRAWLER_SOURCE_REQUEST
    }
}
function addCrawlerSourceSuccess(json) {
    return {
        type: ADD_CRAWLER_SOURCE_SUCCESS,
        status: json.status
    }
}
function addCrawlerSourceFailure(error) {
    return {
        type: ADD_CRAWLER_SOURCE_FAILURE,
        status: {
            'success': false,
            'message': '新增失败,请检查源key或源名称是否重复',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} formData 新增的数据
 * @param {*} addResult 新增后回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchAddCrawlerSource(formData, addResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(addCrawlerSourceRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/crawlersource/`;
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
                            dispatch(addCrawlerSourceSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            addResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(addCrawlerSourceFailure(error));
                        message.error(error);
                    })
    }
}

export const DELETE_CRAWLER_SOURCE_REQUEST = 'DELETE_CRAWLER_SOURCE_REQUEST';       // 删除爬虫源
export const DELETE_CRAWLER_SOURCE_SUCCESS = 'DELETE_CRAWLER_SOURCE_SUCCESS';       // 删除成功
export const DELETE_CRAWLER_SOURCE_FAILURE = 'DELETE_CRAWLER_SOURCE_FAILURE';       // 删除失败
function deleteCrawlerSourceRequest() {
    return {
        type: DELETE_CRAWLER_SOURCE_REQUEST
    }
}
function deleteCrawlerSourceSuccess(json) {
    return {
        type: DELETE_CRAWLER_SOURCE_SUCCESS,
        status: json.status,
    }
}
function deleteCrawlerSourceFailure(error) {
    return {
        type: DELETE_CRAWLER_SOURCE_FAILURE,
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
 * @param {*} bid 要删除的爬虫源id
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchDeleteCrawlerSource(bid, handleGet) {
    return function(dispatch, getState) {
        dispatch(deleteCrawlerSourceRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/crawlersource/${bid}`;
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
                            dispatch(deleteCrawlerSourceSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteCrawlerSourceFailure(error));
                        message.error(error);
                    })
    }
}

export const UPDATE_CRAWLER_SOURCE_REQUEST = 'UPDATE_CRAWLER_SOURCE_REQUEST';       // 更新爬虫源
export const UPDATE_CRAWLER_SOURCE_SUCCESS = 'UPDATE_CRAWLER_SOURCE_SUCCESS';       // 更新成功
export const UPDATE_CRAWLER_SOURCE_FAILURE = 'UPDATE_CRAWLER_SOURCE_FAILURE';       // 更新失败
function updateCrawlerSourceRequest() {
    return {
        type: UPDATE_CRAWLER_SOURCE_REQUEST
    }
}
function updateCrawlerSourceSuccess(json) {
    return {
        type: UPDATE_CRAWLER_SOURCE_SUCCESS,
        status: json.status
    }
}
function updateCrawlerSourceFailure(error) {
    return {
        type: UPDATE_CRAWLER_SOURCE_FAILURE,
        status: {
            'success': false,
            'message': '更新失败,请检查源key或源name是否重复',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} bid 要更新的爬虫源id
 * @param {*} formData 更新的数据
 * @param {*} updateResult 更新结果回调方法
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchUpdateCrawlerSource(bid, formData, updateResult, handleGet) {
    return function(dispatch, getState) {
        dispatch(updateCrawlerSourceRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/crawlersource/${bid}`;
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
                            dispatch(updateCrawlerSourceSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                            updateResult();
                        }
                    )
                    .catch((error) => {
                        dispatch(updateCrawlerSourceFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_CRAWLER_SOURCE_FILTRATE = 'CHANGE_CRAWLER_SOURCE_FILTRATE';
/**
 * 
 * @param {*} keyword 搜索关键字
 */
export function changeCrawlerSourceFiltrate(keyword) {      // 更改筛选条件
    return {
        type: CHANGE_CRAWLER_SOURCE_FILTRATE,
        keyword: keyword
    }
}

// 改变页码action,暂时不需要本action
// export const CHANGE_PAGE = 'CHANGE_PAGE';       // 改变页码
// export function changePage(num) {
//     return {
//         type: CHANGE_PAGE,
//         page_num: num
//     }
// }
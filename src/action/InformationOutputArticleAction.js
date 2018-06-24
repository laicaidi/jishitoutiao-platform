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

 export const GET_ALL_INFORMATION_OUTPUT_ARTICLE_REQUEST = 'GET_ALL_INFORMATION_OUTPUT_ARTICLE_REQUEST';        // 获取所有资讯内容数据
 export const GET_ALL_INFORMATION_OUTPUT_ARTICLE_SUCCESS = 'GET_ALL_INFORMATION_OUTPUT_ARTICLE_SUCCESS';        // 获取成功
 export const GET_ALL_INFORMATION_OUTPUT_ARTICLE_FAILURE = 'GET_ALL_INFORMATION_OUTPUT_ARTICLE_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllInformationOutputArticleRequest() {
    return {
        type: GET_ALL_INFORMATION_OUTPUT_ARTICLE_REQUEST
    }
}
function getAllInformationOutputArticleSuccess(json) {
    return {
        type: GET_ALL_INFORMATION_OUTPUT_ARTICLE_SUCCESS,
        status: json.status,
        payload: json.data,
        redisData: json.redis_data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllInformationOutputArticleFailure(error) {
    return {
        type: GET_ALL_INFORMATION_OUTPUT_ARTICLE_FAILURE,
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
export function fetchGetAllInformationOutputArticle(keyword, pageNum, bkey, ckey) {
    return function(dispatch, getState) {
        dispatch(getAllInformationOutputArticleRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // 拼接url请求
        var url = "/informationoutputarticle/"
        var params = "?keyword=" + keyword + "&bkey=" + bkey + "&ckey=" + ckey + "&page_num=" + pageNum;
        console.log("InformationOutputArticleAction.fetchGetAllInformationOutputArticle() ----请求url: " + url + params);

        var myInit = {
            method: "GET",
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
                        json => dispatch(getAllInformationOutputArticleSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllInformationOutputArticleFailure(error));
                        message.error(error);
                    })
    }
}

export const DELETE_INFORMATION_OUTPUT_ARTICLE_REQUEST = 'DELETE_INFORMATION_OUTPUT_ARTICLE_REQUEST';       // 删除资讯内容数据
export const DELETE_INFORMATION_OUTPUT_ARTICLE_SUCCESS = 'DELETE_INFORMATION_OUTPUT_ARTICLE_SUCCESS';       // 删除成功
export const DELETE_INFORMATION_OUTPUT_ARTICLE_FAILURE = 'DELETE_INFORMATION_OUTPUT_ARTICLE_FAILURE';       // 删除失败
function deleteInformationOutputArticleRequest() {
    return {
        type: DELETE_INFORMATION_OUTPUT_ARTICLE_REQUEST
    }
}
function deleteInformationOutputArticleSuccess(json) {
    return {
        type: DELETE_INFORMATION_OUTPUT_ARTICLE_SUCCESS,
        status: json.status
    }
}
function deleteInformationOutputArticleFailure(error) {
    return {
        type: DELETE_INFORMATION_OUTPUT_ARTICLE_FAILURE,
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
 * @param {*} id 要删除的资讯内容数据id
 */
export function fetchDeleteInformationOutputArticle(id) {
    return function(dispatch, getState) {
        dispatch(deleteInformationOutputArticleRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url =`/informationoutputarticle/${id}`
        var myInit = {
            method: "DELETE",
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
                            dispatch(deleteInformationOutputArticleSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            dispatch(fetchGetAllInformationOutputArticle());
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteInformationOutputArticleFailure(error));
                        message.error(error);
                    })
    }
}

export const UPDATE_INFORMATION_OUTPUT_ARTICLE_REQUEST = 'UPDATE_INFORMATION_OUTPUT_ARTICLE_REQUEST';
export const UPDATE_INFORMATION_OUTPUT_ARTICLE_SUCCESS = 'UPDATE_INFORMATION_OUTPUT_ARTICLE_SUCCESS';
export const UPDATE_INFORMATION_OUTPUT_ARTICLE_FAILURE = 'UPDATE_INFORMATION_OUTPUT_ARTICLE_FAILURE';
function updateInformationOutputArticleRequest() {
    return {
        type: UPDATE_INFORMATION_OUTPUT_ARTICLE_REQUEST
    }
}
function updateInformationOutputArticleSuccess(json) {
    return {
        type: UPDATE_INFORMATION_OUTPUT_ARTICLE_SUCCESS,
        status: json.status
    }
}
function updateInformationOutputArticleFailure(error) {
    return {
        type: UPDATE_INFORMATION_OUTPUT_ARTICLE_FAILURE,
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
 * @param {*} id 要更新的资讯内容数据id
 * @param {*} formData 要更新的资讯内容数据数据
 */
export function fetchUpdateInformationOutputArticle(id, formData) {
    return function(dispatch, getState) {
        dispatch(updateInformationOutputArticleRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `/informationoutputarticle/${id}`;
        var myInit = {
            method: "PUT",
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
                            dispatch(updateInformationOutputArticleSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            dispatch(fetchGetAllInformationOutputArticle());
                        }
                    )
                    .catch((error) => {
                        dispatch(updateInformationOutputArticleFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_INFORMATION_OUTPUT_ARTICLE_FILTRATE = 'CHANGE_INFORMATION_OUTPUT_ARTICLE_FILTRATE';
/**
 * @param {*} keyword 搜索关键字
 * @param {*} crawlerSource 源
 * @param {*} crawlerCategory 分类
 */
export function changeInformationOutputArticleFiltrate(keyword, bkey, ckey) {      // 更改筛选条件
    return {
        type: CHANGE_INFORMATION_OUTPUT_ARTICLE_FILTRATE,
        keyword: keyword,
        bkey: bkey,
        ckey: ckey
    }
}
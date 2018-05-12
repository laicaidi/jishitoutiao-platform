import fetch from 'cross-fetch';
import moment from 'moment';

/**
 *  action 类型
 */

 export const GET_ALL_INFORMATION_COMMENT_REQUEST = 'GET_ALL_INFORMATION_COMMENT_REQUEST';        // 获取所有资讯评论
 export const GET_ALL_INFORMATION_COMMENT_SUCCESS = 'GET_ALL_INFORMATION_COMMENT_SUCCESS';        // 获取成功
 export const GET_ALL_INFORMATION_COMMENT_FAILURE = 'GET_ALL_INFORMATION_COMMENT_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllInformationCommentRequest() {
    return {
        type: GET_ALL_INFORMATION_COMMENT_REQUEST
    }
}
function getAllInformationCommentSuccess(json) {
    return {
        type: GET_ALL_INFORMATION_COMMENT_SUCCESS,
        status: json.status,
        payload: json.data,
        redisData: json.redis_data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllInformationCommentFailure(error) {
    return {
        type: GET_ALL_INFORMATION_COMMENT_FAILURE,
        error
    }
}
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} pageNum 页码
 */
export function fetchGetAllInformationComment(keyword, pageNum) {
    return function(dispatch, getState) {
        dispatch(getAllInformationCommentRequest());

        // 拼接url请求
        var url = "/jishitoutiao-server/informationcomment/"
        var params = "?keyword=" + keyword + "&bkey="  + pageNum;
        console.log("InformationCommentAction.fetchGetAllInformationComment() ----请求url: " + url + params);

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
                        json => dispatch(getAllInformationCommentSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllInformationCommentFailure(error));
                    })
    }
}

export const DELETE_INFORMATION_COMMENT_REQUEST = 'DELETE_INFORMATION_COMMENT_REQUEST';       // 删除资讯评论
export const DELETE_INFORMATION_COMMENT_SUCCESS = 'DELETE_INFORMATION_COMMENT_SUCCESS';       // 删除成功
export const DELETE_INFORMATION_COMMENT_FAILURE = 'DELETE_INFORMATION_COMMENT_FAILURE';       // 删除失败
function deleteInformationCommentRequest() {
    return {
        type: DELETE_INFORMATION_COMMENT_REQUEST
    }
}
function deleteInformationCommentSuccess(json) {
    return {
        type: DELETE_INFORMATION_COMMENT_SUCCESS,
        status: json.status
    }
}
function deleteInformationCommentFailure(error) {
    return {
        type: DELETE_INFORMATION_COMMENT_FAILURE,
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
 * @param {*} id 要删除的资讯评论id
 */
export function fetchDeleteInformationComment(id) {
    return function(dispatch, getState) {
        dispatch(deleteInformationCommentRequest());

        var url =`/jishitoutiao-server/informationcomment/${id}`
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
                            dispatch(deleteInformationCommentSuccess(json))
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteInformationCommentFailure(error));
                    })
    }
}


export const CHANGE_INFORMATION_COMMENT_FILTRATE = 'CHANGE_INFORMATION_COMMENT_FILTRATE';
/**
 * 
 * @param {*} keyword 搜索关键字
 */
export function changeInformationCommentFiltrate(keyword) {      // 更改筛选条件
    return {
        type: CHANGE_INFORMATION_COMMENT_FILTRATE,
        keyword: keyword
    }
}
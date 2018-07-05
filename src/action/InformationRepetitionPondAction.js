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

 export const GET_ALL_INFORMATION_REPETITION_POND_REQUEST = 'GET_ALL_INFORMATION_REPETITION_POND_REQUEST';        // 获取所有滤重池
 export const GET_ALL_INFORMATION_REPETITION_POND_SUCCESS = 'GET_ALL_INFORMATION_REPETITION_POND_SUCCESS';        // 获取成功
 export const GET_ALL_INFORMATION_REPETITION_POND_FAILURE = 'GET_ALL_INFORMATION_REPETITION_POND_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllInformationRepetitionPondRequest() {
    return {
        type: GET_ALL_INFORMATION_REPETITION_POND_REQUEST
    }
}
function getAllInformationRepetitionPondSuccess(json) {
    return {
        type: GET_ALL_INFORMATION_REPETITION_POND_SUCCESS,
        status: json.status,
        payload: json.data,
        redisData: json.redis_data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllInformationRepetitionPondFailure(error) {
    return {
        type: GET_ALL_INFORMATION_REPETITION_POND_FAILURE,
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
export function fetchGetAllInformationRepetitionPond(keyword, pageNum, bkey, ckey) {
    return function(dispatch, getState) {
        dispatch(getAllInformationRepetitionPondRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // 拼接url请求
        var url = '/informationrepetitionpond/';
        var params = `?keyword=${keyword}&bkey=${bkey}&ckey=${ckey}&page_num=${pageNum}`;

        var myInit = {
            method: 'GET',
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
                        json => dispatch(getAllInformationRepetitionPondSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllInformationRepetitionPondFailure(error));
                        message.error(error);
                    })
    }
}

export const CLEAN_INFORMATION_REPETITION_POND_REQUEST = 'CLEAN_INFORMATION_REPETITION_POND_REQUEST';       // 删除滤重池
export const CLEAN_INFORMATION_REPETITION_POND_SUCCESS = 'CLEAN_INFORMATION_REPETITION_POND_SUCCESS';       // 删除成功
export const CLEAN_INFORMATION_REPETITION_POND_FAILURE = 'CLEAN_INFORMATION_REPETITION_POND_FAILURE';       // 删除失败
function cleanInformationRepetitionPondRequest() {
    return {
        type: CLEAN_INFORMATION_REPETITION_POND_REQUEST
    }
}
function cleanInformationRepetitionPondSuccess(json) {
    return {
        type: CLEAN_INFORMATION_REPETITION_POND_SUCCESS,
        status: json.status
    }
}
function cleanInformationRepetitionPondFailure(error) {
    return {
        type: CLEAN_INFORMATION_REPETITION_POND_FAILURE,
        status: {
            'success': false,
            'message': '清空失败，无记录',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 清空滤重池
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchCleanInformationRepetitionPond(handleGet) {
    return function(dispatch, getState) {
        dispatch(cleanInformationRepetitionPondRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url =`/informationrepetitionpond/`;
        var myInit = {
            method: 'DELETE',
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
                            dispatch(cleanInformationRepetitionPondSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                        }
                    )
                    .catch((error) => {
                        dispatch(cleanInformationRepetitionPondFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_INFORMATION_REPETITION_POND_FILTRATE = 'CHANGE_INFORMATION_REPETITION_POND_FILTRATE';
/**
 * @param {*} keyword 搜索关键字
 * @param {*} crawlerSource 源
 * @param {*} crawlerCategory 分类
 */
export function changeInformationRepetitionPondFiltrate(keyword, bkey, ckey) {      // 更改筛选条件
    return {
        type: CHANGE_INFORMATION_REPETITION_POND_FILTRATE,
        keyword: keyword,
        bkey: bkey,
        ckey: ckey
    }
}
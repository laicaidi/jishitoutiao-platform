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

/**
 *  action 类型
 */

 export const GET_ALL_INFORMATION_ILLEGALITY_POND_REQUEST = 'GET_ALL_INFORMATION_ILLEGALITY_POND_REQUEST';        // 获取滤非法池所有数据
 export const GET_ALL_INFORMATION_ILLEGALITY_POND_SUCCESS = 'GET_ALL_INFORMATION_ILLEGALITY_POND_SUCCESS';        // 获取成功
 export const GET_ALL_INFORMATION_ILLEGALITY_POND_FAILURE = 'GET_ALL_INFORMATION_ILLEGALITY_POND_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllInformationIllegalityPondRequest() {
    return {
        type: GET_ALL_INFORMATION_ILLEGALITY_POND_REQUEST
    }
}
function getAllInformationIllegalityPondSuccess(json) {
    return {
        type: GET_ALL_INFORMATION_ILLEGALITY_POND_SUCCESS,
        status: json.status,
        payload: json.data,
        redisData: json.redis_data,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
function getAllInformationIllegalityPondFailure(error) {
    return {
        type: GET_ALL_INFORMATION_ILLEGALITY_POND_FAILURE,
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
export function fetchGetAllInformationIllegalityPond(keyword, pageNum, bkey, ckey) {
    return function(dispatch, getState) {
        dispatch(getAllInformationIllegalityPondRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // 拼接url请求
        var url = `${baseUrl}/informationillegalitypond/`;
        var params = `?keyword=${keyword}&bkey=${bkey}&ckey=${ckey}&page_num=${pageNum}`;

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
                            if (response.ok) {
                                return response.json();
                            } else {
                                consoleAndMessageOnError('请求失败；Code:' + response.status);
                            }
                        }
                    )
                    .then(
                        json => dispatch(getAllInformationIllegalityPondSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getAllInformationIllegalityPondFailure(error));
                        message.error(error);
                    })
    }
}

export const CLEAN_INFORMATION_ILLEGALITY_POND_REQUEST = 'CLEAN_INFORMATION_ILLEGALITY_POND_REQUEST';       // 删除滤非法池
export const CLEAN_INFORMATION_ILLEGALITY_POND_SUCCESS = 'CLEAN_INFORMATION_ILLEGALITY_POND_SUCCESS';       // 删除成功
export const CLEAN_INFORMATION_ILLEGALITY_POND_FAILURE = 'CLEAN_INFORMATION_ILLEGALITY_POND_FAILURE';       // 删除失败
function cleanInformationIllegalityPondRequest() {
    return {
        type: CLEAN_INFORMATION_ILLEGALITY_POND_REQUEST
    }
}
function cleanInformationIllegalityPondSuccess(json) {
    return {
        type: CLEAN_INFORMATION_ILLEGALITY_POND_SUCCESS,
        status: json.status
    }
}
function cleanInformationIllegalityPondFailure(error) {
    return {
        type: CLEAN_INFORMATION_ILLEGALITY_POND_FAILURE,
        status: {
            'success': false,
            'message': '清空失败，无记录',
            'time': moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 清空滤非法池
 * @param {*} handleGet 获取所有数据回调方法
 */
export function fetchCleanInformationIllegalityPond(handleGet) {
    return function(dispatch, getState) {
        dispatch(cleanInformationIllegalityPondRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        var url = `${baseUrl}/informationillegalitypond/`;
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
                            dispatch(cleanInformationIllegalityPondSuccess(json));
                            messageAfterFetch(json.status.success, json.status.message);
                            handleGet();
                        }
                    )
                    .catch((error) => {
                        dispatch(cleanInformationIllegalityPondFailure(error));
                        message.error(error);
                    })
    }
}

export const CHANGE_INFORMATION_ILLEGALITY_POND_FILTRATE = 'CHANGE_INFORMATION_ILLEGALITY_POND_FILTRATE';
/**
 * @param {*} keyword 搜索关键字
 * @param {*} crawlerSource 源
 * @param {*} crawlerCategory 分类
 */
export function changeInformationIllegalityPondFiltrate(keyword, bkey, ckey) {      // 更改筛选条件
    return {
        type: CHANGE_INFORMATION_ILLEGALITY_POND_FILTRATE,
        keyword: keyword,
        bkey: bkey,
        ckey: ckey
    }
}
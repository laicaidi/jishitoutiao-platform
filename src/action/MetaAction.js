import fetch from 'cross-fetch';
import moment from 'moment';
import { message } from 'antd';

/*
 * action 类型
 */
export const GET_META_REQUEST = 'GET_META_REQUEST';     //获取元数据
export const GET_META_SUCCESS = 'GET_META_SUCCESS';     //获取成功
export const GET_META_FAILURE = 'GET_META_FAILURE';     //获取失败
/*
 * action 创建函数
 */
function getMetaRequest() {
    return {
        type: GET_META_REQUEST
    }
}
function getMetaSuccess(json) {
    return {
        type: GET_META_SUCCESS,
        status: json.status,
        menu: json.meta.menu,
        sourceOption: json.meta.source_option,      // 爬虫源
        categoryList: json.meta.category_list,      // 类别
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss'),       // 接收数据时间
    }
}
function getMetaFailure(error) {
    return {
        type: GET_META_FAILURE,
        status: {
            "success": false,
            "message": "获取数据失败",
            "time": moment().format('YYYY-MM-DD HH:mm:ss'),
        },
        error
    }
}
export function fetchGetMeta() {
    return function(dispatch, getState) {
        // 首次 dispatch：更新应用的 state 来通知 API 请求发起了。
        dispatch(getMetaRequest());

        const state = getState();
        // 获取token
        var token = state.userLoginState.auth.access_token;

        // 拼接请求url
        var url = "/meta/";        // 请求url
        console.log("MetaAction.fetchGetMeta()--------请求url: " + url);

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
        return fetch(url, myInit)
                    .then(
                        response => {
                            if (response.ok) {      //正常返回
                                return response.json()
                            } else {
                                console.error('请求失败；Code:' + response.status);
                                message.error('请求失败；Code:' + response.status);
                            } 
                        }
                    )
                    .then(
                        json => dispatch(getMetaSuccess(json))
                    )
                    .catch((error) => {
                        dispatch(getMetaFailure(error));
                        message.error(error);
                    })
    }
}

export const UPDATE_SCREEN_SIZE = 'UPDATE_SCREEN_SIZE';     // 更新屏幕宽高
export function updateScreenSize(width, height) {
    return {
        type: UPDATE_SCREEN_SIZE,
        width: width,
        height: height
    }
}
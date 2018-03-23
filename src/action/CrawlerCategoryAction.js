import fetch from 'cross-fetch';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

/**
 *  action 类型
 */

 export const GET_ALL_CRAWLER_CATEGORY_REQUEST = 'GET_ALL_CRAWLER_CATEGORY_REQUEST';        // 获取所有类别
 export const GET_ALL_CRAWLER_CATEGORY_SUCCESS = 'GET_ALL_CRAWLER_CATEGORY_SUCCESS';        // 获取成功
 export const GET_ALL_CRAWLER_CATEGORY_FAILURE = 'GET_ALL_CRAWLER_CATEGORY_FAILURE';        // 获取失败
/**
 *  action 创建函数
 */
function getAllCrawlerCategoryRequest() {
    return {
        type: GET_ALL_CRAWLER_CATEGORY_REQUEST
    }
}
function getAllCrawlerCategorySuccess(json) {
    return {
        type: GET_ALL_CRAWLER_CATEGORY_SUCCESS,
        payload: json.data,
        status: json.status,
        receiveAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        keyword: json.keyword
    }
}
function getAllCrawlerCategoryFailure(error) {
    return {
        type: GET_ALL_CRAWLER_CATEGORY_FAILURE,
        status: {
            "success": false,
            "message": "获取数据失败",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} keyword 搜索关键字
 * @param {*} pageNum 页码
 */
export function fetchGetAllCrawlerCategory(keyword, pageNum) {
    return function(dispatch, getState) {
        dispatch(getAllCrawlerCategoryRequest());

        // 拼接url请求
        var url = `/jishitoutiao-server/crawlercategory/`
        var params = "?keyword=" + keyword + "&page_num=" + pageNum;
        console.log("CrawlerCategoryAction.fetchGetAllCrawlerCategory() ----请求url: " + url + params);

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
                        },
                        error => dispatch(getAllCrawlerCategoryFailure(error))
                    )
                    .then(
                        json => dispatch(getAllCrawlerCategorySuccess(json))
                    )
    }
}

export const ADD_CRAWLER_CATEGORY_REQUEST = 'ADD_CRAWLER_CATEGORY_REQUEST';     // 新增分类
export const ADD_CRAWLER_CATEGORY_SUCCESS = 'ADD_CRAWLER_CATEGORY_SUCCESS';     // 新增成功
export const ADD_CRAWLER_CATEGORY_FAILURE = 'ADD_CRAWLER_CATEGORY_FAILURE';     // 新增失败
function addCrawlerCategoryRequest() {
    return {
        type: ADD_CRAWLER_CATEGORY_REQUEST
    }
}
function addCrawlerCategorySuccess(json) {
    return {
        type: ADD_CRAWLER_CATEGORY_SUCCESS,
        status: json.status
    }
}
function addCrawlerCategoryFailure(error) {
    return {
        type: ADD_CRAWLER_CATEGORY_FAILURE,
        status: {
            "success": false,
            "message": "新增失败，请核实类别key或类别名称是否重复",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} formData 要增加的分类数据
 */
export function fetchAddCrawlerCategory(formData) {
    return function(dispatch, getState) {
        dispatch(addCrawlerCategoryRequest());

        var url = "/jishitoutiao-server/crawlercategory/";
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
                            dispatch(addCrawlerCategorySuccess(json));
                        }
                    )
                    .catch((error) => {
                        dispatch(addCrawlerCategoryFailure(error));
                    })
    }
}

export const DELETE_CRAWLER_CATEGORY_REQUEST = 'DELETE_CRAWLER_CATEGORY_REQUEST';       // 删除分类
export const DELETE_CRAWLER_CATEGORY_SUCCESS = 'DELETE_CRAWLER_CATEGORY_SUCCESS';       // 删除成功
export const DELETE_CRAWLER_CATEGORY_FAILURE = 'DELETE_CRAWLER_CATEGROY_FAILURE';       // 删除失败
function deleteCrawlerCategoryRequest() {
    return {
        type: DELETE_CRAWLER_CATEGORY_REQUEST
    }
}
function deleteCrawlerCategorySuccess(json) {
    return {
        type: DELETE_CRAWLER_CATEGORY_SUCCESS,
        status: json.status
    }
}
function deleteCrawlerCategoryFailure(error) {
    return {
        type: DELETE_CRAWLER_CATEGORY_FAILURE,
        status: {
            "success": false,
            "message": "删除失败，请重试",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} cid 要删除的分类id
 */
export function fetchDeleteCrawlerCategory(cid) {
    return function(dispatch, getState) {
        dispatch(deleteCrawlerCategoryRequest());

        var url =`/jishitoutiao-server/crawlercategory/${cid}`
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
                            dispatch(deleteCrawlerCategorySuccess(json))
                        }
                    )
                    .catch((error) => {
                        dispatch(deleteCrawlerCategoryFailure(error));
                    })
    }
}

export const UPDATE_CRAWLER_CATEGORY_REQUEST = 'UPDATE_CRAWLER_CATEGORY_REQUEST';
export const UPDATE_CRAWLER_CATEGORY_SUCCESS = 'UPDATE_CRAWLER_CATEGORY_SUCCESS';
export const UPDATE_CRAWLER_CATEGORY_FAILURE = 'UPDATE_CRAWLER_CATEGORY_FAILURE';
function updateCrawlerCategoryRequest() {
    return {
        type: UPDATE_CRAWLER_CATEGORY_REQUEST
    }
}
function updateCrawlerCategorySuccess(json) {
    return {
        type: UPDATE_CRAWLER_CATEGORY_SUCCESS,
        status: json.status
    }
}
function updateCrawlerCategoryFailure(error) {
    return {
        type: UPDATE_CRAWLER_CATEGORY_FAILURE,
        status: {
            "success": false,
            "message": "更新失败，请核实类别key或类别名称是否重复",
            "time": moment().format('YYYY-MM-DD HH:mm:ss')
        },
        error
    }
}
/**
 * 
 * @param {*} cid 要更新的分类id
 * @param {*} formData 要更新的分类数据
 */
export function fetchUpdateCrawlerCategory(cid, formData) {
    return function(dispatch, getState) {
        dispatch(updateCrawlerCategoryRequest());

        var url = `/jishitoutiao-server/crawlercategory/${cid}`;
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
                            dispatch(updateCrawlerCategorySuccess(json))
                        }
                    )
                    .catch((error) => {
                        dispatch(updateCrawlerCategoryFailure(error));
                    })
    }
}
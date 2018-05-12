import {
    GET_ALL_CRAWLER_SET_REQUEST,
    GET_ALL_CRAWLER_SET_SUCCESS,
    GET_ALL_CRAWLER_SET_FAILURE,
    ADD_CRAWLER_SET_REQUEST,
    ADD_CRAWLER_SET_SUCCESS,
    ADD_CRAWLER_SET_FAILURE,
    DELETE_CRAWLER_SET_REQUEST,
    DELETE_CRAWLER_SET_SUCCESS,
    DELETE_CRAWLER_SET_FAILURE,
    UPDATE_CRAWLER_SET_REQUEST,
    UPDATE_CRAWLER_SET_SUCCESS,
    UPDATE_CRAWLER_SET_FAILURE,
    CHANGE_CRAWLER_SET_FILTRATE
  } from '../action/CrawlerSetAction';

// 获取所有爬虫设置reducer
export function getAllCrawlerSetReducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_CRAWLER_SET_REQUEST: 
            return Object.assign({}, state, 
                                {isFetching: true});
        case GET_ALL_CRAWLER_SET_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {receiveAt: action.receiveAt});
        case GET_ALL_CRAWLER_SET_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error}, );
        default:
            return state;
    }
}

// 新增爬虫设置reducer
export function addCrawlerSetReducer(state = [], action) {
    switch (action.type) {
        case ADD_CRAWLER_SET_REQUEST:
            return Object.assign({}, state, 
                                {isCreating: true});
        case ADD_CRAWLER_SET_SUCCESS:
            return Object.assign({}, state,
                                {isCreating: false},
                                {status: action.status});
        case ADD_CRAWLER_SET_FAILURE:
            return Object.assign({}, state, 
                                {isCreating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除爬虫设置reducer
export function deleteCrawlerSetReducer(state = [], action) {
    switch (action.type) {
        case DELETE_CRAWLER_SET_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_CRAWLER_SET_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_CRAWLER_SET_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新爬虫设置reducer
export function updateCrawlerSetReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_CRAWLER_SET_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_CRAWLER_SET_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_CRAWLER_SET_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeCrawlerSetFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_CRAWLER_SET_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword});
        default:
            return state;
    }
}
import {
    GET_ALL_CRAWLER_MANAGEMENT_REQUEST,
    GET_ALL_CRAWLER_MANAGEMENT_SUCCESS,
    GET_ALL_CRAWLER_MANAGEMENT_FAILURE,
    ADD_CRAWLER_MANAGEMENT_REQUEST,
    ADD_CRAWLER_MANAGEMENT_SUCCESS,
    ADD_CRAWLER_MANAGEMENT_FAILURE,
    DELETE_CRAWLER_MANAGEMENT_REQUEST,
    DELETE_CRAWLER_MANAGEMENT_SUCCESS,
    DELETE_CRAWLER_MANAGEMENT_FAILURE,
    UPDATE_CRAWLER_MANAGEMENT_REQUEST,
    UPDATE_CRAWLER_MANAGEMENT_SUCCESS,
    UPDATE_CRAWLER_MANAGEMENT_FAILURE,
    CHANGE_CRAWLER_MANAGEMENT_FILTRATE
} from '../action/CrawlerManagementAction';

// 获取所有爬虫reducer
export function getAllCrawlerManagementReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_CRAWLER_MANAGEMENT_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_CRAWLER_MANAGEMENT_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {receiveAt: action.receiveAt});
        case GET_ALL_CRAWLER_MANAGEMENT_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 新增爬虫reducer
export function addCrawlerManagementReducer(state = [], action) {
    switch (action.type) {
        case ADD_CRAWLER_MANAGEMENT_REQUEST:
            return Object.assign({}, state, 
                                {isCreating: true});
        case ADD_CRAWLER_MANAGEMENT_SUCCESS:
            return Object.assign({}, state,
                                {isCreating: false},
                                {status: action.status});
        case ADD_CRAWLER_MANAGEMENT_FAILURE:
            return Object.assign({}, state, 
                                {isCreating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除爬虫reducer
export function deleteCrawlerManagementReducer(state = [], action) {
    switch (action.type) {
        case DELETE_CRAWLER_MANAGEMENT_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_CRAWLER_MANAGEMENT_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_CRAWLER_MANAGEMENT_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新爬虫reducer
export function updateCrawlerManagementReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_CRAWLER_MANAGEMENT_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_CRAWLER_MANAGEMENT_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_CRAWLER_MANAGEMENT_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeCrawlerManagementFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_CRAWLER_MANAGEMENT_FILTRATE:
            return Object.assign({}, state, 
                                {keyword: action.keyword},
                                {bkey: action.bkey},
                                {ckey: action.ckey},
                                {crawlerStatus: action.crawlerStatus},
                                {crawlerSwitch: action.crawlerSwitch});
        default:
            return state;
    }
}
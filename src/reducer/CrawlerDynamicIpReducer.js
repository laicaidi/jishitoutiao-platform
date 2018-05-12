import {
    GET_ALL_CRAWLER_DYNAMIC_IP_REQUEST,
    GET_ALL_CRAWLER_DYNAMIC_IP_SUCCESS,
    GET_ALL_CRAWLER_DYNAMIC_IP_FAILURE,
    ADD_CRAWLER_DYNAMIC_IP_REQUEST,
    ADD_CRAWLER_DYNAMIC_IP_SUCCESS,
    ADD_CRAWLER_DYNAMIC_IP_FAILURE,
    DELETE_CRAWLER_DYNAMIC_IP_REQUEST,
    DELETE_CRAWLER_DYNAMIC_IP_SUCCESS,
    DELETE_CRAWLER_DYNAMIC_IP_FAILURE,
    UPDATE_CRAWLER_DYNAMIC_IP_REQUEST,
    UPDATE_CRAWLER_DYNAMIC_IP_SUCCESS,
    UPDATE_CRAWLER_DYNAMIC_IP_FAILURE,
    CHANGE_CRAWLER_DYNAMIC_IP_FILTRATE
} from '../action/CrawlerDynamicIpAction';

// 获取所有动态ip的reducer
export function getAllCrawlerDynamicIpReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_CRAWLER_DYNAMIC_IP_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_CRAWLER_DYNAMIC_IP_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {receiveAt: action.receiveAt});
        case GET_ALL_CRAWLER_DYNAMIC_IP_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 新增动态ip的reducer
export function addCrawlerDynamicIpReducer(state = [], action) {
    switch (action.type) {
        case ADD_CRAWLER_DYNAMIC_IP_REQUEST:
            return Object.assign({}, state, 
                                {isCreating: true});
        case ADD_CRAWLER_DYNAMIC_IP_SUCCESS:
            return Object.assign({}, state,
                                {isCreating: false},
                                {status: action.status});
        case ADD_CRAWLER_DYNAMIC_IP_FAILURE:
            return Object.assign({}, state, 
                                {isCreating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除动态ip的reducer
export function deleteCrawlerDynamicIpReducer(state = [], action) {
    switch (action.type) {
        case DELETE_CRAWLER_DYNAMIC_IP_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_CRAWLER_DYNAMIC_IP_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_CRAWLER_DYNAMIC_IP_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新动态ip的reducer
export function updateCrawlerDynamicIpReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_CRAWLER_DYNAMIC_IP_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_CRAWLER_DYNAMIC_IP_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_CRAWLER_DYNAMIC_IP_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeCrawlerDynamicIpFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_CRAWLER_DYNAMIC_IP_FILTRATE:
            return Object.assign({}, state, 
                                {keyword: action.keyword},
                                {protocol: action.protocol});
        default:
            return state;
    }
}
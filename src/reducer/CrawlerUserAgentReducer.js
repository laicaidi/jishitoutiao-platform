import {
    GET_ALL_CRAWLER_USER_AGENT_REQUEST,
    GET_ALL_CRAWLER_USER_AGENT_SUCCESS,
    GET_ALL_CRAWLER_USER_AGENT_FAILURE,
    ADD_CRAWLER_USER_AGENT_REQUEST,
    ADD_CRAWLER_USER_AGENT_SUCCESS,
    ADD_CRAWLER_USER_AGENT_FAILURE,
    DELETE_CRAWLER_USER_AGENT_REQUEST,
    DELETE_CRAWLER_USER_AGENT_SUCCESS,
    DELETE_CRAWLER_USER_AGENT_FAILURE,
    UPDATE_CRAWLER_USER_AGENT_REQUEST,
    UPDATE_CRAWLER_USER_AGENT_SUCCESS,
    UPDATE_CRAWLER_USER_AGENT_FAILURE,
    CHANGE_CRAWLER_USER_AGENT_FILTRATE
} from '../action/CrawlerUserAgentAction';

// 获取所有分类reducer
export function getAllCrawlerUserAgentReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_CRAWLER_USER_AGENT_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_CRAWLER_USER_AGENT_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {receiveAt: action.receiveAt});
        case GET_ALL_CRAWLER_USER_AGENT_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 新增分类reducer
export function addCrawlerUserAgentReducer(state = [], action) {
    switch (action.type) {
        case ADD_CRAWLER_USER_AGENT_REQUEST:
            return Object.assign({}, state, 
                                {isCreating: true});
        case ADD_CRAWLER_USER_AGENT_SUCCESS:
            return Object.assign({}, state,
                                {isCreating: false},
                                {status: action.status});
        case ADD_CRAWLER_USER_AGENT_FAILURE:
            return Object.assign({}, state, 
                                {isCreating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除分类reducer
export function deleteCrawlerUserAgentReducer(state = [], action) {
    switch (action.type) {
        case DELETE_CRAWLER_USER_AGENT_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_CRAWLER_USER_AGENT_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_CRAWLER_USER_AGENT_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新分类reducer
export function updateCrawlerUserAgentReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_CRAWLER_USER_AGENT_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_CRAWLER_USER_AGENT_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_CRAWLER_USER_AGENT_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeCrawlerUserAgentFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_CRAWLER_USER_AGENT_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword});
        default:
            return state;
    }
}
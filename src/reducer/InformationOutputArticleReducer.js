import {
    GET_ALL_INFORMATION_OUTPUT_ARTICLE_REQUEST,
    GET_ALL_INFORMATION_OUTPUT_ARTICLE_SUCCESS,
    GET_ALL_INFORMATION_OUTPUT_ARTICLE_FAILURE,
    DELETE_INFORMATION_OUTPUT_ARTICLE_REQUEST,
    DELETE_INFORMATION_OUTPUT_ARTICLE_SUCCESS,
    DELETE_INFORMATION_OUTPUT_ARTICLE_FAILURE,
    UPDATE_INFORMATION_OUTPUT_ARTICLE_REQUEST,
    UPDATE_INFORMATION_OUTPUT_ARTICLE_SUCCESS,
    UPDATE_INFORMATION_OUTPUT_ARTICLE_FAILURE,
    CHANGE_INFORMATION_OUTPUT_ARTICLE_FILTRATE
} from '../action/InformationOutputArticleAction';

// 获取所有资讯内容数据reducer
export function getAllInformationOutputArticleReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_INFORMATION_OUTPUT_ARTICLE_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_INFORMATION_OUTPUT_ARTICLE_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {redisData: action.redisData},
                                {receiveAt: action.receiveAt});
        case GET_ALL_INFORMATION_OUTPUT_ARTICLE_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除资讯内容数据reducer
export function deleteInformationOutputArticleReducer(state = [], action) {
    switch (action.type) {
        case DELETE_INFORMATION_OUTPUT_ARTICLE_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_INFORMATION_OUTPUT_ARTICLE_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_INFORMATION_OUTPUT_ARTICLE_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新资讯内容数据reducer
export function updateInformationOutputArticleReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_INFORMATION_OUTPUT_ARTICLE_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_INFORMATION_OUTPUT_ARTICLE_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_INFORMATION_OUTPUT_ARTICLE_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeInformationOutputArticleFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_INFORMATION_OUTPUT_ARTICLE_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword},
                                {bkey: action.bkey},
                                {ckey: action.ckey});
        default:
            return state;
    }
}
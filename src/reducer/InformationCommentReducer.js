import {
    GET_ALL_INFORMATION_COMMENT_REQUEST,
    GET_ALL_INFORMATION_COMMENT_SUCCESS,
    GET_ALL_INFORMATION_COMMENT_FAILURE,
    DELETE_INFORMATION_COMMENT_REQUEST,
    DELETE_INFORMATION_COMMENT_SUCCESS,
    DELETE_INFORMATION_COMMENT_FAILURE,
    CHANGE_INFORMATION_COMMENT_FILTRATE
} from '../action/InformationCommentAction';

// 获取所有资讯评论reducer
export function getAllInformationCommentReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_INFORMATION_COMMENT_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_INFORMATION_COMMENT_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {redisData: action.redisData},
                                {receiveAt: action.receiveAt});
        case GET_ALL_INFORMATION_COMMENT_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除资讯评论reducer
export function deleteInformationCommentReducer(state = [], action) {
    switch (action.type) {
        case DELETE_INFORMATION_COMMENT_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_INFORMATION_COMMENT_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_INFORMATION_COMMENT_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改搜索条件reducer
export function changeInformationCommentFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_INFORMATION_COMMENT_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword});
        default:
            return state;
    }
}
import {
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    CHANGE_USER_FILTRATE
} from '../action/UserAction';

// 获取所有用户reducer
export function getAllUserReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_USER_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_USER_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {redisData: action.redisData},
                                {receiveAt: action.receiveAt});
        case GET_ALL_USER_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除用户reducer
export function deleteUserReducer(state = [], action) {
    switch (action.type) {
        case DELETE_USER_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_USER_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_USER_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改搜索条件reducer
export function changeUserFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_USER_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword});
        default:
            return state;
    }
}
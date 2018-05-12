import {
    GET_ALL_INFORMATION_ILLEGALITY_RESULT_REQUEST,
    GET_ALL_INFORMATION_ILLEGALITY_RESULT_SUCCESS,
    GET_ALL_INFORMATION_ILLEGALITY_RESULT_FAILURE,
    DELETE_INFORMATION_ILLEGALITY_RESULT_REQUEST,
    DELETE_INFORMATION_ILLEGALITY_RESULT_SUCCESS,
    DELETE_INFORMATION_ILLEGALITY_RESULT_FAILURE,
    UPDATE_INFORMATION_ILLEGALITY_RESULT_REQUEST,
    UPDATE_INFORMATION_ILLEGALITY_RESULT_SUCCESS,
    UPDATE_INFORMATION_ILLEGALITY_RESULT_FAILURE,
    CHANGE_INFORMATION_ILLEGALITY_RESULT_FILTRATE
} from '../action/InformationIllegalityResultAction';

// 获取滤非法结果所有数据reducer
export function getAllInformationIllegalityResultReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_INFORMATION_ILLEGALITY_RESULT_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_INFORMATION_ILLEGALITY_RESULT_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {redisData: action.redisData},
                                {receiveAt: action.receiveAt});
        case GET_ALL_INFORMATION_ILLEGALITY_RESULT_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除滤非法结果reducer
export function deleteInformationIllegalityResultReducer(state = [], action) {
    switch (action.type) {
        case DELETE_INFORMATION_ILLEGALITY_RESULT_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_INFORMATION_ILLEGALITY_RESULT_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_INFORMATION_ILLEGALITY_RESULT_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新滤非法结果reducer
export function updateInformationIllegalityResultReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_INFORMATION_ILLEGALITY_RESULT_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_INFORMATION_ILLEGALITY_RESULT_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_INFORMATION_ILLEGALITY_RESULT_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeInformationIllegalityResultFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_INFORMATION_ILLEGALITY_RESULT_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword},
                                {bkey: action.bkey},
                                {ckey: action.ckey});
        default:
            return state;
    }
}
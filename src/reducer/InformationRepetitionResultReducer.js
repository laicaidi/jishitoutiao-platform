import {
    GET_ALL_INFORMATION_REPETITION_RESULT_REQUEST,
    GET_ALL_INFORMATION_REPETITION_RESULT_SUCCESS,
    GET_ALL_INFORMATION_REPETITION_RESULT_FAILURE,
    DELETE_INFORMATION_REPETITION_RESULT_REQUEST,
    DELETE_INFORMATION_REPETITION_RESULT_SUCCESS,
    DELETE_INFORMATION_REPETITION_RESULT_FAILURE,
    UPDATE_INFORMATION_REPETITION_RESULT_REQUEST,
    UPDATE_INFORMATION_REPETITION_RESULT_SUCCESS,
    UPDATE_INFORMATION_REPETITION_RESULT_FAILURE,
    CHANGE_INFORMATION_REPETITION_RESULT_FILTRATE
} from '../action/InformationRepetitionResultAction';

// 获取滤重结果所有数据reducer
export function getAllInformationRepetitionResultReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_INFORMATION_REPETITION_RESULT_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_INFORMATION_REPETITION_RESULT_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {redisData: action.redisData},
                                {receiveAt: action.receiveAt});
        case GET_ALL_INFORMATION_REPETITION_RESULT_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除滤重结果reducer
export function deleteInformationRepetitionResultReducer(state = [], action) {
    switch (action.type) {
        case DELETE_INFORMATION_REPETITION_RESULT_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_INFORMATION_REPETITION_RESULT_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_INFORMATION_REPETITION_RESULT_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新滤重结果reducer
export function updateInformationRepetitionResultReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_INFORMATION_REPETITION_RESULT_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_INFORMATION_REPETITION_RESULT_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_INFORMATION_REPETITION_RESULT_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeInformationRepetitionResultFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_INFORMATION_REPETITION_RESULT_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword},
                                {bkey: action.bkey},
                                {ckey: action.ckey});
        default:
            return state;
    }
}
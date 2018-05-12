import {
    GET_ALL_INFORMATION_OUTPUT_LIST_REQUEST,
    GET_ALL_INFORMATION_OUTPUT_LIST_SUCCESS,
    GET_ALL_INFORMATION_OUTPUT_LIST_FAILURE,
    DELETE_INFORMATION_OUTPUT_LIST_REQUEST,
    DELETE_INFORMATION_OUTPUT_LIST_SUCCESS,
    DELETE_INFORMATION_OUTPUT_LIST_FAILURE,
    UPDATE_INFORMATION_OUTPUT_LIST_REQUEST,
    UPDATE_INFORMATION_OUTPUT_LIST_SUCCESS,
    UPDATE_INFORMATION_OUTPUT_LIST_FAILURE,
    CHANGE_INFORMATION_OUTPUT_LIST_FILTRATE
} from '../action/InformationOutputListAction';

// 获取所有列表输出数据reducer
export function getAllInformationOutputListReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_INFORMATION_OUTPUT_LIST_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_INFORMATION_OUTPUT_LIST_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {redisData: action.redisData},
                                {receiveAt: action.receiveAt});
        case GET_ALL_INFORMATION_OUTPUT_LIST_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除列表输出数据reducer
export function deleteInformationOutputListReducer(state = [], action) {
    switch (action.type) {
        case DELETE_INFORMATION_OUTPUT_LIST_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_INFORMATION_OUTPUT_LIST_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_INFORMATION_OUTPUT_LIST_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新列表输出数据reducer
export function updateInformationOutputListReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_INFORMATION_OUTPUT_LIST_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_INFORMATION_OUTPUT_LIST_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_INFORMATION_OUTPUT_LIST_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeInformationOutputListFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_INFORMATION_OUTPUT_LIST_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword},
                                {bkey: action.bkey},
                                {ckey: action.ckey});
        default:
            return state;
    }
}
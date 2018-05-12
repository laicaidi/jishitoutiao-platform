import {
    GET_ALL_INFORMATION_WEIGHT_SORT_REQUEST,
    GET_ALL_INFORMATION_WEIGHT_SORT_SUCCESS,
    GET_ALL_INFORMATION_WEIGHT_SORT_FAILURE,
    DELETE_INFORMATION_WEIGHT_SORT_REQUEST,
    DELETE_INFORMATION_WEIGHT_SORT_SUCCESS,
    DELETE_INFORMATION_WEIGHT_SORT_FAILURE,
    UPDATE_INFORMATION_WEIGHT_SORT_REQUEST,
    UPDATE_INFORMATION_WEIGHT_SORT_SUCCESS,
    UPDATE_INFORMATION_WEIGHT_SORT_FAILURE,
    CHANGE_INFORMATION_WEIGHT_SORT_FILTRATE
} from '../action/InformationWeightSortAction';

// 获取所有得分数据reducer
export function getAllInformationWeightSortReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_INFORMATION_WEIGHT_SORT_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_INFORMATION_WEIGHT_SORT_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {redisData: action.redisData},
                                {receiveAt: action.receiveAt});
        case GET_ALL_INFORMATION_WEIGHT_SORT_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除得分数据reducer
export function deleteInformationWeightSortReducer(state = [], action) {
    switch (action.type) {
        case DELETE_INFORMATION_WEIGHT_SORT_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_INFORMATION_WEIGHT_SORT_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_INFORMATION_WEIGHT_SORT_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新得分数据reducer
export function updateInformationWeightSortReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_INFORMATION_WEIGHT_SORT_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_INFORMATION_WEIGHT_SORT_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_INFORMATION_WEIGHT_SORT_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeInformationWeightSortFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_INFORMATION_WEIGHT_SORT_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword},
                                {bkey: action.bkey},
                                {ckey: action.ckey});
        default:
            return state;
    }
}
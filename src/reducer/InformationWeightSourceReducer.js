import {
    GET_ALL_INFORMATION_WEIGHT_SOURCE_REQUEST,
    GET_ALL_INFORMATION_WEIGHT_SOURCE_SUCCESS,
    GET_ALL_INFORMATION_WEIGHT_SOURCE_FAILURE,
    DELETE_INFORMATION_WEIGHT_SOURCE_REQUEST,
    DELETE_INFORMATION_WEIGHT_SOURCE_SUCCESS,
    DELETE_INFORMATION_WEIGHT_SOURCE_FAILURE,
    UPDATE_INFORMATION_WEIGHT_SOURCE_REQUEST,
    UPDATE_INFORMATION_WEIGHT_SOURCE_SUCCESS,
    UPDATE_INFORMATION_WEIGHT_SOURCE_FAILURE,
    CHANGE_INFORMATION_WEIGHT_SOURCE_FILTRATE
} from '../action/InformationWeightSourceAction';

// 获取所有权重源数据reducer
export function getAllInformationWeightSourceReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_INFORMATION_WEIGHT_SOURCE_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_INFORMATION_WEIGHT_SOURCE_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {redisData: action.redisData},
                                {receiveAt: action.receiveAt});
        case GET_ALL_INFORMATION_WEIGHT_SOURCE_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除权重源reducer
export function deleteInformationWeightSourceReducer(state = [], action) {
    switch (action.type) {
        case DELETE_INFORMATION_WEIGHT_SOURCE_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_INFORMATION_WEIGHT_SOURCE_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_INFORMATION_WEIGHT_SOURCE_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新权重源reducer
export function updateInformationWeightSourceReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_INFORMATION_WEIGHT_SOURCE_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_INFORMATION_WEIGHT_SOURCE_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_INFORMATION_WEIGHT_SOURCE_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeInformationWeightSourceFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_INFORMATION_WEIGHT_SOURCE_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword},
                                {bkey: action.bkey},
                                {ckey: action.ckey});
        default:
            return state;
    }
}
import {
    GET_ALL_INFORMATION_WEIGHT_FILTRATE_REQUEST,
    GET_ALL_INFORMATION_WEIGHT_FILTRATE_SUCCESS,
    GET_ALL_INFORMATION_WEIGHT_FILTRATE_FAILURE,
    DELETE_INFORMATION_WEIGHT_FILTRATE_REQUEST,
    DELETE_INFORMATION_WEIGHT_FILTRATE_SUCCESS,
    DELETE_INFORMATION_WEIGHT_FILTRATE_FAILURE,
    UPDATE_INFORMATION_WEIGHT_FILTRATE_REQUEST,
    UPDATE_INFORMATION_WEIGHT_FILTRATE_SUCCESS,
    UPDATE_INFORMATION_WEIGHT_FILTRATE_FAILURE,
    CHANGE_INFORMATION_WEIGHT_FILTRATE
} from '../action/InformationWeightFiltrateAction';

// 获取所有得分筛选数据reducer
export function getAllInformationWeightFiltrateReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_INFORMATION_WEIGHT_FILTRATE_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_INFORMATION_WEIGHT_FILTRATE_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {redisData: action.redisData},
                                {receiveAt: action.receiveAt});
        case GET_ALL_INFORMATION_WEIGHT_FILTRATE_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除得分筛选数据reducer
export function deleteInformationWeightFiltrateReducer(state = [], action) {
    switch (action.type) {
        case DELETE_INFORMATION_WEIGHT_FILTRATE_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_INFORMATION_WEIGHT_FILTRATE_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_INFORMATION_WEIGHT_FILTRATE_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新得分筛选数据reducer
export function updateInformationWeightFiltrateReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_INFORMATION_WEIGHT_FILTRATE_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_INFORMATION_WEIGHT_FILTRATE_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_INFORMATION_WEIGHT_FILTRATE_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeInformationWeightFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_INFORMATION_WEIGHT_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword},
                                {bkey: action.bkey},
                                {ckey: action.ckey});
        default:
            return state;
    }
}
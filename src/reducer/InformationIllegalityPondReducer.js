import {
    GET_ALL_INFORMATION_ILLEGALITY_POND_REQUEST,
    GET_ALL_INFORMATION_ILLEGALITY_POND_SUCCESS,
    GET_ALL_INFORMATION_ILLEGALITY_POND_FAILURE,
    CLEAN_INFORMATION_ILLEGALITY_POND_REQUEST,
    CLEAN_INFORMATION_ILLEGALITY_POND_SUCCESS,
    CLEAN_INFORMATION_ILLEGALITY_POND_FAILURE,
    CHANGE_INFORMATION_ILLEGALITY_POND_FILTRATE
} from '../action/InformationIllegalityPondAction';

// 获取滤非法池所有数据reducer
export function getAllInformationIllegalityPondReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_INFORMATION_ILLEGALITY_POND_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_INFORMATION_ILLEGALITY_POND_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {redisData: action.redisData},
                                {receiveAt: action.receiveAt});
        case GET_ALL_INFORMATION_ILLEGALITY_POND_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除滤非法池数据reducer
export function cleanInformationIllegalityPondReducer(state = [], action) {
    switch (action.type) {
        case CLEAN_INFORMATION_ILLEGALITY_POND_REQUEST:
            return Object.assign({}, state,
                                {isCleaning: true});
        case CLEAN_INFORMATION_ILLEGALITY_POND_SUCCESS:
            return Object.assign({}, state,
                                {isCleaning: false},
                                {status: action.status});
        case CLEAN_INFORMATION_ILLEGALITY_POND_FAILURE:
            return Object.assign({}, state,
                                {isCleaning: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeInformationIllegalityPondFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_INFORMATION_ILLEGALITY_POND_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword},
                                {bkey: action.bkey},
                                {ckey: action.ckey});
        default:
            return state;
    }
}
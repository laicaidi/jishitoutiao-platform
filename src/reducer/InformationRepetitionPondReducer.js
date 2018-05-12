import {
    GET_ALL_INFORMATION_REPETITION_POND_REQUEST,
    GET_ALL_INFORMATION_REPETITION_POND_SUCCESS,
    GET_ALL_INFORMATION_REPETITION_POND_FAILURE,
    CLEAN_INFORMATION_REPETITION_POND_REQUEST,
    CLEAN_INFORMATION_REPETITION_POND_SUCCESS,
    CLEAN_INFORMATION_REPETITION_POND_FAILURE,
    CHANGE_INFORMATION_REPETITION_POND_FILTRATE
} from '../action/InformationRepetitionPondAction';

// 获取滤重池所有数据reducer
export function getAllInformationRepetitionPondReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_INFORMATION_REPETITION_POND_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_INFORMATION_REPETITION_POND_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {redisData: action.redisData},
                                {receiveAt: action.receiveAt});
        case GET_ALL_INFORMATION_REPETITION_POND_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除滤重池数据reducer
export function cleanInformationRepetitionPondReducer(state = [], action) {
    switch (action.type) {
        case CLEAN_INFORMATION_REPETITION_POND_REQUEST:
            return Object.assign({}, state,
                                {isCleaning: true});
        case CLEAN_INFORMATION_REPETITION_POND_SUCCESS:
            return Object.assign({}, state,
                                {isCleaning: false},
                                {status: action.status});
        case CLEAN_INFORMATION_REPETITION_POND_FAILURE:
            return Object.assign({}, state,
                                {isCleaning: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeInformationRepetitionPondFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_INFORMATION_REPETITION_POND_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword},
                                {bkey: action.bkey},
                                {ckey: action.ckey});
        default:
            return state;
    }
}
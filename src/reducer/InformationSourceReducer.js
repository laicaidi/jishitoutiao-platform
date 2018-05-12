import {
    GET_ALL_INFORMATION_SOURCE_REQUEST,
    GET_ALL_INFORMATION_SOURCE_SUCCESS,
    GET_ALL_INFORMATION_SOURCE_FAILURE,
    ADD_INFORMATION_SOURCE_REQUEST,
    ADD_INFORMATION_SOURCE_SUCCESS,
    ADD_INFORMATION_SOURCE_FAILURE,
    DELETE_INFORMATION_SOURCE_REQUEST,
    DELETE_INFORMATION_SOURCE_SUCCESS,
    DELETE_INFORMATION_SOURCE_FAILURE,
    UPDATE_INFORMATION_SOURCE_REQUEST,
    UPDATE_INFORMATION_SOURCE_SUCCESS,
    UPDATE_INFORMATION_SOURCE_FAILURE,
    CHANGE_INFORMATION_SOURCE_FILTRATE
} from '../action/InformationSourceAction';

// 获取所有资讯源reducer
export function getAllInformationSourceReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_INFORMATION_SOURCE_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_INFORMATION_SOURCE_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {redisData: action.redisData},
                                {receiveAt: action.receiveAt});
        case GET_ALL_INFORMATION_SOURCE_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 新增资讯源reducer
export function addInformationSourceReducer(state = [], action) {
    switch (action.type) {
        case ADD_INFORMATION_SOURCE_REQUEST:
            return Object.assign({}, state, 
                                {isCreating: true});
        case ADD_INFORMATION_SOURCE_SUCCESS:
            return Object.assign({}, state,
                                {isCreating: false},
                                {status: action.status});
        case ADD_INFORMATION_SOURCE_FAILURE:
            return Object.assign({}, state, 
                                {isCreating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除资讯源reducer
export function deleteInformationSourceReducer(state = [], action) {
    switch (action.type) {
        case DELETE_INFORMATION_SOURCE_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_INFORMATION_SOURCE_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_INFORMATION_SOURCE_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新资讯源reducer
export function updateInformationSourceReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_INFORMATION_SOURCE_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_INFORMATION_SOURCE_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_INFORMATION_SOURCE_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeInformationSourceFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_INFORMATION_SOURCE_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword},
                                {bkey: action.bkey},
                                {ckey: action.ckey});
        default:
            return state;
    }
}
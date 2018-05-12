import {
    GET_ALL_INFORMATION_WEIGHT_SET_REQUEST,
    GET_ALL_INFORMATION_WEIGHT_SET_SUCCESS,
    GET_ALL_INFORMATION_WEIGHT_SET_FAILURE,
    ADD_INFORMATION_WEIGHT_SET_REQUEST,
    ADD_INFORMATION_WEIGHT_SET_SUCCESS,
    ADD_INFORMATION_WEIGHT_SET_FAILURE,
    DELETE_INFORMATION_WEIGHT_SET_REQUEST,
    DELETE_INFORMATION_WEIGHT_SET_SUCCESS,
    DELETE_INFORMATION_WEIGHT_SET_FAILURE,
    UPDATE_INFORMATION_WEIGHT_SET_REQUEST,
    UPDATE_INFORMATION_WEIGHT_SET_SUCCESS,
    UPDATE_INFORMATION_WEIGHT_SET_FAILURE,
    CHANGE_INFORMATION_WEIGHT_SET_FILTRATE
  } from '../action/InformationWeightSetAction';

// 获取所有非法设置reducer
export function getAllInformationWeightSetReducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_INFORMATION_WEIGHT_SET_REQUEST: 
            return Object.assign({}, state, 
                                {isFetching: true});
        case GET_ALL_INFORMATION_WEIGHT_SET_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {receiveAt: action.receiveAt});
        case GET_ALL_INFORMATION_WEIGHT_SET_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error}, );
        default:
            return state;
    }
}

// 新增非法设置reducer
export function addInformationWeightSetReducer(state = [], action) {
    switch (action.type) {
        case ADD_INFORMATION_WEIGHT_SET_REQUEST:
            return Object.assign({}, state, 
                                {isCreating: true});
        case ADD_INFORMATION_WEIGHT_SET_SUCCESS:
            return Object.assign({}, state,
                                {isCreating: false},
                                {status: action.status});
        case ADD_INFORMATION_WEIGHT_SET_FAILURE:
            return Object.assign({}, state, 
                                {isCreating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除非法设置reducer
export function deleteInformationWeightSetReducer(state = [], action) {
    switch (action.type) {
        case DELETE_INFORMATION_WEIGHT_SET_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_INFORMATION_WEIGHT_SET_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_INFORMATION_WEIGHT_SET_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新非法设置reducer
export function updateInformationWeightSetReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_INFORMATION_WEIGHT_SET_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_INFORMATION_WEIGHT_SET_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_INFORMATION_WEIGHT_SET_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeInformationWeightSetFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_INFORMATION_WEIGHT_SET_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword});
        default:
            return state;
    }
}
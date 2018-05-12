import {
    GET_META_REQUEST,
    GET_META_SUCCESS,
    GET_META_FAILURE,
    UPDATE_SCREEN_SIZE
} from '../action/MetaAction';

// 获取元数据
export function getMetaReducer(state=[], action) {
    switch (action.type) {
        case GET_META_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_META_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {menu: action.menu},
                                {sourceOption: action.sourceOption},
                                {categoryList: action.categoryList},
                                {receiveAt: action.receiveAt});
        case GET_META_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status:action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新屏幕宽高
export function updateScreenReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_SCREEN_SIZE:
            return Object.assign({}, state, 
                                {width: action.width},
                                {height: action.height});
        default:
            return state;
    }
}
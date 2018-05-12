import {
    GET_ALL_CRAWLER_CATEGORY_REQUEST,
    GET_ALL_CRAWLER_CATEGORY_SUCCESS,
    GET_ALL_CRAWLER_CATEGORY_FAILURE,
    ADD_CRAWLER_CATEGORY_REQUEST,
    ADD_CRAWLER_CATEGORY_SUCCESS,
    ADD_CRAWLER_CATEGORY_FAILURE,
    DELETE_CRAWLER_CATEGORY_REQUEST,
    DELETE_CRAWLER_CATEGORY_SUCCESS,
    DELETE_CRAWLER_CATEGORY_FAILURE,
    UPDATE_CRAWLER_CATEGORY_REQUEST,
    UPDATE_CRAWLER_CATEGORY_SUCCESS,
    UPDATE_CRAWLER_CATEGORY_FAILURE,
    CHANGE_CRAWLER_CATEGORY_FILTRATE
} from '../action/CrawlerCategoryAction';

// 获取所有分类reducer
export function getAllCrawlerCategoryReducer(state=[], action) {
    switch (action.type) {
        case GET_ALL_CRAWLER_CATEGORY_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case GET_ALL_CRAWLER_CATEGORY_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {payload: action.payload},
                                {receiveAt: action.receiveAt});
        case GET_ALL_CRAWLER_CATEGORY_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {error: action.error});
        default:
            return state;
    }
}

// 新增分类reducer
export function addCrawlerCategoryReducer(state = [], action) {
    switch (action.type) {
        case ADD_CRAWLER_CATEGORY_REQUEST:
            return Object.assign({}, state, 
                                {isCreating: true});
        case ADD_CRAWLER_CATEGORY_SUCCESS:
            return Object.assign({}, state,
                                {isCreating: false},
                                {status: action.status});
        case ADD_CRAWLER_CATEGORY_FAILURE:
            return Object.assign({}, state, 
                                {isCreating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除分类reducer
export function deleteCrawlerCategoryReducer(state = [], action) {
    switch (action.type) {
        case DELETE_CRAWLER_CATEGORY_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_CRAWLER_CATEGORY_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_CRAWLER_CATEGORY_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新分类reducer
export function updateCrawlerCategoryReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_CRAWLER_CATEGORY_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_CRAWLER_CATEGORY_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_CRAWLER_CATEGORY_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更改筛选条件reducer
export function changeCrawlerCategoryFiltrateReducer(state = [], action) {
    switch (action.type) {
        case CHANGE_CRAWLER_CATEGORY_FILTRATE:
            return Object.assign({}, state,
                                {keyword: action.keyword});
        default:
            return state;
    }
}
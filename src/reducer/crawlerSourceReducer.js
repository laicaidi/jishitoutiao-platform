import {
    GET_ALL_CRAWLER_SOURCE_REQUEST,
    GET_ALL_CRAWLER_SOURCE_SUCCESS,
    GET_ALL_CRAWLER_SOURCE_FAILURE,
    ADD_CRAWLER_SOURCE_REQUEST,
    ADD_CRAWLER_SOURCE_SUCCESS,
    ADD_CRAWLER_SOURCE_FAILURE,
    DELETE_CRAWLER_SOURCE_REQUEST,
    DELETE_CRAWLER_SOURCE_SUCCESS,
    DELETE_CRAWLER_SOURCE_FAILURE,
    UPDATE_CRAWLER_SOURCE_REQUEST,
    UPDATE_CRAWLER_SOURCE_SUCCESS,
    UPDATE_CRAWLER_SOURCE_FAILURE
  } from '../action/CrawlerSourceAction';

// 获取所有爬虫源reducer
export function getAllCrawlerSourceReducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_CRAWLER_SOURCE_REQUEST: 
            return Object.assign({}, state, 
                                {isFetching: true});
        case GET_ALL_CRAWLER_SOURCE_SUCCESS:
            return Object.assign({}, state,
                                {isFetching: false},
                                {payload: action.payload},
                                {status: action.status},
                                {receiveAt: action.receiveAt},
                                {keyword: action.keyword});
        case GET_ALL_CRAWLER_SOURCE_FAILURE:
            return Object.assign({}, state,
                                {isFetching: false},
                                {status: action.status},
                                {error: action.error}, );
        // 切换页码reducer，暂不需要本功能，代码仅供参考
        // case CHANGE_PAGE:
        //     return Object.assign({}, state,
        //                         {   // 仅将state中的payload节点中的page_num数据替换，其他不变
        //                             payload: state.payload.map((data, index) => {
        //                                 if (index === 'page_num') {
        //                                     return Object.assign({}, data, {page_num: action.page_num});
        //                                 }
        //                                 return data;
        //                             })
        //                         });
        default:
            return state;
    }
}

// 新增爬虫源reducer
export function addCrawlerSourceReducer(state = [], action) {
    switch (action.type) {
        case ADD_CRAWLER_SOURCE_REQUEST:
            return Object.assign({}, state, 
                                {isCreating: true});
        case ADD_CRAWLER_SOURCE_SUCCESS:
            return Object.assign({}, state,
                                {isCreating: false},
                                {status: action.status});
        case ADD_CRAWLER_SOURCE_FAILURE:
            return Object.assign({}, state, 
                                {isCreating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 删除爬虫源reducer
export function deleteCrawlerSourceReducer(state = [], action) {
    switch (action.type) {
        case DELETE_CRAWLER_SOURCE_REQUEST:
            return Object.assign({}, state,
                                {isDeleting: true});
        case DELETE_CRAWLER_SOURCE_SUCCESS:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status});
        case DELETE_CRAWLER_SOURCE_FAILURE:
            return Object.assign({}, state,
                                {isDeleting: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}

// 更新爬虫源reducer
export function updateCrawlerSourceReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_CRAWLER_SOURCE_REQUEST:
            return Object.assign({}, state,
                                {isUpdating: true});
        case UPDATE_CRAWLER_SOURCE_SUCCESS:
            return Object.assign({}, state,
                                {isUpdating: false},
                                {status: action.status});
        case UPDATE_CRAWLER_SOURCE_FAILURE:
            return Object.assign({}, state, 
                                {isUpdating: false},
                                {status: action.status},
                                {error: action.error});
        default:
            return state;
    }
}
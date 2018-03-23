import { combineReducers } from 'redux'
import { 
        getAllCrawlerSourceReducer,
        addCrawlerSourceReducer,
        deleteCrawlerSourceReducer,
        updateCrawlerSourceReducer
    } from './CrawlerSourceReducer';
import { 
    getAllCrawlerCategoryReducer,
    addCrawlerCategoryReducer,
    deleteCrawlerCategoryReducer,
    updateCrawlerCategoryReducer,
} from './CrawlerCategoryReducer';

const RootReducer = combineReducers({
    // 爬虫相关reducer,每个reducer分配一个key，以便从state(store)中获取数据的时候通过key获取
    getCrawlerSource: getAllCrawlerSourceReducer,
    addCrawlerSource: addCrawlerSourceReducer,
    deleteCrawlerSource: deleteCrawlerSourceReducer,
    updateCrawlerSource: updateCrawlerSourceReducer,
    getCrawlerCategory: getAllCrawlerCategoryReducer,
    addCrawlerCategory: addCrawlerCategoryReducer,
    deleteCrawlerCategory: deleteCrawlerCategoryReducer,
    updateCrawlerCategory: updateCrawlerCategoryReducer,
});
// 顶层 reducer
export default RootReducer
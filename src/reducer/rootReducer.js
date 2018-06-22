import { combineReducers } from 'redux';
import {
    routerReducer
  } from "react-router-redux";
import {
    getMetaReducer,
    updateScreenReducer
} from './MetaReducer';
import { 
    getAllCrawlerSourceReducer,
    addCrawlerSourceReducer,
    deleteCrawlerSourceReducer,
    updateCrawlerSourceReducer,
    changeCrawlerSourceFiltrateReducer
    } from './CrawlerSourceReducer';
import { 
    getAllCrawlerCategoryReducer,
    addCrawlerCategoryReducer,
    deleteCrawlerCategoryReducer,
    updateCrawlerCategoryReducer,
    changeCrawlerCategoryFiltrateReducer
} from './CrawlerCategoryReducer';
import { 
    getAllCrawlerManagementReducer,
    addCrawlerManagementReducer,
    deleteCrawlerManagementReducer,
    updateCrawlerManagementReducer,
    changeCrawlerManagementFiltrateReducer
} from './CrawlerManagementReducer';
import { 
    getAllCrawlerUserAgentReducer,
    addCrawlerUserAgentReducer,
    deleteCrawlerUserAgentReducer,
    updateCrawlerUserAgentReducer,
    changeCrawlerUserAgentFiltrateReducer
} from './CrawlerUserAgentReducer';
import { 
    getAllCrawlerDynamicIpReducer,
    addCrawlerDynamicIpReducer,
    deleteCrawlerDynamicIpReducer,
    updateCrawlerDynamicIpReducer,
    changeCrawlerDynamicIpFiltrateReducer
} from './CrawlerDynamicIpReducer';

import { 
    getAllCrawlerSetReducer,
    addCrawlerSetReducer,
    deleteCrawlerSetReducer,
    updateCrawlerSetReducer,
    changeCrawlerSetFiltrateReducer
} from './CrawlerSetReducer';
import { 
    getAllInformationSourceReducer,
    addInformationSourceReducer,
    deleteInformationSourceReducer,
    updateInformationSourceReducer,
    changeInformationSourceFiltrateReducer
} from './InformationSourceReducer';
import { 
    getAllInformationRepetitionPondReducer,
    cleanInformationRepetitionPondReducer,
    changeInformationRepetitionPondFiltrateReducer
} from './InformationRepetitionPondReducer';
import { 
    getAllInformationRepetitionResultReducer,
    deleteInformationRepetitionResultReducer,
    updateInformationRepetitionResultReducer,
    changeInformationRepetitionResultFiltrateReducer
} from './InformationRepetitionResultReducer';
import { 
    getAllInformationIllegalityPondReducer,
    cleanInformationIllegalityPondReducer,
    changeInformationIllegalityPondFiltrateReducer
} from './InformationIllegalityPondReducer';
import { 
    getAllInformationIllegalityResultReducer,
    deleteInformationIllegalityResultReducer,
    updateInformationIllegalityResultReducer,
    changeInformationIllegalityResultFiltrateReducer
} from './InformationIllegalityResultReducer';
import { 
    getAllInformationIllegalitySetReducer,
    addInformationIllegalitySetReducer,
    deleteInformationIllegalitySetReducer,
    updateInformationIllegalitySetReducer,
    changeInformationIllegalitySetFiltrateReducer
} from './InformationIllegalitySetReducer';
import { 
    getAllInformationWeightSourceReducer,
    deleteInformationWeightSourceReducer,
    updateInformationWeightSourceReducer,
    changeInformationWeightSourceFiltrateReducer
} from './InformationWeightSourceReducer';
import { 
    getAllInformationWeightSortReducer,
    deleteInformationWeightSortReducer,
    updateInformationWeightSortReducer,
    changeInformationWeightSortFiltrateReducer
} from './InformationWeightSortReducer';
import { 
    getAllInformationWeightFiltrateReducer,
    deleteInformationWeightFiltrateReducer,
    updateInformationWeightFiltrateReducer,
    changeInformationWeightFiltrateReducer
} from './InformationWeightFiltrateReducer';
import { 
    getAllInformationWeightSetReducer,
    addInformationWeightSetReducer,
    deleteInformationWeightSetReducer,
    updateInformationWeightSetReducer,
    changeInformationWeightSetFiltrateReducer
} from './InformationWeightSetReducer';
import { 
    getAllInformationOutputListReducer,
    deleteInformationOutputListReducer,
    updateInformationOutputListReducer,
    changeInformationOutputListFiltrateReducer
} from './InformationOutputListReducer';
import { 
    getAllInformationOutputArticleReducer,
    deleteInformationOutputArticleReducer,
    updateInformationOutputArticleReducer,
    changeInformationOutputArticleFiltrateReducer
} from './InformationOutputArticleReducer';
import { 
    getAllInformationCommentReducer,
    deleteInformationCommentReducer,
    changeInformationCommentFiltrateReducer
} from './InformationCommentReducer';
import { 
    getAllUserReducer,
    deleteUserReducer,
    changeUserFiltrateReducer,
    userLoginReducer
} from './UserReducer';

const RootReducer = combineReducers({
    // 每个reducer分配一个key，以便通过key获取state(store)中获取数据
    getMeta: getMetaReducer,
    updateScreen: updateScreenReducer,
    getCrawlerSource: getAllCrawlerSourceReducer,
    addCrawlerSource: addCrawlerSourceReducer,
    deleteCrawlerSource: deleteCrawlerSourceReducer,
    updateCrawlerSource: updateCrawlerSourceReducer,
    changeCrawlerSourceFiltrate: changeCrawlerSourceFiltrateReducer,
    getCrawlerCategory: getAllCrawlerCategoryReducer,
    addCrawlerCategory: addCrawlerCategoryReducer,
    deleteCrawlerCategory: deleteCrawlerCategoryReducer,
    updateCrawlerCategory: updateCrawlerCategoryReducer,
    changeCrawlerCategoryFiltrate: changeCrawlerCategoryFiltrateReducer,
    getCrawlerManagement: getAllCrawlerManagementReducer,
    addCrawlerManagement: addCrawlerManagementReducer,
    deleteCrawlerManagement: deleteCrawlerManagementReducer,
    updateCrawlerManagement: updateCrawlerManagementReducer,
    changeCrawlerManagementFiltrate: changeCrawlerManagementFiltrateReducer,
    getCrawlerUserAgent: getAllCrawlerUserAgentReducer,
    addCrawlerUserAgent: addCrawlerUserAgentReducer,
    deleteCrawlerUserAgent: deleteCrawlerUserAgentReducer,
    updateCrawlerUserAgent: updateCrawlerUserAgentReducer,
    changeCrawlerUserAgentFiltrate: changeCrawlerUserAgentFiltrateReducer,
    getCrawlerDynamicIp: getAllCrawlerDynamicIpReducer,
    addCrawlerDynamicIp: addCrawlerDynamicIpReducer,
    deleteCrawlerDynamicIp: deleteCrawlerDynamicIpReducer,
    updateCrawlerDynamicIp: updateCrawlerDynamicIpReducer,
    changeCrawlerDynamicIpFiltrate: changeCrawlerDynamicIpFiltrateReducer,
    getCrawlerSet: getAllCrawlerSetReducer,
    addCrawlerSet: addCrawlerSetReducer,
    deleteCrawlerSet: deleteCrawlerSetReducer,
    updateCrawlerSet: updateCrawlerSetReducer,
    changeCrawlerSetFiltrate: changeCrawlerSetFiltrateReducer,
    getInformationSource: getAllInformationSourceReducer,
    addInformationSource: addInformationSourceReducer,
    deleteInformationSource: deleteInformationSourceReducer,
    updateInformationSource: updateInformationSourceReducer,
    changeInformationSourceFiltrate: changeInformationSourceFiltrateReducer,
    getInformationRepetitionPond: getAllInformationRepetitionPondReducer,
    cleanInformationRepetitionPond: cleanInformationRepetitionPondReducer,
    changeInformationRepetitionPondFiltrate: changeInformationRepetitionPondFiltrateReducer,
    getInformationRepetitionResult: getAllInformationRepetitionResultReducer,
    deleteInformationRepetitionResult: deleteInformationRepetitionResultReducer,
    updateInformationRepetitionResult: updateInformationRepetitionResultReducer,
    changeInformationRepetitionResultFiltrate: changeInformationRepetitionResultFiltrateReducer,
    getInformationIllegalityPond: getAllInformationIllegalityPondReducer,
    cleanInformationIllegalityPond: cleanInformationIllegalityPondReducer,
    changeInformationIllegalityPondFiltrate: changeInformationIllegalityPondFiltrateReducer,
    getInformationIllegalityResult: getAllInformationIllegalityResultReducer,
    deleteInformationIllegalityResult: deleteInformationIllegalityResultReducer,
    updateInformationIllegalityResult: updateInformationIllegalityResultReducer,
    changeInformationIllegalityResultFiltrate: changeInformationIllegalityResultFiltrateReducer,
    getInformationIllegalitySet: getAllInformationIllegalitySetReducer,
    addInformationIllegalitySet: addInformationIllegalitySetReducer,
    deleteInformationIllegalitySet: deleteInformationIllegalitySetReducer,
    updateInformationIllegalitySet: updateInformationIllegalitySetReducer,
    changeInformationIllegalitySetFiltrate: changeInformationIllegalitySetFiltrateReducer,
    getInformationWeightSource: getAllInformationWeightSourceReducer,
    deleteInformationWeightSource: deleteInformationWeightSourceReducer,
    updateInformationWeightSource: updateInformationWeightSourceReducer,
    changeInformationWeightSourceFiltrate: changeInformationWeightSourceFiltrateReducer,
    getInformationWeightSort: getAllInformationWeightSortReducer,
    deleteInformationWeightSort: deleteInformationWeightSortReducer,
    updateInformationWeightSort: updateInformationWeightSortReducer,
    changeInformationWeightSortFiltrate: changeInformationWeightSortFiltrateReducer,
    getInformationWeightFiltrate: getAllInformationWeightFiltrateReducer,
    deleteInformationWeightFiltrate: deleteInformationWeightFiltrateReducer,
    updateInformationWeightFiltrate: updateInformationWeightFiltrateReducer,
    changeInformationWeightFiltrate: changeInformationWeightFiltrateReducer,
    getInformationWeightSet: getAllInformationWeightSetReducer,
    addInformationWeightSet: addInformationWeightSetReducer,
    deleteInformationWeightSet: deleteInformationWeightSetReducer,
    updateInformationWeightSet: updateInformationWeightSetReducer,
    changeInformationWeightSetFiltrate: changeInformationWeightSetFiltrateReducer,
    getInformationOutputList: getAllInformationOutputListReducer,
    deleteInformationOutputList: deleteInformationOutputListReducer,
    updateInformationOutputList: updateInformationOutputListReducer,
    changeInformationOutputListFiltrate: changeInformationOutputListFiltrateReducer,
    getInformationOutputArticle: getAllInformationOutputArticleReducer,
    deleteInformationOutputArticle: deleteInformationOutputArticleReducer,
    updateInformationOutputArticle: updateInformationOutputArticleReducer,
    changeInformationOutputArticleFiltrate: changeInformationOutputArticleFiltrateReducer,
    getInformationComment: getAllInformationCommentReducer,
    deleteInformationComment: deleteInformationCommentReducer,
    changeInformationCommentFiltrate: changeInformationCommentFiltrateReducer,
    getUser: getAllUserReducer,
    deleteUser: deleteUserReducer,
    changeUserFiltrate: changeUserFiltrateReducer,
    userLoginState: userLoginReducer,
    router: routerReducer
});
// 顶层 reducer
export default RootReducer
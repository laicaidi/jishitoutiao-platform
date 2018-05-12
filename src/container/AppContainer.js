import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  fetchGetMeta,
  updateScreenSize
} from '../action/MetaAction';
import { Layout } from 'antd';
import SiderComponent from '../component/SiderComponent';
import HeaderComponent from '../component/HeaderComponent';
import CrawlerSourceContainer from '../container/CrawlerSourceContainer';
import CrawlerCategoryContainer from '../container/CrawlerCategoryContainer';
import CrawlerManagementContainer from '../container/CrawlerManagementContainer';
import CrawlerUserAgentContainer from '../container/CrawlerUserAgentContainer';
import CrawlerDynamicIpContainer from '../container/CrawlerDynamicIpContainer';
import CrawlerSetContainer from '../container/CrawlerSetContainer';
import InformationSourceContainer from '../container/InformationSourceContainer';
import InformationRepetitionPondContainer from '../container/InformationRepetitionPondContainer';
import InformationRepetitionResultContainer from '../container/InformationRepetitionResultContainer';
import InformationIllegalityPondContainer from '../container/InformationIllegalityPondContainer';
import InformationIllegalityResultContainer from '../container/InformationIllegalityResultContainer';
import InformationIllegalitySetContainer from '../container/InformationIllegalitySetContainer';
import InformationWeightSourceContainer from '../container/InformationWeightSourceContainer';
import InformationWeightSortContainer from '../container/InformationWeightSortContainer';
import InformationWeightFiltrateContainer from '../container/InformationWeightFiltrateContainer';
import InformationWeightSetContainer from '../container/InformationWeightSetContainer';
import InformationOutputListContainer from '../container/InformationOutputListContainer';
import InformationOutputArticleContainer from '../container/InformationOutputArticleContainer';
import InformationCommentContainer from '../container/InformationCommentContainer';
import UserContainer from '../container/UserContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width || -1,     // 整体布局宽
      height: props.height || -1,   // 整体布局高
    }
    // 绑定回调方法
    this.updateSize = this.updateSize.bind(this);
    this.handleGetMeta = this.handleGetMeta.bind(this);
  }

  // -------自动适应屏幕宽高+获取元数据-------
  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', () => this.updateSize());
    this.handleGetMeta();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateSize());
  }
  
  // 自适应屏幕
  updateSize() {
    const { dispatch } = this.props;
    try {
      let { width, height } = this.props;
      // 如果props没有指定height和width就自适应
      if (!width) {
        width = document.body.clientWidth;
      }
      if (!height) {
        height = document.body.clientHeight;
      }
      this.setState({
        width,
        height
      });
      // 将宽高通过action保存至store中，以便其他组件使用
      dispatch(updateScreenSize(width, height));
    } catch(ignore) {
    }
  }

  // 获取所有元数据
  handleGetMeta() {
    const { dispatch } = this.props;
    dispatch(fetchGetMeta());
  }
 
  render() {
    return (
      <Router>
        <Layout style={ {width: this.state.width, height: this.state.height} }>
          <HeaderComponent />
          <Layout style={ {minHeight: 663} }>    
            <SiderComponent />
            <Switch>
              <Route path='/crawlersource' exact component={ CrawlerSourceContainer } />
              <Route path='/crawlercategory' exact component={ CrawlerCategoryContainer } />
              <Route path='/crawlermanagement' exact component={ CrawlerManagementContainer } />
              <Route path='/crawleruseragent' exact component={ CrawlerUserAgentContainer } />
              <Route path='/crawlerdynamicip' exact component={ CrawlerDynamicIpContainer } />
              <Route path='/crawlerset' exact component={ CrawlerSetContainer } />
              <Route path='/informationsource' exact component={ InformationSourceContainer } />
              <Route path='/informationrepetitionpond' exact component={ InformationRepetitionPondContainer } />
              <Route path='/informationrepetitionresult' exact component={ InformationRepetitionResultContainer } />
              <Route path='/informationillegalitypond' exact component={ InformationIllegalityPondContainer } />
              <Route path='/informationillegalityresult' exact component={ InformationIllegalityResultContainer } />
              <Route path='/informationillegalityset' exact component={ InformationIllegalitySetContainer } />
              <Route path='/informationweightsource' exact component={ InformationWeightSourceContainer } />
              <Route path='/informationweightsort' exact component={ InformationWeightSortContainer } />
              <Route path='/informationweightfiltrate' exact component={ InformationWeightFiltrateContainer } />
              <Route path='/informationweightset' exact component={ InformationWeightSetContainer } />
              <Route path='/informationoutputlist' exact component={ InformationOutputListContainer } />
              <Route path='/informationoutputarticle' exact component={ InformationOutputArticleContainer } />
              <Route path='/informationcomment' exact component={ InformationCommentContainer } />
              <Route path='/user' exact component={ UserContainer } />
              {/* <Route path='/' component={ CrawlerSourceContainer } /> */}
            </Switch>
          </Layout>      
        </Layout>
      </Router>
    );
  }
}

// 对属性进行限定
App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

// 从state中注入数据
function mapStateToProps(state) {
  return {
    isFetching: state.getMeta.isFetching,   // 获取元数据加载态
    status: state.getMeta.status,   // 获取元数据结果
    menu: state.getMeta.menu,   // 菜单元数据
  }
}

export default connect(mapStateToProps)(App);
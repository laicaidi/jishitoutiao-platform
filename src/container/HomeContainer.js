import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect
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

class HomeContainer extends Component {
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

  // -------登录鉴权 + 自动适应屏幕宽高 + 获取元数据-------
  componentWillMount() {
    this.mounted = true;
    const { auth } = this.props;
    console.log("HomeContainer auth: " + auth);
    for (let key in auth) {
      if (key === "passport") {
        var passport = auth[key];   // 用户登录状态
      }
    }

    if (!passport) {   // 未登录
      this.props.history.push("/login");    // 跳转至登录页
    } else {
      this.handleGetMeta();
    }
  }

  componentDidMount() {
    if (this.mounted) {
      this.updateSize();
      window.addEventListener('resize', () => this.updateSize());
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateSize());
    this.mounted = false;
    // 重写组件的setState方法，直接返回空，避免”Can only update a mounted or mounting component“异常
    this.setState = (state,callback)=>{
      return;
    }; 
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
              <Route path='/crawlersource' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <CrawlerSourceContainer />
                }
              } } />

              <Route path='/crawlercategory' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <CrawlerCategoryContainer />
                }
              } } />

              <Route path='/crawlermanagement' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <CrawlerManagementContainer />
                }
              } } />

              <Route path='/crawleruseragent' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <CrawlerUserAgentContainer />
                }
              } } />

              <Route path='/crawlerdynamicip' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <CrawlerDynamicIpContainer />
                }
              } } />

              <Route path='/crawlerset' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <CrawlerSetContainer />
                }
              } } />

              <Route path='/informationsource' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationSourceContainer />
                }
              } } />

              <Route path='/informationrepetitionpond' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationRepetitionPondContainer />
                }
              } } />

              <Route path='/informationrepetitionresult' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationRepetitionResultContainer />
                }
              } } />

              <Route path='/informationillegalitypond' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationIllegalityPondContainer />
                }
              } } />

              <Route path='/informationillegalityresult' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationIllegalityResultContainer />
                }
              } } />

              <Route path='/informationillegalityset' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationIllegalitySetContainer />
                }
              } } />

              <Route path='/informationweightsource' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationWeightSourceContainer />
                }
              } } />

              <Route path='/informationweightsort' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationWeightSortContainer />
                }
              } } />

              <Route path='/informationweightfiltrate' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationWeightFiltrateContainer />
                }
              } } />

              <Route path='/informationweightset' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationWeightSetContainer />
                }
              } } />

              <Route path='/informationoutputlist' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationOutputListContainer />
                }
              } } />

              <Route path='/informationoutputarticle' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationOutputArticleContainer />
                }
              } } />

              <Route path='/informationcomment' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <InformationCommentContainer />
                }
              } } />

              <Route path='/user' exact render={ () => {
                const { auth } = this.props;
                for (let key in auth) {
                  if (key === "passport") {
                    var passport = auth[key];   // 用户登录状态
                  }
                }     
                if (!passport) {   // 未登录
                  return <Redirect to="/login" />
                } else {
                  return <UserContainer />
                }
              } } />
            </Switch>
          </Layout>      
        </Layout>
      </Router>
    );
  }
}

// 对属性进行限定
HomeContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

// 从state中注入数据
function mapStateToProps(state) {
  return {
    isFetching: state.getMeta.isFetching,   // 获取元数据加载态
    status: state.getMeta.status,   // 获取元数据结果
    menu: state.getMeta.menu,   // 菜单元数据
    auth: state.userLoginState.auth    // 用户(登录)状态
  }
}

export default withRouter(connect(mapStateToProps)(HomeContainer));   // withRouter高阶组件，提供了history供组件使用
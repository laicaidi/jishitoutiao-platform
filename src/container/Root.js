import React, { Component } from 'react';  // react核心，用到jsx的地方，都需要这个
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import 'moment/locale/zh-cn';
import {
    Router,
    Route,
    Switch
  } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import LoginContainer from './LoginContainer';
import { history } from '../store/ConfigureStore';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
//import zhCN from 'antd/lib/locale-provider/zh_CN';
moment.locale('zh-cn');

class Root extends Component {
    render() {
        return (
            <Router history={ history }>
                <Switch>
                    <Route path='/home' exact component={ HomeContainer } />
                    <Route path='/login' exact component={ LoginContainer } />
                    <Route path='/' exact component={ LoginContainer } />
                </Switch>
            </Router>
        )
    }
}


// 对属性进行限定
Root.propTypes = {
    dispatch: PropTypes.func.isRequired
  }

// 从state中注入数据
function mapStateToProps(state) {
    return {
      auth: state.userLoginState.auth    // 用户(登录)状态
    }
  }
  
export default connect(mapStateToProps)(Root);   // withRouter高阶组件，提供了history供组件使用

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
    constructor(props) {
        super(props);
        this.state = {
          width: props.width || -1,     // 整体布局宽
          height: props.height || -1,   // 整体布局高
        }
        // 绑定回调方法
        this.updateSize = this.updateSize.bind(this);
    }

    componentDidMount() {
        this.updateSize();
        window.addEventListener('resize', () => this.updateSize());
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.updateSize());
    }
    
    // 自适应屏幕
    updateSize() {
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
        } catch(ignore) {
        }
    }

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

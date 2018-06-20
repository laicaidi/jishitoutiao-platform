import React, { Component } from 'react';  // react核心，用到jsx的地方，都需要这个
import { Provider } from 'react-redux';  // react和redux连接的桥梁，就是这个Provider
import moment from 'moment';
import 'moment/locale/zh-cn';
import ConfigureStore from '../store/ConfigureStore';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import LoginContainer from './LoginContainer';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
//import zhCN from 'antd/lib/locale-provider/zh_CN';
moment.locale('zh-cn');

const store = ConfigureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Router>
                    <Switch>
                        <Route path='/home' component={ HomeContainer } />
                        <Route path='/login' component={ LoginContainer } />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

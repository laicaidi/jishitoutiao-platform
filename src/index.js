import 'babel-polyfill';
import './css/index.less';
import React from 'react';  // react核心，用到jsx的地方，都需要这个
import ReactDOM from 'react-dom';   // 渲染组件时需要
import Root from './container/Root';
import ConfigureStore from './store/ConfigureStore';
import { Provider } from 'react-redux';   // react和redux连接的桥梁，就是这个Provider
import registerServiceWorker from './registerServiceWorker';

let rootElement = document.getElementById('root');

var store = ConfigureStore();

ReactDOM.render(
    <Provider store={ store }>
        <Root />
    </Provider>,
    rootElement
);
// registerServiceWorker();
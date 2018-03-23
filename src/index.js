import 'babel-polyfill';
import './css/index.less';
import React from 'react';  // react核心，用到jsx的地方，都需要这个
import ReactDOM from 'react-dom';   // 渲染组件时需要
import Root from './container/Root';
import registerServiceWorker from './registerServiceWorker';

let rootElement = document.getElementById('root');

ReactDOM.render(
    <Root />,
    rootElement
);
registerServiceWorker();
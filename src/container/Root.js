import React, { Component } from 'react';  // react核心，用到jsx的地方，都需要这个
import { Provider } from 'react-redux';  // react和redux连接的桥梁，就是这个Provider
import ConfigureStore from '../store/ConfigureStore';
import App from './App';

const store = ConfigureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={ store }>
                <App />
            </Provider>
        )
    }
}
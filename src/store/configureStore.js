import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {
    routerMiddleware,
  } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import RootReducer from '../reducer/RootReducer';

export const history = createHistory();
const routerReduxMiddleware = routerMiddleware(history);

const loggerMiddleware = createLogger();

export default function ConfigureStore(preloadedState) {
    return createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            routerReduxMiddleware,
            loggerMiddleware
        )
    )
}
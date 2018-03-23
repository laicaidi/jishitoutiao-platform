import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import RootReducer from '../reducer/RootReducer';

const loggerMiddleware = createLogger();

export default function ConfigureStore(preloadedState) {
    return createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}
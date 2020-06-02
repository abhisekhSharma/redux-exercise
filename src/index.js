import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})
const logger = (store) => {
    return next => {
        return action => {
            // console.log('Middleware dispatching', action);
            const result = next(action);
            // console.log('middleware NextState', store.getState());
            return result;
        }
    }
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer, /* preloadedState, */
    compose(
        applyMiddleware(logger, thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
/* eslint-enable */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

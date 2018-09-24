import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk';

import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware, reduxThunk));
const store = createStore(reducer, enhancer);

export default store;

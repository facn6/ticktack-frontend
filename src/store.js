import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import api from '@/helpers/api';
import cookies from '@/helpers/cookies';
import { quickReduxEnhanceStore } from '@/helpers/redux';
import { reduxConnectError } from '@/helpers/redux/middleware';

import reducer, { modules } from '@/reducers';

let initialState     = {};
let composeEnhancers = compose;

if (typeof window !== 'undefined') {
    initialState     = window.__INITIAL_STATE__ || initialState;
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
}

const middleware = [reduxConnectError];

const enhancers = composeEnhancers(applyMiddleware(...middleware));
const store     = createStore(reducer, initialState, enhancers);
const persistor = persistStore(store);

quickReduxEnhanceStore(store, modules, { api, cookies });

export default store;
export { persistor };

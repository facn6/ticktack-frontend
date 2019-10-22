import localforage from 'localforage';
import { createReducers } from 'quick-redux';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { persistReducer } from 'redux-persist';
import coreReducer from '@/modules/core/reducer';

const persistConfig = {
    key: 'root',
    storage: localforage,
    whitelist: [],
};

const modules = {
    core: coreReducer,
};

const reducers = {
    reduxAsyncConnect,
    routing,
};

const rootReducer = combineReducers({
    ...createReducers(modules),
    ...reducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
export { modules };

import { getActions } from 'quick-redux';

export default function quickReduxEnhanceStore(store, modules, asyncArgs = {}) {
    const actions = getActions(modules, store, asyncArgs);

    store.actions = actions;

    return store;
}

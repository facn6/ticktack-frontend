import React from 'react';
import { getLoadableState } from 'loadable-components/server';
import { renderToString } from 'react-dom/server';
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { match, createMemoryHistory as createHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import serialize from 'serialize-javascript';

import getRoutes from '@/routes';
import configureStore from '@/helpers/redux/configureStore';

export default function reactApplication(req, res) {
    const url = req.originalUrl || req.url;

    const history = createHistory(url);
    const store = configureStore(history, req);
    const storeHistory = syncHistoryWithStore(history, store);
    const routes = getRoutes(store, storeHistory);

    if (process.env.DISABLE_SSR === true) {
        hydrateOnClient();
        return;
    }

    match({ history, routes, location: url }, (error, redirect, props) => {
        if (redirect) {
            handleRedirect(redirect);
        } else if (error) {
            handleError(error);
        } else if (props) {
            handleRender(props);
        } else {
            res.status(404).send('Not found');
        }
    });

    function handleError(error) {
        console.error('ROUTER ERROR:', error);

        res.set('Cache-Control', 'no-store');
        res.status(500);

        hydrateOnClient();
    }

    function handleRedirect(redirect) {
        res.redirect(redirect.pathname + redirect.search);
    }

    function handleRender(props) {
        const AppComponent = (
            <Provider store={store} key="provider">
                <ReduxAsyncConnect {...props} />
            </Provider>
        );

        loadOnServer({ ...props, store }).then(() => {
            getLoadableState(AppComponent).then((loadableState) => {
                const app = renderToString(AppComponent);
                const head = Helmet.renderStatic();
                const initialStateTag = getInitialStateScriptTag(store);
                const loadableStateTag = loadableState.getScriptTag();

                res.status(200);
                res.set('Cache-Control', 'no-store');
                res.render('index', { app, head, initialStateTag, loadableStateTag });
            });
        });
    }

    function hydrateOnClient() {
        const app = '';
        const head = Helmet.renderStatic();
        const initialStateTag = '';
        const loadableStateTag = '';

        res.status(200);
        res.set('Cache-Control', 'no-store');
        res.render('index', { app, head, initialStateTag, loadableStateTag });
    }
}

function getInitialStateScriptTag(store) {
    const state = store.getState();
    const serialized = serialize(state);

    return `<script>window.__INITIAL_STATE__ = ${serialized}</script>`;
}

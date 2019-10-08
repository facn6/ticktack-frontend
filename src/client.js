import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, applyRouterMiddleware, browserHistory as history } from 'react-router';

import { useReduxConnect, useScroll } from '@/helpers/router';
import Initialize from '@/modules/core/components/Initialize';

import '@/main';

import routes from '@/routes';
import store from '@/store';

render();

function render() {
    hydrate(
        <Initialize store={store}>
            <Provider store={store}>
                <Router render={applyRouterMiddleware(useScroll(), useReduxConnect())} history={history}>
                    {routes}
                </Router>
            </Provider>
        </Initialize>,
        document.getElementById('react-view'),
    );
}

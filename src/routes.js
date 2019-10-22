import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { RouterMiddleware } from '@/helpers/router/middleware';

import App from '@/modules/core/components/App';
import { Error, Home, Ticket, NotFound, Artist } from '@/modules/core/pages';

const middleware = new RouterMiddleware();

const routes = (
    <Route onEnter={middleware.onEnter} onChange={middleware.onChange}>
        <Route path="error" component={Error} />
        <Route path="/" component={App}>
            <IndexRoute label="Home" component={Home} />
            <Route path="/tickets" component={Ticket} />
              <Route path="/Artist" component={Artist} />
            <Route path="*" component={NotFound} status={404} />
        </Route>
    </Route>
);

export default routes;
export { middleware };

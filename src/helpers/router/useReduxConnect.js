import { isEqual } from 'lodash-es';
import React from 'react';
import { ReduxAsyncConnect } from 'redux-connect';

export default function useReduxConnect() {
    return {
        renderRouterContext: (previous, props) => {
            return <ReduxAsyncConnect {...props} reloadOnPropsChange={reloadOnPropsChange} render={() => previous} />;
        },
    };
}

function reloadOnPropsChange(props, nextProps) {
    const { location, params } = props;
    const { location: nextLocation, params: nextParams } = nextProps;

    return !(isEqual(location.pathname, nextLocation.pathname) && isEqual(params, nextParams) && isEqual(location.query, nextLocation.query));
}

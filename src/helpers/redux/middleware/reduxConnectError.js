import { browserHistory as history } from 'react-router';

export default () => (next) => (action) => {
    const { type, payload } = action;

    if (type === '@redux-conn/LOAD_FAIL') {
        history.replace('error');

        if (process.env.NODE_ENV === 'development') {
            console.error(payload.error);
        }
    }

    return next(action);
};

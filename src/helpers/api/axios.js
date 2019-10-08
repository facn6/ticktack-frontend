import axios from 'axios';
import { omitBy } from 'lodash-es';

import config from '@/config';

const instance = axios.create({
    baseURL: config.api.baseUrl,
    transformRequest: [
        (data, headers) => {
            headers['Content-Type'] = 'application/json;charset=UTF-8';

            data = omitBy(data, (value) => {
                return (typeof value === 'undefined') || (value === null) || (value === '');
            });

            return JSON.stringify(data);
        },
    ],
});

export default instance;

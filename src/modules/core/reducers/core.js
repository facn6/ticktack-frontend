import { keyBy } from 'lodash-es';

const sessionReducer = {
    key: 'core',
    defaultState: {
        currencies: [],
        currenciesIndex: {},
        initialized: false,
    },
    actions: {
        setCurrencies(state, currencies) {
            state.currencies = currencies;
            state.currenciesIndex = keyBy(currencies, 'code');
        },
        setInitialized(state, status) {
            state.initialized = status;
        },
    },
    asyncActions: {
        async fetchCurrencies({ actions, api }) {
            const currencies = await api.fetchCurrencies();

            actions.setCurrencies(currencies);

            return currencies;
        },
    },
};

export default sessionReducer;

export default {
    key: 'core',
    defaultState: {
        eventTickets: [],
    },
    actions: {
        setEventTickets(state, tickets) {
            state.eventTickets = tickets;
        },
    },
};

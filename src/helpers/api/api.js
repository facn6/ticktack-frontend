import modifiedInstance from './axios';

class API {

    constructor(instance) {
        this.axios = instance;
        this.get = instance.get;
        this.post = instance.post;
    }

    async fetchTickets() {
        try {

            const response = await this.get('/tickets');
            return response.data;

        } catch (err) {
            return { fail: true, err };
        }
    }


}

export default new API(modifiedInstance);

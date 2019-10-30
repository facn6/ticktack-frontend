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

    async fetchEvents() {
        try {
            const response = await this.get('/events');
            return response.data;
        } catch (err) {
            return { fail: true, err };
        }
    }

    async fetchArtists() {
        try {
            const response = await this.get('/artists');
            return response.data;
        } catch (err) {
            return { fail: true, err };
        }
    }

    async SendEmailAdress(mail) {
        try {

            const response = await this.post('/sendEmail', {
                mail,
            });
            return response.data;

        } catch (err) {
            return { fail: true, err };
        }

    }


}

export default new API(modifiedInstance);

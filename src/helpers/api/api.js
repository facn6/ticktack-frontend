import axios from './axios';

class API {

    constructor() {
        this.axios = axios;

        this.get  = axios.get;
        this.post = axios.post;
    }

}

export default new API();

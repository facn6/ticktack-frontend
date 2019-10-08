export default class RouterMiddleware {

    constructor() {
        this.stack = [];
    }

    onChange = (prevState, nextState, replace, callback) => {
        this.run(prevState, nextState, replace, callback);
    }

    onEnter = (nextState, replace, callback) => {
        this.run(null, nextState, replace, callback);
    }

    use(fn) {
        this.stack.push(fn);
    }

    run(prevState, nextState, replace, callback) {
        let index = 0;

        while (index < this.stack.length) {
            this.stack[index](prevState, nextState, replace, next);
        }

        callback();

        function next() {
            index += 1;
        }
    }

}

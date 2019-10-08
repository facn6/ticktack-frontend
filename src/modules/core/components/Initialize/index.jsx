import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Initialize extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            initialized: false,
        };
    }

    componentWillMount() {
        this.initialize();
    }

    async initialize() {
        this.setState({ initialized: true });
    }

    render() {
        const { children } = this.props;
        const { initialized } = this.state;

        if (!initialized) {
            return null;
        }

        return children;
    }

}

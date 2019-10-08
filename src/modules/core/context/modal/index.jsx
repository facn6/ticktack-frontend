import React, { Component, createContext } from 'react';

const ModalContext = createContext({
    component : null,
    props     : null,
    show      : () => null,
    hid       : () => null,
});

export const ModalConsumer = ModalContext.Consumer;

export class ModalProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            component : null,
            props     : null,
            show      : this.show,
            hide      : this.hide,
        };
    }

    show = (component, props = {}) => {
        this.setState({ component, props });
    }

    hide = () => {
        this.setState({ component: null, props: null });
    }

    render() {
        return (
            <ModalContext.Provider value={this.state}>
                {this.props.children}
            </ModalContext.Provider>
        );
    }

}

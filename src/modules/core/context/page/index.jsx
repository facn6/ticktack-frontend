import React, { Component, createContext } from 'react';

const PageContext = createContext({
    showBanner: false,
    showBreadcrumbs: false,
    showSearch: false,
    setOptions: () => null,
});

export const PageConsumer = PageContext.Consumer;

export class PageProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showBanner: false,
            showBreadcrumbs: false,
            showSearch: false,
            setOptions: this.setOptions,
        };
    }

    setOptions = ({ showBanner = false, showBreadcrumbs = false, showSearch = false }) => {
        this.setState({ showBanner, showBreadcrumbs, showSearch });
    }

    render() {
        return (
            <PageContext.Provider value={this.state}>
                {this.props.children}
            </PageContext.Provider>
        );
    }

}

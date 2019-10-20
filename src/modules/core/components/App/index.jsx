import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import Navbar from '@/modules/common/components/Navbar';
import Footer from '@/modules/common/components/Footer';
import config from '@/config';

import { ModalProvider } from '@/modules/core/context/modal';
import AppModal from '@/modules/core/components/AppModal';

import './styles.scss';

class App extends Component {

    render() {
        const { children } = this.props;

        return (
            <div styleName="main">
                <Helmet {...config.helmet} />
                <ModalProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <AppModal />
                </ModalProvider>
            </div>
        );
    }

}

export default hot(module)(App);

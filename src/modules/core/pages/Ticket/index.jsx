import React, { PureComponent } from 'react';
import Banner from '@/modules/common/components/Banner';
import DetailsArtistContainer from '@/modules/common/components/DetailsArtistContainer';
import './style.scss';

export default class Ticket extends PureComponent {

    render() {
        return (
            <div styleName="ticket-page">
                <Banner />

                <DetailsArtistContainer />
            </div>
        );
    }

}

import React, { PureComponent } from 'react';
import Banner from '@/modules/common/components/Banner';
import DetailsArtistContainer from '@/modules/common/components/DetailsArtistContainer';
import ImageZoomer from '@/modules/common/components/ImageZoomer';
import TicketDetails from '@/modules/common/components/TicketDetails';
import './style.scss';


export default class Ticket extends PureComponent {

    render() {
        return (
            <div styleName="ticket-page">
                <Banner />
                <DetailsArtistContainer />
                <p styleName="ticket-detail">פרטי כרטיסים</p>
                <ImageZoomer />
                <TicketDetails />
            </div>
        );
    }

}

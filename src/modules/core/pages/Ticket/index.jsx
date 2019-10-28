import React, { PureComponent } from 'react';
import Banner from '@/modules/common/components/Banner';
import DetailsArtistContainer from '@/modules/common/components/DetailsArtistContainer';
import ImageZoomer from '@/modules/common/components/ImageZoomer';
import TicketDetails from '@/modules/common/components/TicketDetails';
import TicketTypeList from '@/modules/common/components/TicketTypeList';
import TicketDateList from '@/modules/common/components/TicketDateList';

import './style.scss';


export default class Ticket extends PureComponent {

    render() {
        return (
            <div styleName="ticket-page">
                <Banner />
                <DetailsArtistContainer />
                <p styleName="ticket-detail">פרטי כרטיסים</p>
                <ImageZoomer />
                <TicketTypeList />
                <TicketTypeList />
                <TicketTypeList />
                <TicketTypeList />
                <p styleName="event-title">כל האירועים של אן מארי</p>
                <div styleName="ticket-events">
                    <TicketDateList />
                    <TicketDateList />
                    <TicketDateList />
                    <TicketDetails />
                </div>

            </div>

        );
    }

}

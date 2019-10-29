import React, { PureComponent } from 'react';
import { asyncConnect } from 'redux-connect';
import { connect } from 'quick-redux';
import api from '@/helpers/api';
import Banner from '@/modules/common/components/Banner';
import SaleNavbar from '@/modules/common/components/SaleNavbar';
import EventCard from '@/modules/common/components/EventCard';
import ArtistCard from '@/modules/common/components/ArtistCard';
import SportCard from '@/modules/common/components/SportCard';
import './style.scss';

@asyncConnect([
    {
        key: 'tickets',
        promise: async () => {
            const res = await api.fetchTickets();
            console.log('res ', res);

            if (res.fail) {
                return [];
            }
            return res;
        },
    },
])
@connect((state, ownProps, actions) => ({
    actions: {
        setEventTickets: actions.core.setEventTickets,
    },
}))
class Sales extends PureComponent {

    componentDidMount() {
        const { actions, tickets } = this.props;

        // adds the event tickets to redux, in case
        // we need to use them somewhere else
        actions.setEventTickets(tickets);

    }


    render() {
        const { tickets } = this.props;
        return (
            <div>
                <Banner />
                <SaleNavbar />
                <SportCard />
                <EventCard event={tickets[0]} />
                <ArtistCard />
                <a href="/events" styleName="a-sales">לעוד מבצעים>></a>
                <Banner />
                <p styleName="last-event-label">חבילות או אירועים שמשתמשים צפו לאחרונה</p>
                {tickets.map((item) => (
                    <EventCard event={item} />
                ))}
            </div>
        );
    }

}
export default Sales;

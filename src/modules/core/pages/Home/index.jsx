import React, { PureComponent } from 'react';
import { asyncConnect } from 'redux-connect';
import { connect } from 'quick-redux';
import api from '@/helpers/api';
import BannerWithButton from '@/modules/common/components/BannerWithButton';
import RotatingCube from '@/modules/common/components/RotatingCube';
import EventCard from '@/modules/common/components/EventCard';
import Banner from '@/modules/common/components/Banner';

import Slider from '@/modules/common/components/Slider';
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

class Home extends PureComponent {

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
                <BannerWithButton />
                <Slider />
                <Banner />
                <RotatingCube />
                <Banner />
                <p styleName="last-event-label">חבילות או אירועים שמשתמשים צפו לאחרונה</p>
                {tickets.map((item) => (
                    <EventCard event={item} />
                ))}
            </div>


        );
    }

}
export default Home;

import React, { PureComponent } from 'react';
import Banner from '@/modules/common/components/Banner';
import Slider from '@/modules/common/components/Slider';
import MiniEventCard from '@/modules/common/components/MiniEventCard';
import NavSlider from '@/modules/common/components/NavSlider';

import './style.scss';


export default class Events extends PureComponent {

    render() {
        return (
            <div styleName="events-page">
                <Banner />
                <Slider />
                <Banner />
                <MiniEventCard />
                <MiniEventCard />
                <MiniEventCard />
                <MiniEventCard />
                <p styleName="last-event-label">חבילות או אירועים שמשתמשים צפו לאחרונה</p>
                <NavSlider />


            </div>
        );
    }

}

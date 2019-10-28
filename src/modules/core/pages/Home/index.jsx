import React, { PureComponent } from 'react';
import BannerWithButton from '@/modules/common/components/BannerWithButton';
import RotatingCube from '@/modules/common/components/RotatingCube';
import EventCard from '@/modules/common/components/EventCard';
import Banner from '@/modules/common/components/Banner';
import Slider from '@/modules/common/components/Slider';
import './style.scss';

export default class Home extends PureComponent {

    render() {
        console.log(this.props.modal);
        return (
            <div>
                <BannerWithButton />
                <Slider kira={120} />
                <Banner />
                <RotatingCube />
                <Banner />
                <p styleName="last-event-label">חבילות או אירועים שמשתמשים צפו לאחרונה</p>
                <EventCard />
                <EventCard />
                <EventCard />
            </div>


        );
    }

}

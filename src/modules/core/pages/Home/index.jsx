import React, { PureComponent } from 'react';

import Banner from '@/modules/common/components/Banner';
import RotatingCube from '@/modules/common/components/RotatingCube';
import EventCard from '@/modules/common/components/EventCard';

import Slider from '@/modules/common/components/Slider';


export default class Home extends PureComponent {

    render() {
        return (
            <div>
                <Banner />
                <Slider />
                <RotatingCube />
                <div style={{ margin: '50px 0px' }}>

                    <EventCard />
                    <EventCard />

                    <EventCard />
                </div>


            </div>
        );
    }

}

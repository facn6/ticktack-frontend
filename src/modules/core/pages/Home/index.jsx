import React, { PureComponent } from 'react';
import Banner from '@/modules/common/components/Banner';
import RotatingCube from '@/modules/common/components/RotatingCube';
import EventCard from '@/modules/common/components/EventCard';

export default class Home extends PureComponent {

    render() {
        return (
            <div>
                <Banner />
                <RotatingCube />
                <EventCard />
            </div>
        );
    }

}

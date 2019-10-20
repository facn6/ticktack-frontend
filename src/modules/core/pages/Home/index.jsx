import React, { PureComponent } from 'react';

import Banner from '@/modules/common/components/Banner';
import RotatingCube from '@/modules/common/components/RotatingCube';
import Slider from '@/modules/common/components/Slider';

export default class Home extends PureComponent {

    render() {
        return (
            <div>
                <Banner />
            <Slider />
                <RotatingCube />
            </div>
        );
    }



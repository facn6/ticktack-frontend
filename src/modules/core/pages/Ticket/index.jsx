import React, { PureComponent } from 'react';
import Banner from '@/modules/common/components/Banner';
import NavSlider from '@/modules/common/components/NavSlider';
import './style.scss';

export default class Ticket extends PureComponent {
    render() {
        return (
            <div>
                <div styleName="top-banner">
                    <Banner />
                </div>
                <NavSlider />
            </div>
        );
    }
}

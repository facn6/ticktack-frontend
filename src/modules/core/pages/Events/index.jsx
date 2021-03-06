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
                <Banner title="הופעות חמים" subtitle="הוא פשוט טקסט גולמי של תעשיית וההקלדה" img={require('@/assets/images/concert.jpg')}/>
              <div styleName="slider">  <Slider /></div>
                <Banner title="באנר פרסומי" subtitle="הוא פשוט טקסט גולמי של תעשיית וההקלדה" img={require('@/assets/images/barca-real.jpg')} />
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

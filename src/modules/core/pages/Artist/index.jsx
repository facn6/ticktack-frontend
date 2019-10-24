import React, { PureComponent } from 'react';
import Banner from '@/modules/common/components/Banner';
import Slider from '@/modules/common/components/Slider';
import EventsList from '@/modules/common/components/EventsList';
<<<<<<< HEAD
import HotDestinations from '@/modules/common/components/HotDestinations';
=======
>>>>>>> abb1d3c96fe98371103aa98d94ff662601371756

// import { withModal } from '@/modules/core/hoc/withModal';
import './style.scss';

 export default class Artist extends PureComponent {
    render() {
      console.log(this.props.modal);
        return (
            <div styleName="background">
                <Banner />

                <h1 styleName="title">אן מארי</h1>
                <h3 styleName="subtitle">כולכם מוזמנים לקונצרטים</h3>
                  <h3 styleName="subtitle">באווירה קצת אחרת!</h3>
              <Slider />
                  <p styleName="describtion">היא השתלטה על כל פלייליסט אפשרי עם השיר .. בשנה שעברה וכעת מוכיחה לנו שהיא הרבה יותר אישה עם להיט אחד</p>
<<<<<<< HEAD
                  <HotDestinations />
                  <div style={{ marginBottom:'30px' }}>
                    <h1 styleName="title">כל האירועים של אן מארי</h1>
                  <EventsList />
                  <EventsList />
                  <EventsList />
                  <EventsList />

                  </div>

=======
                  <EventsList />
>>>>>>> abb1d3c96fe98371103aa98d94ff662601371756
            </div>
        );
    }
  }

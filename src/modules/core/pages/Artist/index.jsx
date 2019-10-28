import React, { PureComponent } from 'react';
import Banner from '@/modules/common/components/Banner';
import Slider from '@/modules/common/components/Slider';
import EventsList from '@/modules/common/components/EventsList';
import HotDestinations from '@/modules/common/components/HotDestinations';
<<<<<<< HEAD
import Rectangle from '@/modules/common/components/Rectangle';
=======
import EventDrop from '@/modules/common/components/EventDrop';

>>>>>>> 993206c95dc9d30276576b67ad666d580a177b7f

// import { withModal } from '@/modules/core/hoc/withModal';
import './style.scss';

 export default class Artist extends PureComponent {
<<<<<<< HEAD
=======
 state = {
    display: false,
  };


   changeState= () => {
       if (this.state.display === false) {
    this.setState({ display: true });
       } else {
      this.setState({ display: false });
         }

}

>>>>>>> 993206c95dc9d30276576b67ad666d580a177b7f
    render() {
      console.log(this.props.modal);
        return (
            <div styleName="background">
                <Banner />

                <h1 styleName="title">אן מארי</h1>
                <h3 styleName="subtitle">כולכם מוזמנים לקונצרטים</h3>
                  <h3 styleName="subtitle">באווירה קצת אחרת!</h3>
              <Slider />
<<<<<<< HEAD
                <p styleName="describtion">היא השתלטה על כל פלייליסט אפשרי עם השיר .. בשנה שעברה וכעת מוכיחה לנו שהיא הרבה יותר אישה עם להיט אחד</p>
                  <HotDestinations />
                <Rectangle location="אמסטרדם" time="7.03.2019"/>
                  <div style={{  }}>
                    <h1 styleName="title">כל האירועים של אן מארי</h1>
                  <EventsList />
=======
                  <p styleName="describtion">היא השתלטה על כל פלייליסט אפשרי עם השיר .. בשנה שעברה וכעת מוכיחה לנו שהיא הרבה יותר אישה עם להיט אחד</p>
                  <HotDestinations />
                  <div style={{ marginBottom:'30px' }}>
                    <h1 styleName="title">כל האירועים של אן מארי</h1>
                  <EventsList changeState={this.changeState}/>
                      {  this.state.display ? < EventDrop /> : null }
>>>>>>> 993206c95dc9d30276576b67ad666d580a177b7f

                  </div>

            </div>
        );
    }
  }

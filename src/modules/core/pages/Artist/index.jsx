import React, { PureComponent } from 'react';
import Banner from '@/modules/common/components/Banner';
import Slider from '@/modules/common/components/Slider';
import EventsList from '@/modules/common/components/EventsList';
import HotDestinations from '@/modules/common/components/HotDestinations';
import EventDrop from '@/modules/common/components/EventDrop';
import HotDrop from '@/modules/common/components/HotDrop';
import Rectangle from '@/modules/common/components/Rectangle';
import NavSlider from '@/modules/common/components/NavSlider';


// import { withModal } from '@/modules/core/hoc/withModal';
import './style.scss';

 export default class Artist extends PureComponent {
 state = {
    display: false,
    drop: false,
  };


   changeState= () => {
       if (this.state.display === false) {
    this.setState({ display: true });
       } else {
      this.setState({ display: false });
         }

}

   changeStateHot= () => {
       if (this.state.drop === false) {
    this.setState({ drop: true });
       } else {
      this.setState({ drop: false });
         }

}

    render() {
      console.log(this.props.modal);
        return (
            <div styleName="background">
                <Banner />

                <h1 styleName="title">אן מארי</h1>
                <h3 styleName="subtitle">כולכם מוזמנים לקונצרטים</h3>
                  <h3 styleName="subtitle">באווירה קצת אחרת!</h3>
              <NavSlider />

                  <p styleName="describtion">היא השתלטה על כל פלייליסט אפשרי עם השיר .. בשנה שעברה וכעת מוכיחה לנו שהיא הרבה יותר אישה עם להיט אחד</p>
                  <HotDestinations changeStateHot={this.changeStateHot} />
                {  this.state.drop ? < HotDrop changeState={this.changeState} /> : null }
                <div styleName="eventlist">
                  <div style={{  }}>
                    <h1 styleName="title">כל האירועים של אן מארי</h1>
                   <EventsList changeState={this.changeState} />
                      {  this.state.display ? < EventDrop changeState={this.changeState} /> : null }
                  </div>
                  </div>
            </div>
        );
    }
  }

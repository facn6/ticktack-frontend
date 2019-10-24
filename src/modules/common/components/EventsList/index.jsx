import React from 'react';
import './style.scss';


class EventsList extends React.Component {

    render() {
        return (
            <div styleName="list">
            <h1 styleName="title">כל האירועים של אן מארי</h1>
                    <div styleName="parent">
                    <div styleName="city">12.03.2019</div>
                    <div styleName="city">פריז</div>
                    </div>
                      <div styleName="parent">
                       <div styleName="city">13.03.2019</div>
                      <div styleName="city">לונדון</div>
                       </div>


            </div>
        );
    }

}
export default EventsList;

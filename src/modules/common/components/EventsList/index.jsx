import React from 'react';
import './style.scss';


class EventsList extends React.Component {

    render() {
        return (
            <div styleName="list">
            <h1 styleName="title">כל האירועים של אן מארי</h1>

                    <button styleName="button"><span>פריז</span></button>
                      <button styleName="button"><span>לונדון</span></button>


            </div>
        );
    }

}
export default EventsList;

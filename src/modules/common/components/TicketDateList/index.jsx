import React from 'react';
import './style.scss';

class EventsList extends React.Component {

    render() {
        return (
            <div styleName="parent">
                <p styleName="ticket-loc">פריז</p>
                <img src={require('@/assets/icons/candle.svg')} alt="candle-icon" styleName="candle-icon" />
                <p styleName="ticket-date">12.12.19</p>
            </div>
        );
    }

}
export default EventsList;

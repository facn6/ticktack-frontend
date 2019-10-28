import React from 'react';
import './style.scss';

class EventsList extends React.Component {

    render() {
        return (
            <div styleName="parent">
                <p styleName="ticket-loc">ישיבה בטבעת ראשונה</p>
                <div styleName="price-div">
                    <p styleName="price">$25</p>
                    <p styleName="price-detail">מחיר בסיס</p>
                </div>
            </div>
        );
    }

}
export default EventsList;

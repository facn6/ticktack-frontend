import React from 'react';
import './style.scss';


class EventsList extends React.Component {

    render() {
        return (
            <div styleName="list">
                    <div styleName="parent">
                    <div styleName="city">12.03.2019</div>
                    <div styleName="city">פריז</div>
                    </div>
            </div>
        );
    }

}
export default EventsList;

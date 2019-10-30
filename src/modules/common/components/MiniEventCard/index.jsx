import React from 'react';

import './style.scss';

class EventCard extends React.Component {

    render() {


        return (
            <div styleName="row-cards">
                <div styleName="card">
                    <div style={{ position:'relative' }}>
                        <img src={require('@/assets/images/barca-real.jpg')} alt="event-img" styleName="event-img" />
                        <div styleName="mashrom">
                            <img src={require('@/assets/icons/microphone.svg')} alt="microphone-icon" styleName="microphone-icon" />
                        </div>
                    </div>
                    <div />
                    <div styleName="card-content">
                        <h1 styleName="title">כותרת</h1>
                        <p styleName="sub-title">תת כותרת</p>
                        <div styleName="date-from">
                            <h4>מתאריך: </h4>
                            <h4>10.11.2019</h4>
                        </div>
                        <div styleName="date-to">
                            <h4> עד</h4>
                            <h4>13.10.2019</h4>
                        </div>
                    </div>
                </div>
                <div styleName="card">
                    <div style={{ position:'relative' }}>
                        <img src={require('@/assets/images/barca-real.jpg')} alt="event-img" styleName="event-img" />
                        <div styleName="mashrom">
                            <img src={require('@/assets/icons/microphone.svg')} alt="microphone-icon" styleName="microphone-icon" />
                        </div>
                    </div>
                    <div />
                    <div styleName="card-content">
                        <h1 styleName="title">כותרת</h1>
                        <p styleName="sub-title">תת כותרת</p>
                        <div styleName="date-from">
                            <h4>מתאריך: </h4>
                            <h4>10.11.2019</h4>
                        </div>
                        <div styleName="date-to">
                            <h4> עד</h4>
                            <h4>13.10.2019</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default EventCard;

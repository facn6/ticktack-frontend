import React from 'react';
import './style.scss';

class EventCard extends React.Component {

    render() {

        return (
            <div styleName="card">
                <div style={{ position:'relative' }}>
                    <img src={require('@/assets/images/barca-real.jpg')} alt="event-img" styleName="event-img" />
                    <div styleName="mashrom">
                        <img src={require('@/assets/icons/ball.svg')} alt="ball-icon" styleName="ball-icon" />
                    </div>
                </div>
                <div />
                <div styleName="card-content">
                    <h1 styleName="title">כותרת</h1>
                    <p styleName="sub-title">תת כותרת</p>
                    <div styleName="message">
                        <p>*אפשרות ביטול עם החזר של 80% </p>
                    </div>
                </div>
                <div styleName="card-price">
                    <h4 styleName="card-price-title">החל מ-</h4>
                    <p styleName="price">4442$</p>
                </div>

            </div>
        );
    }

}
export default EventCard;

import React from 'react';
import './style.scss';

class EventCard extends React.Component {

    render() {

        return (
            <div styleName="card">
                <div style={{ position:'relative' }}>
                    <img src={require('@/assets/images/barca-real.jpg')} alt="event-img" styleName="event-img" />
                    <div styleName="mashrom">
                        <img src={require('@/assets/icons/music.svg')} alt="music-icon" styleName="music-icon" />
                        <span styleName="view-res">200K</span>
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
                        <h4>12.11.2019</h4>
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

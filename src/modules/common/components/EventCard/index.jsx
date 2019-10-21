import React from 'react';
import './style.scss';

class EventCard extends React.Component {

    render() {
        return (
            <div styleName="card">
                <div style={{ position:'relative' }}>
                    <img src={require('@/assets/images/barca-real.jpg')} alt="event-img" styleName="event-img" />
                    <div styleName="mashrom">
                        <img src={require('@/assets/icons/seen.svg')} alt="seen-icon" styleName="seen-icon" />
                        <span styleName="view-res">12k</span>
                    </div>
                </div>
                <div />
                <div styleName="card-content">
                    <h1 styleName="title">שם של האירוע</h1>
                    <p styleName="sub-title">תת כותרת</p>
                    <div styleName="date-from">
                        <h4>מתאריך: </h4>
                        <h4>06/06/2019</h4>
                    </div>
                    <div styleName="date-to">
                        <h4> עד</h4>
                        <h4>09/06/2019</h4>
                    </div>
                </div>
                <div styleName="card-price">
                    <h4 styleName="card-price-title">החל מ-</h4>
                    <p styleName="price">586$</p>
                </div>

            </div>
        );
    }

}
export default EventCard;

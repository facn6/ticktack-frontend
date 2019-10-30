import React from 'react';
import numeral from 'numeral';
import './style.scss';

class EventCard extends React.Component {

    render() {
        const { event } = this.props;
        if (event === undefined) {
            console.log(this.props);

        } else {

            return (
                <div styleName="card">
                    <div style={{ position:'relative' }}>
                        <img src={require('@/assets/images/barca-real.jpg')} alt="event-img" styleName="event-img" />
                        <div styleName="mashrom">
                            <img src={require('@/assets/icons/seen.svg')} alt="seen-icon" styleName="seen-icon" />
                            <span styleName="view-res">{numeral(event.views).format('0a')}K</span>
                        </div>
                    </div>
                    <div />
                    <div styleName="card-content">
                        <h1 styleName="title">{event.artist}</h1>
                        <p styleName="sub-title">{event.description}</p>
                        <div styleName="date-from">
                            <h4>מתאריך: </h4>
                            <h4>{event.date}</h4>
                        </div>
                        <div styleName="date-to">
                            <h4> עד</h4>
                            <h4>{event.date}</h4>
                        </div>
                    </div>
                    <div styleName="card-price">
                        <h4 styleName="card-price-title">החל מ-</h4>
                        <p styleName="price">{event.price}$</p>
                    </div>

                </div>
            );
        }
        return '';
    }

}
export default EventCard;

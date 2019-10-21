import React from 'react';
import './style.scss';

class DetailsArtistContainer extends React.Component {

    render() {
        return (
            <div styleName="detail-container">
                <div styleName="detail-row">
                    <img src={require('@/assets/icons/location.svg')} alt="location-img" styleName="icon-img" />
                    <label styleName="lbl-detail"> לונדון</label>
                    <a href="https://he.wikipedia.org/wiki/%D7%9C%D7%95%D7%A0%D7%93%D7%95%D7%9F" styleName="a-detail"> בואו תראו מה תעשו בלונדון</a>
                </div>
                <div styleName="detail-row">
                    <img src={require('@/assets/icons/music.svg')} alt="event-img" styleName="icon-img" />
                    <label styleName="lbl-detail">הופעות</label>
                </div>
                <div styleName="detail-row">
                    <img src={require('@/assets/icons/reminder.svg')} alt="calnder-img" styleName="icon-img" />
                    <label styleName="lbl-detail">8.3.19 _ 5.3.19</label>
                </div>
                <div styleName="detail-row">
                    <img src={require('@/assets/icons/basic-deals.svg')} alt="deal-img" styleName="icon-img" />
                    <label styleName="lbl-detail">חבילת בייסק</label>
                </div>
                <div styleName="detail-container-text">
                    <p>טקסט טקסט טקסט</p>
                </div>
                <div styleName="detail-container-note">
                    <p styleName="detail-container-paraghraph">בלעדי לטקטים! <br /> שירות טקטים 360- הדרך שלכם להבטיח את החבילה המושלמת!</p>
                </div>
            </div>
        );
    }

}
export default DetailsArtistContainer;

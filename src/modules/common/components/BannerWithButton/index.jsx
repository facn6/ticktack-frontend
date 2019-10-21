import React from 'react';
import './style.scss';
import SearchButton from '../SearchButton';

class BannerWithButton extends React.Component {

    render() {
        return (
            <div>
                <img src={require('@/assets/images/ariana.jpeg')} alt="ariana-img" styleName="main-img" />
                <div styleName="main-img-title">
                    <div styleName="main-title">אריאנה גרנדה בוינה</div>
                    <div styleName="sub-title"> שירות טקטים 360 - הדרך שלכם להבטיח את החבילה המושלמת!</div>
                </div>
                <SearchButton />
            </div>
        );
    }

}
export default BannerWithButton;

import React from 'react';
import './style.scss';
import Button from '../Button';

class Image extends React.Component {

    render() {
        return (
            <div>
                <img src={require('@/assets/images/ariana.jpeg')} alt="ariana-img" styleName="main-img" />
                <div styleName="main-img-title">
                    <div styleName="main-title">אריאנה גרנדה בוינה</div>
                    <div styleName="sub-title"> שירות טקטים 360 - הדרך שלכם להבטיח את החבילה המושלמת!</div>
                </div>
                <Button />
            </div>
        );
    }

}
export default Image;

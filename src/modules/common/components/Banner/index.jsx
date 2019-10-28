import React from 'react';
import './style.scss';

class Banner extends React.Component {

    render() {
        return (
            <div styleName="banner">
                <img src={require('@/assets/images/arina2.jpeg')} alt="ariana-img" styleName="main-img" />
                <div styleName="main-img-title">
                    <div styleName="main-title">באנר פרסומי </div>
                    <div styleName="sub-title"> הוא פשוט טקסט גולמי</div>
                </div>
            </div>
        );
    }

}
export default Banner;

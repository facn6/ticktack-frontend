import React from 'react';
import './style.scss';

class Banner extends React.Component {

    render() {
        return (
            <div styleName="banner">
                <img src={this.props.img} alt="ariana-img" styleName="main-img" />
                <div styleName="main-img-title">
                    <div styleName="main-title"> {this.props.title} </div>
                    <div styleName="sub-title"> {this.props.subtitle}</div>
                </div>
            </div>
        );
    }

}
export default Banner;

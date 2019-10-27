import React from 'react';
import './style.scss';
import Rectangle from '../Rectangle';


class HotDestinations extends React.Component {

    render() {
        return (
            <div>
            <div styleName="hotsection">
                <img src={require('@/assets/icons/Asset 33.svg')} alt="icon" styleName="icon" />
                    <h1 styleName="title">יעדים חמים</h1>
                </div>
                <div styleName="list">
                    <Rectangle changeState={this.props.changeStateHot} time="7.03.2019" location="אמסטרדם" />
                </div>

            </div>
        );
    }

}
export default HotDestinations;

import React from 'react';
import './style.scss';
import Rectangle from '../Rectangle/index';

export default class EventsList extends React.Component {

    render() {
        return (
            <div styleName="list">
                <Rectangle changeState={this.props.changeState} time="12.03.2019" location="פריז" />
            </div>
        );
    }

}

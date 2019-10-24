import React from 'react';
import './style.scss';

export default class Rectangle extends React.Component {
    render(props) {
        return (
            <div styleName="parent">
                <div styleName="city">{this.props.time}</div>
                <div styleName="city">{this.props.location}</div>
            </div>
        );
    }
}

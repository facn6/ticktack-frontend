import React from 'react';
import './style.scss';

export default class Rectangle extends React.Component {
    render(props) {
        return (
            <div styleName="parent">
                <div styleName="city">{props.time}</div>
                <div styleName="city">{props.location}</div>
            </div>
        );
    }
}


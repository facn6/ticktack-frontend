import React from 'react';
import './style.scss';

export default class Input extends React.Component {
    render() {
        return (
            <input styleName="input" type="text" placeholder={this.props.placeholder} />

        );
    }

}

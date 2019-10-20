import React from 'react';
import './style.scss';

class Button extends React.Component {

    render() {
        return (
            <div styleName="main-search-button">
                <button styleName="search-button"><img src={require('@/assets/icons/search.svg')} styleName="button-icon" alt="buttom-icon" />חיפוש מתקדם</button>
            </div>
        );
    }

}
export default Button;

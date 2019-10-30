import React from 'react';
import './style.scss';

class EventDrop extends React.Component {

    render() {
        return (
            <div styleName="container">
                <div styleName="side">
                    <div styleName="main-title"> רוצים לראות את    אן מארי בפריז  </div>
                    <div styleName="buttons">
                    <button styleName="buttona">לא</button>
                    <button styleName="buttonb">כן</button>
                    </div>
                </div>
                <img src={require('@/assets/images/arina2.jpeg')} alt="ariana-img" styleName="img" />
            </div>
        );
    }

}
export default EventDrop;

import React from 'react';
import withModal from '@/modules/core/hoc/withModal';
import PopUp from '../PopUp';
import './style.scss';


@withModal

class EventDrop extends React.Component {

    render() {

        const popUp = () => {
            this.props.modal.show(() => <PopUp />);
        };

        return (
            <div styleName="container">
                <div styleName="side">
                    <div styleName="main-title"> רוצים לראות את    אן מארי בפריז  </div>
                    <div styleName="buttons">
                        <button styleName="buttona" onClick={this.props.changeState} >לא</button>
                    <button styleName="buttonb" onClick={popUp}>כן</button>
                    </div>
                </div>
                <img src={require('@/assets/images/arina2.jpeg')} alt="ariana-img" styleName="img" />
            </div>
        );
    }

}
export default EventDrop;

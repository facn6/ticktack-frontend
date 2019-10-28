import React from 'react';
import './style.scss';
import Rectangle from '../Rectangle';


class HotDrop extends React.Component {

    render() {


        return (
            <div styleName="container">
                <Rectangle location="כרטיסים בלבד" time="החל מ 165$" />
                <Rectangle location="חבילת בייסיק" time="החל מ $586" />
            </div>

        );
    }

}
export default HotDrop;

import React from 'react';
import './style.scss';


class EventsList extends React.Component {

    render() {
        return (
            <div styleName="list">
            <h1 styleName="title">כל האירועים של אן מארי</h1>
      <ul >
                      <li><button styleName="button">Coffee</button></li>
                      <li><button styleName="button">Tea</button></li>
                     <li><button styleName="button">Milk</button></li>
      </ul>
            </div>
        );
    }

}
export default EventsList;

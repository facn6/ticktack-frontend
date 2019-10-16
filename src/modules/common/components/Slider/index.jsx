import React from 'react';
import './style.scss';

class Slider extends React.Component {
  constructor(props) {
      super(props);
  this.state =  { scroll:3000 };
}

componentDidMount() {
  const el = document.querySelector('#middle');
  el.scrollLeft = this.state.scroll;
    this.setState({ scroll:1000 });
}

    render() {
        return (
            <div styleName="gallery">
                <div id="middle" styleName="gallery_scroller">
                    <div>
                        {/* <img src={require('@/assets/images/concert.jpg')} alt="concert-img" /> */}
                    </div>
                    <div>
                        {/* <img src={require('@/assets/images/football.jpg')} alt="football-img" /> */}
                    </div>
                    <div>
                        {/* <img src={require('@/assets/images/tennis.jpg')} alt="tennis-img" /> */}
                    </div>
                </div>
            </div>
        );
    }

}

export default Slider;

import React from 'react';
import './style.scss';

class Slider extends React.Component {

    async componentDidMount() {

        const interval = setInterval(() => {
            if (document.readyState === 'complete') {
                clearInterval(interval);
                this.slider.scrollLeft = 1000;
            }
        }, 100);
    }

    render() {

        return (
            <div styleName="gallery">
                <div
                    // eslint-disable-next-line no-return-assign
                    ref={(el) => this.slider = el}
                    styleName="gallery_scroller"
                >
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

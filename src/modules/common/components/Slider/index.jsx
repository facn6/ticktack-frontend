import React from 'react';
import './style.scss';

class Slider extends React.Component {

    componentDidMount() {

        const interval = setInterval(() => {
            if (document.readyState === 'complete') {
                clearInterval(interval);
                this.slider.scrollLeft = 300;
            }
        }, 100);
    }

    render() {

        return (
            <div styleName="gallery">
                <div styleName="gallery2">
            בחר את האירועים הפופולריים ביותר
                </div>
                <div style={{ marginBottom:'10px' }}>
            !אנחנו כאן בשבילך
                </div>
                <div
                    // eslint-disable-next-line no-return-assign
                    ref={(el) => this.slider = el}
                    styleName="gallery_scroller"
                >

                    <div>
                        <img src={require('@/assets/images/concert.jpg')} alt="concert-img" />
                        <div styleName="kira">
                            <p styleName="kira2">טקסט כלשהו</p>
                            <p>12/11/2019 - 04/05/2019</p>
                        </div>
                    </div>
                    <div>
                        <img src={require('@/assets/images/football.jpg')} alt="football-img" />
                        <div styleName="kira">
                            <p styleName="kira2">טקסט כלשהו</p>
                            <p>12/11/2019 - 04/05/2019</p>
                        </div>
                    </div>
                    <div>
                        <img src={require('@/assets/images/tennis.jpg')} alt="tennis-img" />
                        <div styleName="kira">
                            <p styleName="kira2">טקסט כלשהו</p>
                            <p>12/11/2019 - 04/05/2019</p>
                        </div>
                    </div>
                </div>
                <div styleName="icon">
                    <img src={require('@/assets/icons/email.svg')} alt="email-img" />
                </div>
            </div>
        );
    }

}

export default Slider;

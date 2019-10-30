import React from 'react';
import classnames from 'classnames';
import './style.scss';

class NavSlider extends React.Component {

    state = { dotsArray: [1, 2, 3].map(() => false).map((item, i) => i === 0) };

    componentDidMount() {
        const interval = setInterval(() => {
            if (document.readyState === 'complete') {
                clearInterval(interval);
            }
        }, 100);
    }

    render() {
        const images = [
            require('@/assets/images/anneM.jpg'),
            require('@/assets/images/anneM1.jpg'),
            require('@/assets/images/anneM2.jpg'),
        ];
        return (
            <div styleName="gallery">
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    אן מארי
                </div>
                <div>!כולכם מוזמנים לקונצרטים באווירה קצת אחרת</div>

                <div
                    // eslint-disable-next-line no-return-assign
                    ref={(el) => (this.slider = el)}
                    styleName="gallery_scroller"
                    onScroll={(event) => {

                        let i;

                        for (i = 0; i < images.length; i++) {
                            if (i * 300 < this.slider.scrollLeft) {
                                this.setState({
                                    dotsArray: images
                                        .map(() => false)
                                        // eslint-disable-next-line
                                        .map((item, index) => index === i),
                                });
                            }
                        }
                    }}
                >
                    {images.map((item) => (
                        <div>
                            <img src={item} alt="anne-marie-img" />
                        </div>
                    ))}
                </div>
                <div styleName="icon">
                    <img
                        src={require('@/assets/icons/email.svg')}
                        alt="email-img"
                    />
                </div>

                <div styleName="nav-dots">
                    {this.state.dotsArray.map((item, i) => {
                        return (
                            <div
                                styleName={classnames('nav-dot', {
                                    'nav-dot-selected': item,
                                })}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }

}

export default NavSlider;

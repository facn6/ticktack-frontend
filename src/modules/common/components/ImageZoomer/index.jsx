
import React, { Component } from 'react';
import './style.scss';

class ImageZoomer extends Component {

    state={
        scaleSize:1,
    }
    render() {

        const { scaleSize } = this.state;
        return (
            <div styleName="container">

                {/* // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <img
                    src={require('@/assets/images/ticket-seat.jpg')}
                    alt="location-img"
                    style={{ transform:`translate3d(3.5px, 1px, 0px) scale(${scaleSize})`, width:'100%', height:'200px', left:'0' }}
                    onClick={() => this.setState({ scaleSize:1 })}
                />
                <img
                    src={require('@/assets/icons/zoom-img.svg')}
                    alt="location-img"
                    styleName="zoom-img"
                    onClick={() => this.setState({ scaleSize:2 })}
                />


            </div>
        );
    }

}


export default ImageZoomer;

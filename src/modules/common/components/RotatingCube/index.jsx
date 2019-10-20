import React from 'react';
// import '@/assets/css/cube.css';
import './style.css';


class RotatingCube extends React.Component {

    render() {
        return (
            <div className="section-cube">
                <div className="main-cube">
                    <div className="container">
                        <div className="wrapper">
                            <div className="cont">
                                <div className="cube">
                                    <figure className="front">מבצעים</figure>
                                    <figure className="back">הופעות</figure>
                                    <figure className="right">ספורט</figure>
                                    <figure className="left">אטרקציות</figure>
                                    <figure className="top">פסטיבלים</figure>
                                    <figure className="bottom">מומלצים</figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas flex-container">
                        <div className="col-lg-4">
                            <div className="bg cool"><canvas id="tenthSection_1" height="100" width="100" /></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="bg awesome"><canvas id="tenthSection_2" height="100" width="100" /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default RotatingCube;

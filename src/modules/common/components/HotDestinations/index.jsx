import React from "react";
import "./style.scss";

class HotDestination extends React.Component {
    render() {
        return (
            <section styleName="hot-des-container">
                <div styleName="hot-des">
                    <div styleName="main-title">Hot Destinations</div>
                    <img
                        src={require("@/assets/icons/fire.svg")}
                        alt="fire-icon"
                        styleName="fire-icon"
                    />
                </div>
                <div styleName="cards"></div>
            </section>
        );
    }
}
export default HotDestination;

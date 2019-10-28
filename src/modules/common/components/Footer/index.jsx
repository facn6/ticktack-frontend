import React from 'react';
import './style.scss';

// eslint-disable-next-line no-return-assign

class Footer extends React.Component {

    render() {
        return (
            <div styleName="field-div">
                <div styleName="title">
          לקבלת דיוור על אירועים ומבצעים שווים
                </div>
                <div>
                    <input
                        styleName="field"
                        type="text"
                        id="input"
                        placeholder="הזן כתובת מייל"
                    />
                </div>
                <div>
                    <button styleName="send">שלח</button>
                </div>
                <img styleName="logo-footer" src={require('@/assets/logos/logo-footer.svg')} alt="tick-tack-img" />
                <div>


                    <img styleName="icon-footer" src={require('@/assets/icons/youtube.svg')} alt="tick-tack-img" />
                    <img styleName="icon-footer" src={require('@/assets/icons/tripadvisor.svg')} alt="tick-tack-img" />
                    <img styleName="icon-footer" src={require('@/assets/icons/instagram.svg')} alt="tick-tack-img" />
                    <img styleName="icon-footer" src={require('@/assets/icons/twitter.svg')} alt="tick-tack-img" />
                    <img styleName="icon-footer" src={require('@/assets/icons/facebook.svg')} alt="tick-tack-img" />
                </div>
            </div>
        );
    }

}
export default Footer;

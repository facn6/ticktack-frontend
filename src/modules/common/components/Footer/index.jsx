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
                <img styleName="logo" src={require('@/assets/logos/logo-footer.svg')} alt="tick-tack-img" />

            </div>
        );
    }

}
export default Footer;

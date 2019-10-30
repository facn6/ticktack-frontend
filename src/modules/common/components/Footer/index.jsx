import React from 'react';
import api from '@/helpers/api';
import './style.scss';
// eslint-disable-next-line no-return-assign

class Footer extends React.Component {

    state = { emailAdress:'' };

    SendEmail = async (mail) => {
        try {

            await api.SendEmailAdress(mail);
        } catch (err) {
            console.log(err);
        }

    }
    render() {
        return (
            <div styleName="field-div">
                <div styleName="title">
          לקבלת דיוור על אירועים ומבצעים שווים
                </div>
                <div>
                    <input
                        styleName="field"
                        type="email"
                        id="input"
                        placeholder="הזן כתובת מייל"
                        onChange={(e) => this.setState({ emailAdress:e.target.value })}
                    />
                </div>
                <div>
                    <button styleName="send" onClick={() => this.SendEmail(this.state.emailAdress)}>שלח</button>
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

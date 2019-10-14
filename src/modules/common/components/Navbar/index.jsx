import React from 'react';
import './style.scss';


class Navbar extends React.Component {

    render() {
        return (
            <div styleName="navbar">

                <div styleName="navbar-left-icons">
                    <img styleName="icon" src={require('@/assets/icons/handicaped.svg')} alt="handicaped-img" />
                    <img styleName="icon" src={require('@/assets/icons/cart.svg')} alt="cart-imag" />
                </div>
                <img styleName="logo" src={require('@/assets/logos/tick_tack_logo.svg')} alt="tick-tack-img" />
                <div styleName="burger-menu-container">
                    <div styleName="burger-menu">

                        <div styleName="burger-icon">
                            <span styleName="line">&nbsp;</span>
                            <span styleName="line">&nbsp;</span>
                            <span styleName="line">&nbsp;</span>
                        </div>
                        <img styleName="mushroom" src={require('@/assets/icons/menuside.svg')} alt="menuside-img" />

                    </div>
                </div>
            </div>

        );
    }

}
export default Navbar;

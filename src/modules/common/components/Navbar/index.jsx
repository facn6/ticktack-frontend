import React from 'react';
import './style.scss';
import Sidebar from '../Sidebar/index';

class Navbar extends React.Component {

state = { open:false };

openSidebar = () => {
    this.setState({ open:true });
    document.body.style.transition = '1s all';
    setTimeout(() => {
        document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    }, 500);

}

closeSidebar = () => {
    this.setState({ open:false });
    document.body.style.transition = '1s all';
    document.body.style.backgroundColor = 'initial';


}


render() {
    return (
        <div styleName="navbar">
            <Sidebar open={this.state.open} close={this.closeSidebar} />
            <div styleName="navbar-left-icons">
                <img styleName="icon" src={require('@/assets/icons/handicaped.svg')} alt="handicaped-img" />
                <img styleName="icon" src={require('@/assets/icons/cart.svg')} alt="cart-imag" />
            </div>
            <img styleName="logo" src={require('@/assets/logos/tick_tack_logo.svg')} alt="tick-tack-img" />
            <div styleName="burger-menu-container" onClick={() => this.openSidebar()}>
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

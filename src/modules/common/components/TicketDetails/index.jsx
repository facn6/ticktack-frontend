import React from 'react';
import classnames from 'classnames';
import './style.scss';

class TicketDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible:true,
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible,
        });
    };


    render() {
        return (
            <div styleName={classnames('sticky', { 'sticky-hidden':!this.state.visible })}>
                <div styleName="price-detail">
                    <h1 styleName="price">360.00$</h1>
                    <h4>מחיר ליחיד בחדר זוגי</h4>
                </div>
                <div styleName="quantity-detail">
                    <label styleName="quantity-lbl">:כמות</label>
                    <select styleName="quantity-selection">
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="six">6</option>
                        <option value="seven">7</option>
                        <option value="eight">8</option>
                    </select>
                </div>
                <div styleName="btn-section">
                    <button styleName="btn"> הוסף לסל<img styleName="btn-icon" src={require('@/assets/icons/white-cart.svg')} alt="cart-imag" /></button>
                    <a styleName="a-link" href="/">לתנאי העסקה</a>
                </div>
            </div>

        );
    }

}
export default TicketDetail;

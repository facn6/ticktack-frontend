import React from 'react';
import { Link } from 'react-router';
import './style.scss';

class SaleNavbar extends React.Component {

    render() {
        return (
            <section styleName="menubar">
                <form styleName="menu2">
                    <Link to="/sales" styleName="sales-tab">המבצעים</Link> |
                    <Link to="/events">הופעות</Link> |
                    <Link to="/">ספורט</Link> |
                    <Link to="/">אטרקציות</Link> |
                    <Link to="/">פסטיבלים</Link> |
                </form>
            </section>
        );
    }

}

export default SaleNavbar;

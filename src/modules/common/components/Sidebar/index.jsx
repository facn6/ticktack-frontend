import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import './style.scss';

class Sidebar extends React.Component {


    state = {

    }


    render() {
        return (
            <div styleName={classnames('sidebar', { 'openSidebar':this.props.open })}>
                <button styleName="sidebar-close" onClick={this.props.close}>X</button>
                <div styleName={classnames('dropdown', { 'open-dropdown':this.state['1'] })}>
                    <Link to="/" onClick={this.props.close}> <button styleName={classnames('dropdown-btn', { 'open-dropdown-button':this.state['1'] })} onClick={() => this.setState({ '1': !this.state['1'] })}>דף ראשי</button> </Link>
                </div>
                <div styleName={classnames('dropdown', { 'open-dropdown':this.state['2'] })}>
                    <Link to="/events" onClick={this.props.close}> <button styleName={classnames('dropdown-btn', { 'open-dropdown-button':this.state['2'] })} onClick={() => this.setState({ '2': !this.state['2'] })}>הופעות</button> </Link>
                </div>
                <div styleName={classnames('dropdown', { 'open-dropdown':this.state['3'] })}>
                    <Link to="/artist" onClick={this.props.close}><button styleName={classnames('dropdown-btn', { 'open-dropdown-button':this.state['3'] })} onClick={() => this.setState({ '3': !this.state['3'] })}>אומנים</button></Link>
                </div>
                <div styleName={classnames('dropdown', { 'open-dropdown':this.state['4'] })}>
                    <button styleName={classnames('dropdown-btn', { 'open-dropdown-button':this.state['4'] })} onClick={() => this.setState({ '4': !this.state['4'] })}> אטרקציות ו מחזות זמר </button>
                </div>
                <div styleName={classnames('dropdown', { 'open-dropdown':this.state['5'] })}>
                    <button styleName={classnames('dropdown-btn', { 'open-dropdown-button':this.state['5'] })} onClick={() => this.setState({ '5': !this.state['5'] })}>פסטיבלים
                    </button>
                </div>
                <div styleName={classnames('dropdown', { 'open-dropdown':this.state['6'] })}>
                    <Link to="/sales" onClick={this.props.close}><button styleName={classnames('dropdown-btn', { 'open-dropdown-button':this.state['6'] })} onClick={() => this.setState({ '6': !this.state['6'] })}>מבצעים חמים</button></Link>
                </div>
            </div>

        );
    }

}

export default Sidebar;

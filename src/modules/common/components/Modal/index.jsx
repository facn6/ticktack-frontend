import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

export default class Modal extends PureComponent {

    static propTypes = {
        children            : PropTypes.node.isRequired,
        className           : PropTypes.string,
        closeOnOverlayClick : PropTypes.bool,
        defaultOpen         : PropTypes.bool,
        showCloseButton     : PropTypes.bool,
        onClose             : PropTypes.func,
        onOpen              : PropTypes.func,
    }

    static defaultProps = {
        className           : '',
        closeOnOverlayClick : true,
        defaultOpen         : false,
        showCloseButton     : true,
        onClose             : null,
        onOpen              : null,
    }

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    componentWillMount() {
        const { defaultOpen } = this.props;

        if (defaultOpen) {
            this.open();
        }
    }

    close = () => {
        this.setState({ isOpen: false });

        if (typeof document !== 'undefined') {
            document.body.classList.remove('has-modal');
        }

        if (typeof this.props.onClose === 'function') {
            this.props.onClose();
        }
    }

    open = () => {
        this.setState({ isOpen: true });

        if (typeof document !== 'undefined') {
            document.body.classList.add('has-modal');
        }

        if (typeof this.props.onOpen === 'function') {
            this.props.onOpen();
        }
    }

    renderModal() {
        const { children, className, closeOnOverlayClick, showCloseButton } = this.props;

        return (
            <div styleName="overlay">
                {
                    closeOnOverlayClick ? (
                        <button type="button" styleName="overlay-close" onClick={this.close} />
                    ) : null
                }
                <article styleName="modal" className={className} role="dialog">
                    {
                        showCloseButton ? (
                            <button type="button" styleName="close" onClick={this.close}>
                                <span className="icon icon-close" />
                            </button>
                        ) : null
                    }
                    { children }
                </article>
            </div>
        );
    }

    render() {
        const { isOpen } = this.state;

        if (typeof document === 'undefined') {
            return null;
        }

        if (!isOpen) {
            return null;
        }

        return ReactDOM.createPortal(this.renderModal(), document.getElementById('react-view'));
    }

}

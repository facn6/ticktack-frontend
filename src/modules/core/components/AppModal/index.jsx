import React, { PureComponent } from 'react';

import withModal from '@/modules/core/hoc/withModal';

import Modal from '@/modules/common/components/Modal';

export default
@withModal
class ModalContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.modalRef = React.createRef();
    }

    handleClose = () => {
        const { modal } = this.props;

        modal.hide();
    }

    render() {
        const { modal } = this.props;
        const { component, props } = modal;
        const ChildComponent = component;

        if (!ChildComponent) {
            return null;
        }

        return (
            <Modal ref={this.modalRef} onClose={this.handleClose} defaultOpen>
                <ChildComponent {...props} modalRef={this.modalRef} />
            </Modal>
        );
    }

}

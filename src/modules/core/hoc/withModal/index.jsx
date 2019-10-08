import React from 'react';

import { ModalConsumer } from '@/modules/core/context/modal';

export default function withModal(ComposedComponent) {
    return function WithModalComponent(props) {
        return (
            <ModalConsumer>
                {
                    (context) => (
                        <ComposedComponent {...props} modal={context} />
                    )
                }
            </ModalConsumer>
        );
    };
}

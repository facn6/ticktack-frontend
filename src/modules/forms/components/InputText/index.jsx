import { connect } from 'formik';
import { get } from 'lodash-es';
import React, { PureComponent } from 'react';

import './styles.scss';

@connect
export default class InputText extends PureComponent {

    handleChange = (event) => {
        const { formik, onChange } = this.props;

        if (typeof onChange === 'function') {
            onChange(event);
        }

        if (typeof formik.handleChange === 'function') {
            formik.handleChange(event);
        }
    }

    handleBlur = (event) => {
        const { formik, onBlur } = this.props;

        if (typeof onBlur === 'function') {
            onBlur(event);
        }

        if (typeof formik.handleBlur === 'function') {
            formik.handleBlur(event);
        }
    }

    render() {
        const { formik, ...rest } = this.props;

        if (formik) {
            rest.value = get(formik.values, this.props.name);
        }

        return (
            <div styleName="main">
                <input type="text" {...rest} onChange={this.handleChange} onBlur={this.handleBlur} />
            </div>
        );
    }

}

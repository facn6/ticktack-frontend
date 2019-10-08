import { connect } from 'formik';
import { get } from 'lodash-es';
import React, { PureComponent } from 'react';

import './styles.scss';

@connect
export default class CheckboxInput extends PureComponent {

    hasFormik() {
        const { formik, name } = this.props;

        return Boolean(Object.keys(formik).length) && Boolean(name);
    }

    handleBlur = (event) => {
        const { formik, onBlur } = this.props;

        if (typeof onBlur === 'function') {
            onBlur(event);
        }

        if (this.hasFormik()) {
            formik.handleBlur(event);
        }
    }

    handleChange = (event) => {
        const { formik, onChange } = this.props;

        if (typeof onChange === 'function') {
            onChange(event);
        }

        if (this.hasFormik()) {
            formik.handleChange(event);
        }
    }

    render() {
        const { children, formik, size, ...rest } = this.props;
        const { name } = this.props;

        if (this.hasFormik()) {
            rest.checked = get(formik.values, name, false);
        }

        return (
            <div styleName="main">

                <input styleName="input" type="checkbox" style={{ fontSize: size }} {...rest} onBlur={this.handleBlur} onChange={this.handleChange} />

                <div styleName="indicator" className="indicator" style={{ fontSize: size }}>
                    <span className="icon icon-check" styleName="icon" />
                </div>

                <div styleName="content">{children}</div>

            </div>
        );
    }

}

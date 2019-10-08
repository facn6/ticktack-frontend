import { get } from 'lodash-es';
import { connect } from 'formik';
import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';

import './styles.scss';

@connect
export default class InputDatePicker extends PureComponent {

    handleChange = (date) => {
        const { formik, name, onChange } = this.props;

        if (typeof onChange === 'function') {
            onChange(date);
        }

        if (typeof formik.setFieldValue === 'function') {
            formik.setFieldValue(name, date);
        }
    }

    handleBlur = (event) => {
        const { formik, name, onBlur } = this.props;

        if (typeof onBlur === 'function') {
            onBlur(event);
        }

        if (typeof formik.handleBlur === 'function') {
            formik.setTouched(name);
        }
    }

    render() {
        const { formik, ...rest } = this.props;

        if (formik) {
            rest.selected = get(formik.values, this.props.name);
        }

        return (
            <div styleName="main">
                <div styleName="indicator">
                    <div styleName="input">
                        <DatePicker autoComplete="off" {...rest} onChange={this.handleChange} onBlur={this.handleBlur} />
                    </div>
                    <span styleName="icon" className="icon icon-calendar" />
                </div>
            </div>
        );
    }

}

import { connect } from 'formik';
import { get } from 'lodash-es';
import React, { PureComponent } from 'react';

import './styles.scss';

@connect
export default class InputSelect extends PureComponent {

    constructor(props) {
        super(props);

        this.input = React.createRef();
        this.value = React.createRef();
    }

    componentDidMount() {
        this.updateValue();
    }

    componentDidUpdate() {
        this.updateValue();
    }

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

    updateValue = () => {
        const { placeholder } = this.props;

        const selection = this.input.current.options[this.input.current.selectedIndex];
        const text = selection ? selection.innerHTML : placeholder;

        this.value.current.innerHTML = text;
    }

    render() {
        const { children, options, placeholder, formik, ...rest } = this.props;

        if (formik && this.props.name) {
            rest.value = get(formik.values, this.props.name);
        }

        let selectOptions = children;

        if (options) {
            selectOptions = options.map((option) => {
                if (typeof option === 'object') {
                    return <option key={option.value} value={option.value}>{option.label}</option>;
                }
                return <option key={option} value={option}>{option}</option>;
            });
        }

        return (
            <div styleName="main">
                <select ref={this.input} styleName="input" {...rest} onChange={this.handleChange} onBlur={this.handleBlur}>
                    {selectOptions}
                </select>
                <div styleName="indicator">
                    <span ref={this.value} styleName="value" />
                    <span styleName="icon" className="icon icon-triangle-down" />
                </div>
            </div>
        );
    }

}

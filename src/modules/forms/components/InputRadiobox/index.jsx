import React from 'react';

import './styles.scss';

export default function CheckboxInput(props) {
    const { children, form, ...rest } = props;

    if (form) {
        rest.checked  = form.values[props.name];
        rest.onBlur   = form.handleBlur;
        rest.onChange = form.handleChange;
    }

    return (
        <label styleName="radiobox">
            <input type="radio" styleName="input" {...rest} />
            <div styleName="indicator" />
            <div styleName="content">{children}</div>
        </label>
    );
}

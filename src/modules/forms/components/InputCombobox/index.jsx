import { connect } from 'formik';
import { get } from 'lodash-es';
import React, { PureComponent } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import Creatable from 'react-select/lib/Creatable';
import AsyncCreatable from 'react-select/lib/AsyncCreatable';

const NullComponent = () => null;

const styles = {
    container: (base) => ({
        ...base,
        height: '42px',
        minHeight: '100%',
        maxHeight: '100%',
    }),
    control: (base, state) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        padding: '5px 10px',
        margin: '0',
        background: '#ffffff',
        border: state.isFocused ? '1px solid #f26524' : '1px solid #d8d8d8',
        borderRadius: '3px',
        transition: 'border-color 200ms linear',
    }),
    placeholder: (base) => ({
        ...base,
        position: null,
        top: null,
        marginRight: null,
        marginLeft: null,
        transform: null,
    }),
    input: (base) => ({
        ...base,
        paddingTop: null,
        paddingBottom: null,
        margin: null,
        color: 'inherit',
    }),
    valueContainer: (base) => ({
        ...base,
        padding: null,
        margin: null,
    }),
    multiValueLabel: (base) => ({
        ...base,
        paddingLeft: '10px',
    }),
    multiValueRemove: (base) => ({
        ...base,
        'cursor': 'pointer',
        ':hover': {
            background: null,
            color: '#f26524',
        },
    }),
};

@connect
export default class InputCombobox extends PureComponent {

    getComponents() {
        return {
            DropdownIndicator: NullComponent,
            IndicatorsContainer: NullComponent,
        };
    }

    getSelect() {
        const { loadOptions, isCreatable } = this.props;
        const isAsync = (typeof loadOptions === 'function');

        if (isAsync && isCreatable) {
            return AsyncCreatable;
        } else if (isAsync) {
            return AsyncSelect;
        } else if (isCreatable) {
            return Creatable;
        }
        return Select;
    }

    handleChange = (selected) => {
        const { formik, isMulti, name, onChange } = this.props;

        if (!isMulti && Array.isArray(selected) && !selected.length) {
            selected = null;
        }

        if (typeof onChange === 'function') {
            onChange(selected);
        }

        if (typeof formik.setFieldValue === 'function') {
            formik.setFieldValue(name, selected);
        }
    }

    handleBlur = (event) => {
        const { formik, onBlur } = this.props;

        if (onBlur === 'function') {
            onBlur(event);
        }

        if (typeof formik.handleBlur === 'function') {
            formik.handleBlur(event);
        }
    }

    render() {
        const { form, ...rest } = this.props;

        const Component  = this.getSelect();
        const components = this.getComponents();

        if (form) {
            rest.value = get(form.values, this.props.name);
        }

        return (
            <Component components={components} styles={styles} {...rest} onChange={this.handleChange} onBlur={this.handleBlur} />
        );
    }

}

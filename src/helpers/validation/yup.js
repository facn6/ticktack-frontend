import * as yup from 'yup';

import MomentSchema from './schemas/moment';

yup.addMethod(yup.date, 'moment', function moment() {
    return new MomentSchema();
});

yup.addMethod(yup.mixed, 'reduce', function reduce(value) {
    const options = {
        strict: false,
        abortEarly: true,
        stripUnknown: true,
        recursive: true,
    };

    return this.validateSync(value, options);
});

yup.addMethod(yup.number, 'identity', function identity() {
    return this.integer().positive();
});

yup.addMethod(yup.number, 'price', function identity() {
    return this.positive();
});

yup.addMethod(yup.number, 'quantity', function identity() {
    return this.integer().min(1);
});

yup.addMethod(yup.object, 'requireAll', function requireAll() {
    const newSchema = this.clone();

    Object.entries(newSchema.fields).forEach(([key, value]) => {
        newSchema.fields[key] = value.required();
    });

    return newSchema;
});

yup.addMethod(yup.object, 'require', function require(props = []) {
    const newSchema = this.clone();

    for (let i = 0; i < props.length; ++i) {
        newSchema.fields[props[i]] = this.fields[props[i]].required();
    }

    return newSchema;
});

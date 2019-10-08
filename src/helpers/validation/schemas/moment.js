import moment from 'moment';
import { date as DateSchema } from '~/yup/lib';

export default class MomentSchema extends DateSchema {

    _typeCheck(value) {
        return super._typeCheck(value) || (moment.isMoment(value) && value.isValid());
    }

}

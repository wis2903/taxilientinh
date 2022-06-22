import moment from 'moment';

export const getTodayInString = (): string => {
    return moment().format('DD/MM/YYYY');
};
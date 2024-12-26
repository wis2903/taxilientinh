import vi from 'date-fns/locale/vi';
import moment from 'moment';
import React from 'react';
import Picker from 'react-datepicker';

import { registerLocale } from 'react-datepicker';

// styles
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.module.scss';
registerLocale('vi', vi);

// interface
interface IDatePickerProps {
    title: string;
    value?: number | string;
    min?: number;
    max?: number;
    onChange?: (ts: number) => void;
    onLoad?: (api: unknown) => void;
}

// main
const DatePicker = ({
    title,
    value: valueFromProps,
    min,
    max,
    onChange,
    onLoad,
}: IDatePickerProps): JSX.Element => {
    const [value, setValue] = React.useState<number>(
        valueFromProps ? moment(valueFromProps).valueOf() : moment().valueOf()
    );

    const handleOnDateChange = (date: Date): void => {
        const ts = moment(date).valueOf();
        setValue(ts);
        if (onChange) onChange(ts);
    };

    React.useEffect(() => {
        if (onChange) onChange(value);
        onLoad?.({
            updateValue: (val: string | number) => setValue(moment(val).valueOf()),
        });
    }, []);

    return (
        <div className={styles.container}>
            <span className={styles.label}>{title}</span>

            <div className={styles.wrapper}>{moment(value).format('DD/MM/YYYY')}</div>
            <div className={styles.picker}>
                <Picker
                    selected={moment(value).toDate()}
                    minDate={min ? moment(min).toDate() : moment().toDate()}
                    maxDate={max ? moment(max).toDate() : undefined}
                    onChange={handleOnDateChange}
                    locale="vi"
                    customInput={<div className="react-date-picker-div" />}
                />
            </div>
        </div>
    );
};

export default DatePicker;

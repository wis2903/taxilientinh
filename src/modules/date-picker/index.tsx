import React from 'react';
import moment from 'moment';
import Picker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import vi from 'date-fns/locale/vi';


// styles
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.module.scss';
registerLocale('vi', vi);

// interface
interface IDatePickerProps {
    title: string,
    onChange?: (ts: number) => void,
}

// main
const DatePicker = ({ title, onChange }: IDatePickerProps): JSX.Element => {
    const [value, setValue] = React.useState<number>(moment().valueOf());

    const handleOnDateChange = (date: Date): void => {
        const ts = moment(date).valueOf();
        setValue(ts);
        if (onChange) onChange(ts);
    };

    React.useEffect(() => {
        if (onChange) onChange(value);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {title}: {moment(value).format('DD/MM/YYYY')}
            </div>
            <div className={styles.picker}>
                <Picker
                    selected={moment(value).toDate()}
                    minDate={moment().toDate()}
                    onChange={handleOnDateChange}
                    locale="vi"
                    customInput={
                        <div className="react-date-picker-div" />
                    }
                />
            </div>
        </div>
    );
};

export default DatePicker;
import moment from 'moment';
import React from 'react';
import Select, { ISelectOptionProps } from '../select';

// styles
import styles from './styles.module.scss';

interface IProps {
    title: string;
    onChange?: (value: string) => void;
}

// main
const TimePicker = ({ title, onChange }: IProps): JSX.Element => {
    const getHOptions = (): ISelectOptionProps[] => {
        const hOptions = [];
        for (let i = 0; i < 24; i++) {
            const val = `${i < 10 ? '0' + i : i}`;
            hOptions.push({
                label: `${val} giờ`,
                value: `${val}`,
            });
        }

        return hOptions;
    };

    const getMOptions = (): ISelectOptionProps[] => {
        const mOptions = [];
        for (let i = 0; i < 60; i++) {
            const val = `${i < 10 ? '0' + i : i}`;
            mOptions.push({
                label: `${val} phút`,
                value: `${val}`,
            });
        }
        return mOptions;
    };

    const [hOptions] = React.useState<ISelectOptionProps[]>(getHOptions());
    const [mOptions] = React.useState<ISelectOptionProps[]>(getMOptions());
    const [h, setH] = React.useState<string>(moment().format('HH'));
    const [m, setM] = React.useState<string>(moment().format('mm'));

    return (
        <div className={styles.container}>
            <span className={styles.label}>{title}</span>

            <div className={styles.selection}>
                <Select
                    className={styles.dropdown}
                    options={hOptions.map((item) => ({ ...item, selected: item.value === h }))}
                    onChange={(opt): void => {
                        setH(String(opt.value));
                        if (onChange) onChange(`${String(opt.value)}:${m}`);
                    }}
                />
                <span>:</span>
                <Select
                    className={styles.dropdown}
                    options={mOptions.map((item) => ({ ...item, selected: item.value === m }))}
                    onChange={(opt): void => {
                        setM(String(opt.value));
                        if (onChange) onChange(`${h}:${String(opt.value)}`);
                    }}
                />
            </div>
        </div>
    );
};

export default TimePicker;

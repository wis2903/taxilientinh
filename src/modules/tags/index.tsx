import React from 'react';
import { isMobile } from 'react-device-detect';
import ENVS from '../../envs';
import Wrapper from '../wrapper';

// styles
import styles from './styles.module.scss';

// constants
const TAG_ITEMS = [
    'Sân bay Tân Sơn Nhất',
    'Bệnh viện 115',
    'Nhà thờ Đức Bà',
    'Công viên Đầm Sen',
    'Khu du lịch Suối Tiên',
    'Chợ Bến Thành',
    'Thành Phố Đà Lạt',
    'Thành Phố Long An',
    'Thành Phố Đồng Nai',
    'Thành Phố Vũng Tàu',
    'Thành Phố Cần Thơ',
    'Thành Phố Bến Tre',
];

// main
const Tags = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Wrapper className={styles.wrapper}>
                <h3 className={styles.title}>Điểm đến phổ biến</h3>
                <div className={styles.items}>
                    {
                        TAG_ITEMS.map(item =>
                            <a key={item} href={isMobile ? `tel:${ENVS.phone.value}` : `?to=${item}`} className={styles.item}>
                                {item}
                            </a>
                        )

                    }
                </div>
            </Wrapper>
        </div>
    );
};

export default Tags;
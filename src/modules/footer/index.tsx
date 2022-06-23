import React from 'react';

// components
import Button from '../button';
import Booking from '../booking';

// styles
import styles from './styles.module.scss';
import Wrapper from '../wrapper';
import ENVS from '../../envs';

// interfaces
interface FooterProps {
    onClickBooking?: () => void,
    onClickIntro?: () => void,
    onClickNews?: () => void,
}

// main
const Footer = ({
    onClickBooking,
    onClickIntro,
    onClickNews,
}: FooterProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <Wrapper className={styles.wrapper}>
                <div className={styles.logo}>
                    <div className={styles.name}>Taxilientinh</div>
                </div>

                <div className={styles.menu}>
                    <Button onClick={onClickBooking}>Đặt xe</Button>
                    <Button onClick={onClickIntro}>Giới thiệu</Button>
                    <Button onClick={onClickNews}>Thông tin khuyến mại</Button>
                </div>

                <div className={styles.phones}>
                    <div>Hotline: <a href={`tel:${ENVS.phone.value}`}>{ENVS.phone.label}</a></div>
                    <div>CSKH: <a href="tel:+84931134670">0931.134.670</a></div>
                </div>

                <div className={styles.slogan}>
                    ĐC: Số 111, Quận Bình Thạnh, TP Hồ Chí Minh.
                </div>

                <div className={styles.bookingContainer}>
                    <Booking />
                </div>
            </Wrapper>
        </div>
    );
};

export default Footer;
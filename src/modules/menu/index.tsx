import React from 'react';

// resources
import XeImage from '../../resources/images/xe.png';
import Button from '../button';
import Wrapper from '../wrapper';

// styles
import styles from './styles.module.scss';

// interfaces
interface IMenuProps {
    onClickBooking?: () => void,
    onClickIntro?: () => void,
    onClickNews?: () => void,
    onClickCars?: () => void,
    onClickPricing?: () => void,
}

// main
const Menu = ({onClickBooking, onClickIntro, onClickNews, onClickCars, onClickPricing}: IMenuProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <img src={XeImage} alt="Xe"/>
            <Wrapper className={styles.wrapper}>
                <Button onClick={onClickBooking}>Đặt xe</Button>
                <Button onClick={onClickCars}>Giới thiệu các loại xe</Button>
                <Button onClick={onClickPricing}>Bảng giá</Button>
                <Button onClick={onClickIntro}>Giới thiệu dịch vụ</Button>
                <Button onClick={onClickNews}>Tin tức và khuyến mãi</Button>
            </Wrapper>
        </div>
    );
};

export default Menu;
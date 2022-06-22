import React from 'react';
import Wrapper from '../wrapper';

// resources
import TanSonNhatImage from '../../resources/images/tansonnhat.jpeg';
import BinhDuongImage from '../../resources/images/binhduong.jpeg';
import VungTauImage from '../../resources/images/vungtau.jpeg';
import DaLatImage from '../../resources/images/dalat.jpeg';
import DongNaiImage from '../../resources/images/dongnai.jpeg';
import CaMauImage from '../../resources/images/camau.jpeg';

// styles
import styles from './styles.module.scss';
import ENVS from '../../envs';

interface IToursProps {
    onClickBooking: () => void,
}

// main
const Tours = ({ onClickBooking }: IToursProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <Wrapper className={styles.wrapper}>
                <h3>Các tuyến xe phổ biến</h3>

                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.image} style={{ backgroundImage: `url(${TanSonNhatImage})` }} />
                        <div className={styles.label}>Sân bay Tân Sơn Nhất</div>
                        <div className={styles.action}>
                            <a href={`tel:${ENVS.phone.value}`}>Đặt xe đi ngay</a>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.image} style={{ backgroundImage: `url(${BinhDuongImage})` }} />
                        <div className={styles.label}>Xe đi Bình Dương 24/7</div>
                        <div className={styles.action}>
                            <a href={`tel:${ENVS.phone.value}`}>Đặt xe đi ngay</a>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.image} style={{ backgroundImage: `url(${VungTauImage})` }} />
                        <div className={styles.label}>Đi Vũng Tàu (đang ưu đãi về giá)</div>
                        <div className={styles.action}>
                            <a href={`tel:${ENVS.phone.value}`}>Đặt xe đi ngay</a>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.image} style={{ backgroundImage: `url(${DongNaiImage})` }} />
                        <div className={styles.label}>Xe đi Đồng Nai</div>
                        <div className={styles.action}>
                            <a href={`tel:${ENVS.phone.value}`}>Đặt xe đi ngay</a>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.image} style={{ backgroundImage: `url(${DaLatImage})` }} />
                        <div className={styles.label}>Du lịch Đà Lạt (hỗ trợ khứ hồi)</div>
                        <div className={styles.action}>
                            <a href={`tel:${ENVS.phone.value}`}>Đặt xe đi ngay</a>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.image} style={{ backgroundImage: `url(${CaMauImage})` }} />
                        <div className={styles.label}>Xe đi Cà Mau</div>
                        <div className={styles.action}>
                            <a href={`tel:${ENVS.phone.value}`}>Đặt xe đi ngay</a>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Tours;
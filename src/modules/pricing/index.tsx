import React from 'react';
import Wrapper from '../wrapper';

// styles
import styles from './styles.module.scss';

// interfaces
interface PricingProps {
    containerRef?: React.RefObject<HTMLDivElement>
}

// main
const Pricing = ({ containerRef }: PricingProps): JSX.Element => {
    return (
        <div className={styles.container} ref={containerRef}>
            <Wrapper className={styles.wrapper}>
                <h3 className={styles.title}>Bảng giá chi tiết 1 số điểm đến</h3>

                <div className={styles.table}>
                    <div className={styles.col}>
                        <div className={`${styles.headCell} ${styles.leftCell}`}>Điểm đến</div>
                        <div className={styles.leftCell}>Biên Hòa - Đồng Nai</div>
                        <div className={styles.leftCell}>Trảng Bom - Đồng Nai</div>
                        <div className={styles.leftCell}>Long Khánh - Đồng Nai</div>
                        <div className={styles.leftCell}>Long Thành - Đồng Nai</div>
                        <div className={styles.leftCell}>Nhơn Trạch - Đồng Nai</div>
                        <div className={styles.leftCell}>Bà Rịa - Vũng Tàu</div>
                        <div className={styles.leftCell}>Mỹ Tho - Tiền Giang</div>
                        <div className={styles.leftCell}>Gò Công - Tiền Giang</div>
                        <div className={styles.leftCell}>Cai Lậy - Tiền Giang</div>
                        <div className={styles.leftCell}>Chợ Gạo - Tiền Giang</div>
                        <div className={styles.leftCell}>Cái Bè - Tiền Giang</div>
                        <div className={styles.leftCell}>Mỹ Thuận - Tiền Giang</div>
                        <div className={styles.leftCell}>Châu Thành - Tiền Giang</div>
                        <div className={styles.leftCell}>Thủ Thừa - Long An</div>
                        <div className={styles.leftCell}>Tân An - Long An</div>
                        <div className={styles.leftCell}>Bến Lức - Long An</div>
                        <div className={styles.leftCell}>Đức Huệ - Long An</div>
                        <div className={styles.leftCell}>TP Bến Tre</div>
                        <div className={styles.leftCell}>Giồng Trôm - Bến Tre</div>
                        <div className={styles.leftCell}>Mỏ Cày - Bến Tre</div>
                        <div className={styles.leftCell}>Tp Tây Ninh</div>
                        <div className={styles.leftCell}>Hòa Thành - Tây Ninh</div>
                        <div className={styles.leftCell}>Châu Thành - Tây Ninh</div>
                        <div className={styles.leftCell}>Núi Bà Đen - Tây Ninh</div>
                        <div className={styles.leftCell}>Gò Dầu - Tây Ninh</div>
                        <div className={styles.leftCell}>Trảng Bàng - Tây Ninh</div>
                        <div className={styles.leftCell}>Thủ Dầu Một</div>
                        <div className={styles.leftCell}>Tân Uyên - Bình Dương</div>
                        <div className={styles.leftCell}>Bến Cát - Bình Dương</div>
                        <div className={styles.leftCell}>Dầu Tiếng - Bình Dương</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.headCell}>Số km</div>
                        <div className={styles.cell}>80</div>
                        <div className={styles.cell}>120</div>
                        <div className={styles.cell}>160</div>
                        <div className={styles.cell}>120</div>
                        <div className={styles.cell}>120</div>
                        <div className={styles.cell}>170</div>
                        <div className={styles.cell}>150</div>
                        <div className={styles.cell}>150</div>
                        <div className={styles.cell}>180</div>
                        <div className={styles.cell}>180</div>
                        <div className={styles.cell}>200</div>
                        <div className={styles.cell}>225</div>
                        <div className={styles.cell}>150</div>
                        <div className={styles.cell}>110</div>
                        <div className={styles.cell}>110</div>
                        <div className={styles.cell}>80</div>
                        <div className={styles.cell}>130</div>
                        <div className={styles.cell}>190</div>
                        <div className={styles.cell}>220</div>
                        <div className={styles.cell}>240</div>
                        <div className={styles.cell}>200</div>
                        <div className={styles.cell}>200</div>
                        <div className={styles.cell}>220</div>
                        <div className={styles.cell}>210</div>
                        <div className={styles.cell}>160</div>
                        <div className={styles.cell}>120</div>
                        <div className={styles.cell}>80</div>
                        <div className={styles.cell}>130</div>
                        <div className={styles.cell}>120</div>
                        <div className={styles.cell}>180</div>
                    </div>
                    <div className={styles.col}>
                        <div className={`${styles.headCell} ${styles.rightCell}`}>Giá</div>
                        <div className={styles.cell}>Từ 1.000.000đ</div>
                        <div className={styles.cell}>Từ 1.200.000đ</div>
                        <div className={styles.cell}>Từ 1.500.000đ</div>
                        <div className={styles.cell}>Từ 1.100.000đ</div>
                        <div className={styles.cell}>Từ 1.100.000đ</div>
                        <div className={styles.cell}>Từ 1.500.000đ</div>
                        <div className={styles.cell}>Từ 1.300.000đ</div>
                        <div className={styles.cell}>Từ 1.300.000đ</div>
                        <div className={styles.cell}>Từ 1.400.000đ</div>
                        <div className={styles.cell}>Từ 1.400.000đ</div>
                        <div className={styles.cell}>Từ 1.600.000đ</div>
                        <div className={styles.cell}>Từ 1.600.000đ</div>
                        <div className={styles.cell}>Từ 1.400.000đ</div>
                        <div className={styles.cell}>Từ 1.100.000đ</div>
                        <div className={styles.cell}>Từ 1.100.000đ</div>
                        <div className={styles.cell}>Từ 1.000.000đ</div>
                        <div className={styles.cell}>Từ 1.200.000đ</div>
                        <div className={styles.cell}>Từ 1.400.000đ</div>
                        <div className={styles.cell}>Từ 1.500.000đ</div>
                        <div className={styles.cell}>Từ 1.500.000đ</div>
                        <div className={styles.cell}>Từ 1.500.000đ</div>
                        <div className={styles.cell}>Từ 1.500.000đ</div>
                        <div className={styles.cell}>Từ 1.500.000đ</div>
                        <div className={styles.cell}>Từ 1.500.000đ</div>
                        <div className={styles.cell}>Từ 1.300.000đ</div>
                        <div className={styles.cell}>Từ 1.100.000đ</div>
                        <div className={styles.cell}>Từ 1.100.000đ</div>
                        <div className={styles.cell}>Từ 1.300.000đ</div>
                        <div className={styles.cell}>Từ 1.200.000đ</div>
                        <div className={styles.cell}>Từ 1.600.000đ</div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Pricing;
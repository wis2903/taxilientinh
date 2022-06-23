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

                <div className={`${styles.table} ${styles.tableHead}`}>
                    <div className={styles.col}>
                        <div className={`${styles.headCell} ${styles.leftCell}`}>Điểm đến</div>
                    </div>
                    <div className={styles.col}>
                        <div className={`${styles.headCell}`}>4 chỗ</div>
                    </div>
                    <div className={styles.col}>
                        <div className={`${styles.headCell} ${styles.rightCell}`}>7 chỗ</div>
                    </div>
                </div>
                <div className={`${styles.table} ${styles.tableCat}`}>
                    Khu vực miền Đông
                </div>
                <div className={`${styles.table} ${styles.tableList} ${styles.tableMid}`}>
                    <div className={styles.col}>
                        <div className={styles.leftCell}>Sài Gòn - Vũng Tàu</div>
                        <div className={styles.leftCell}>Sài Gòn - Long Hải</div>
                        <div className={styles.leftCell}>Sài Gòn - Bà Rịa</div>
                        <div className={styles.leftCell}>Sài Gòn - Xuyên Mộc</div>
                        <div className={styles.leftCell}>Sài Gòn - Đất Đỏ</div>
                        <div className={styles.leftCell}>Sài Gòn - Hồ Tràm</div>
                        <div className={styles.leftCell}>Sài Gòn - Bình Châu</div>
                        <div className={styles.leftCell}>Sài Gòn - Châu Pha</div>
                        <div className={styles.leftCell}>Sài Gòn - Châu Đức</div>
                        <div className={styles.leftCell}>Sài Gòn - Ngãi Giao</div>
                        <div className={styles.leftCell}>Sài Gòn - Phú Mỹ</div>
                        <div className={styles.leftCell}>Sài Gòn - Hắc Dịch</div>
                        <div className={styles.leftCell}>Sài Gòn - Long Khánh</div>
                        <div className={styles.leftCell}>Sài Gòn - Đồng Xoài</div>
                        <div className={styles.leftCell}>Sài Gòn - Mộc Bài</div>
                        <div className={styles.leftCell}>Sài Gòn - Tây Ninh</div>
                        <div className={styles.leftCell}>Sài Gòn - Phan Thiết</div>
                        <div className={styles.leftCell}>Sài Gòn - Đà Lạt</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.cell}>1.100.000</div>
                        <div className={styles.cell}>1.100.000</div>
                        <div className={styles.cell}>1.000.000</div>
                        <div className={styles.cell}>1.100.000</div>
                        <div className={styles.cell}>1.100.000</div>
                        <div className={styles.cell}>1.100.000</div>
                        <div className={styles.cell}>1.100.000</div>
                        <div className={styles.cell}>1.000.000</div>
                        <div className={styles.cell}>1.000.000</div>
                        <div className={styles.cell}>1.000.000</div>
                        <div className={styles.cell}>900.000</div>
                        <div className={styles.cell}>900.000</div>
                        <div className={styles.cell}>1.000.000</div>
                        <div className={styles.cell}>1.000.000</div>
                        <div className={styles.cell}>850.000</div>
                        <div className={styles.cell}>1.000.000</div>
                        <div className={styles.cell}>2.000.000</div>
                        <div className={styles.cell}>3.000.000</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>900.000</div>
                        <div className={styles.cell}>900.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.000.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>2.200.000</div>
                        <div className={styles.cell}>3.300.000</div>
                    </div>
                </div>
                <div className={`${styles.table} ${styles.tableCat}`}>
                    Khu vực miền Tây
                </div>
                <div className={`${styles.table} ${styles.tableList}`}>
                    <div className={styles.col}>
                        <div className={styles.leftCell}>Sài Gòn - Mỹ Tho</div>
                        <div className={styles.leftCell}>Sài Gòn - Cai Lậy</div>
                        <div className={styles.leftCell}>Sài Gòn - Cái Bè</div>
                        <div className={styles.leftCell}>Sài Gòn - Gò Công</div>
                        <div className={styles.leftCell}>Sài Gòn - Tân An</div>
                        <div className={styles.leftCell}>Sài Gòn - Bến Tre</div>
                        <div className={styles.leftCell}>Sài Gòn - Trà Vinh</div>
                        <div className={styles.leftCell}>Sài Gòn - Vĩnh Long</div>
                        <div className={styles.leftCell}>Sài Gòn - Cao Lãnh</div>
                        <div className={styles.leftCell}>Sài Gòn - Cần Thơ</div>
                        <div className={styles.leftCell}>Sài Gòn - Hậu Giang</div>
                        <div className={styles.leftCell}>Sài Gòn - Sóc Trăng</div>
                        <div className={styles.leftCell}>Sài Gòn - Châu Đốc</div>
                        <div className={styles.leftCell}>Sài Gòn - Rạch Giá</div>
                        <div className={styles.leftCell}>Sài Gòn - Bạc Liêu</div>
                        <div className={styles.leftCell}>Sài Gòn - Cà Mau</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.cell}>900.000</div>
                        <div className={styles.cell}>1.100.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>900.000</div>
                        <div className={styles.cell}>700.000</div>
                        <div className={styles.cell}>1.000.000</div>
                        <div className={styles.cell}>1.500.000</div>
                        <div className={styles.cell}>1.500.000</div>
                        <div className={styles.cell}>1.700.000</div>
                        <div className={styles.cell}>1.700.000</div>
                        <div className={styles.cell}>2.200.000</div>
                        <div className={styles.cell}>2.000.000</div>
                        <div className={styles.cell}>2.500.000</div>
                        <div className={styles.cell}>2.500.000</div>
                        <div className={styles.cell}>3.000.000</div>
                        <div className={styles.cell}>3.400.000</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.cell}>1.000.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.400.000</div>
                        <div className={styles.cell}>1.150.000</div>
                        <div className={styles.cell}>900.000</div>
                        <div className={styles.cell}>1.200.000</div>
                        <div className={styles.cell}>1.700.000</div>
                        <div className={styles.cell}>1.700.000</div>
                        <div className={styles.cell}>1.900.000</div>
                        <div className={styles.cell}>1.900.000</div>
                        <div className={styles.cell}>2.500.000</div>
                        <div className={styles.cell}>2.300.000</div>
                        <div className={styles.cell}>2.700.000</div>
                        <div className={styles.cell}>2.700.000</div>
                        <div className={styles.cell}>3.200.000</div>
                        <div className={styles.cell}>3.600.000</div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Pricing;
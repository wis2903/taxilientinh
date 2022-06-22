import React from 'react';
import Wrapper from '../wrapper';

// resources
import MaleIcon from '../../resources/images/male.png';
import FemaleIcon from '../../resources/images/female.png';

// styles
import styles from './styles.module.scss';

// main
const Feedbacks = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Wrapper className={styles.wrapper}>
                <h3>Nhận xét của khách hàng</h3>

                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.image}>
                            <img src={FemaleIcon} alt="Female" />
                        </div>
                        <p>&#34;Rất hài lòng về tài xế, vui tính, lái rất êm, không bị say xe trong cả chuyến đi. Tài xế rất nhiệt tình giúp đỡ vận chuyển đồ đạc. Sẽ tiếp tục ủng hộ trong các chuyến đi tới.&#34;</p>
                        <h3>Trần Thị Hải Yến - 32 tuổi.</h3>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.image}>
                            <img src={MaleIcon} alt="Male" />
                        </div>
                        <p>&#34;Xe đẹp, ngồi sướng. Với tôi thế là đủ.&#34;</p>
                        <h3>Phạm Thành Trung - 40 tuổi.</h3>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.image}>
                            <img src={FemaleIcon} alt="Female" />
                        </div>
                        <p>&#34;Đặt xe mấy lần bên này rồi, nói chung giá tốt. Tài xế nhiệt tình, chỉ cần thế thôi.&#34;</p>
                        <h3>Phạm Ngọc Hoa - 46 tuổi.</h3>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.image}>
                            <img src={MaleIcon} alt="Male" />
                        </div>
                        <p>&#34;Thỉnh thoảng đi Đà Lạt du lịch sẽ đặt xe bên này. Làm con xe 16 chỗ cho gia đình đi là nhất. Xe ngon, đường dài không lo bị say.&#34;</p>
                        <h3>Nguyễn Bá Sơn - 34 tuổi.</h3>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Feedbacks;
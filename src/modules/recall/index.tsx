import React from 'react';
import { isMobile } from 'react-device-detect';
import ENVS from '../../envs';
import Button from '../button';
import Wrapper from '../wrapper';

// styles
import styles from './styles.module.scss';

// interface
interface ReCallProps {
    onClick?: () => void,
    title?: string,
    buttonLabel?: string,
    backgroundColor?: string,
    className?: string,
}

// main
const ReCall = ({ className, onClick, title, buttonLabel, backgroundColor }: ReCallProps): JSX.Element => {
    return (
        <div className={`${styles.container} ${className}`} style={{ backgroundColor }}>
            <Wrapper className={styles.wrapper}>
                <h3>{title || 'Tận hưởng ngay dịch vụ chuyên nghiệp và nhiều ưu đãi'}</h3>

                <div>
                    {
                        isMobile
                        ?
                        <a href={`tel:${ENVS.phone.value}`}>{buttonLabel || 'Bắt đầu đặt xe'}</a>
                        :
                        <Button onClick={onClick}>{buttonLabel || 'Bắt đầu đặt xe'}</Button>
                    }
                    
                </div>
            </Wrapper>
        </div>
    );
};

export default ReCall;
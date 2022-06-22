import React from 'react';

// styles
import styles from './styles.module.scss';

// interface
interface IWrapperProps {
    className?: string,
    children: React.ReactNode,
    containerRef?: React.RefObject<HTMLDivElement>,
    hasShadow?: boolean,
}

// main
const Wrapper = ({ children, className, containerRef, hasShadow }: IWrapperProps): JSX.Element => {
    return (
        <div className={`${styles.container} ${className} ${hasShadow ? styles.hasShadow : ''}`} ref={containerRef}>
            {children}
        </div>
    );
};

export default Wrapper;
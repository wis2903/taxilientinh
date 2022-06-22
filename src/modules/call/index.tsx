import React from 'react';
import ENVS from '../../envs';

// resources
import PhoneIcon from '../../resources/images/phone-call.png';
import ChatIcon from '../../resources/images/chat.png';
import MessageIcon from '../../resources/images/email.png';

// styles
import styles from './styles.module.scss';
import { isMobile } from 'react-device-detect';

// main
const Call = (): JSX.Element => {
    return (
        <>
            {
                isMobile
                &&
                <a className={styles.messageContainer} href={`sms://${ENVS.phone.value}`}>
                    <img src={MessageIcon} alt="Message" />
                    Nhắn tin
                </a>
            }
            <a className={styles.zaloContainer} target="_blank" href="https://zalo.me/0932193765" rel="noreferrer">
                <img src={ChatIcon} alt="Chat" />
                Chat Zalo
            </a>

            {
                isMobile
                ?
                <a className={styles.callContainer} href={`tel:${ENVS.phone.value}`}>
                    <span className={styles.callMainContent}>
                        <img src={PhoneIcon} alt="Phone" />
                    </span>
                </a>
                :
                <a className={`${styles.callContainer} ${styles.desktop}`} href={`tel:${ENVS.phone.value}`}>
                    <span className={styles.callMainContent}>
                        <img src={PhoneIcon} alt="Phone" />
                    </span>
                    <span>{ENVS.phone.label}</span>
                </a>
            }
        </>
    );
};

export default Call;
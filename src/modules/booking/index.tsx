import emailjs from 'emailjs-com';
import moment from 'moment';
import React from 'react';
import ENVS from '../../envs';
import PlacesAutocompleteService from '../../services/places-autocomplete';
import Button from '../button';
import DatePicker from '../date-picker';
import Input from '../input';
import Modal from '../modal';
import Select from '../select';
import SuggestionInput from '../suggestion-input';
import Textarea from '../textarea';
import TimePicker from '../time-picker';

import { isMobile } from 'react-device-detect';

// resources
import PhoneIconBlue from '../../resources/images/phone-call-blue.png';
import PhoneIcon from '../../resources/images/phone-call.png';
import LocationIcon from '../../resources/images/place.png';
import XeImage from '../../resources/images/xe.png';

// styles
import styles from './styles.module.scss';

// interfaces
interface BookingProps {
    containerRef?: React.RefObject<HTMLDivElement>;
}
interface FormInput {
    value?: string | number;
    error?: string;
}
interface FormState {
    from?: FormInput;
    to?: FormInput;
    phone?: FormInput;
    time?: FormInput;
    timeBack?: FormInput;
    hm?: FormInput;
    hmBack?: FormInput;
    type?: FormInput;
    trip?: FormInput;
    note?: FormInput;
}

// main
const Booking = ({ containerRef }: BookingProps): JSX.Element => {
    const params = new URLSearchParams(window.location.search);

    const [isShowPopup, setIsShowPopup] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isShowForm, setIsShowForm] = React.useState<boolean>(true);
    const [formData, setFormData] = React.useState<FormState>({
        to: {
            value: params.get('to') || '',
        },
        hm: {
            value: `${moment().format('HH')}:${moment().format('mm')}`,
        },
        hmBack: {
            value: `${moment().add(1, 'd').format('HH')}:${moment().format('mm')}`,
        },
    });

    const timeBackAPIRef = React.useRef<unknown>();

    const validate = (): boolean => {
        let flag = true;

        if (!formData.from?.value) {
            flag = false;
            setFormData((data) => ({
                ...data,
                from: {
                    ...data.from,
                    error: 'empty',
                },
            }));
        }

        if (!formData.to?.value) {
            flag = false;
            setFormData((data) => ({
                ...data,
                to: {
                    ...data.to,
                    error: 'empty',
                },
            }));
        }

        if (!formData.phone?.value) {
            flag = false;
            setFormData((data) => ({
                ...data,
                phone: {
                    ...data.phone,
                    error: 'empty',
                },
            }));
        }

        if (!formData.time?.value) {
            flag = false;
            setFormData((data) => ({
                ...data,
                time: {
                    ...data.time,
                    error: 'empty',
                },
            }));
        }

        if (!formData.type?.value) {
            flag = false;
            setFormData((data) => ({
                ...data,
                type: {
                    ...data.type,
                    error: 'empty',
                },
            }));
        }

        if (!formData.trip?.value) {
            flag = false;
            setFormData((data) => ({
                ...data,
                trip: {
                    ...data.type,
                    error: 'empty',
                },
            }));
        }

        return flag;
    };

    const submit = async (): Promise<void> => {
        if (isLoading || !validate()) return;
        setIsLoading(true);
        try {
            await emailjs.send(
                'service_zfis4me',
                'template_zo0xqax',
                {
                    phone: formData.phone?.value,
                    address_from: formData.from?.value,
                    address_to: formData.to?.value,
                    time: `${formData.time?.value}, ${formData.hm?.value}`,
                    timeBack:
                        formData.trip?.value === 'round-trip'
                            ? `${formData.timeBack?.value}, ${formData.hmBack?.value}`
                            : '(không có)',
                    type: `${formData.type?.value} chỗ`,
                    trip: `${formData.trip?.value === 'round-trip' ? 'Khứ hồi' : 'Một chiều'}`,
                    note: `${formData.note?.value || '(không có)'}`,
                },
                'EFSLtgWuJ_GUr8dJ1'
            );
            setIsLoading(false);
            setIsShowPopup(true);
        } catch (e) {
            //handle error
            setIsLoading(false);
            setIsShowPopup(true);
        }
    };

    const handleGetPrediction = async (
        input: string
    ): Promise<{ label: string; value: string }[]> => {
        const addresses = await PlacesAutocompleteService.getInstance().getPredictions(input);
        return addresses.map((add) => ({ label: add, value: add }));
    };

    return (
        <>
            <div className={styles.container} ref={containerRef}>
                <div className={styles.call}>
                    <a href={`tel:${ENVS.phone.value}`}>
                        <img src={PhoneIconBlue} alt="Phone" />
                        {!isMobile ? ENVS.phone.label : 'Liên hệ tổng đài'}
                    </a>
                </div>
                <div className={styles.or}>hoặc</div>
                <div className={styles.book}>
                    <h3>Đăng ký tổng đài gọi lại</h3>

                    <div className={styles.form}>
                        <div className={styles.bg}>
                            <img src={XeImage} alt="Xe" />
                        </div>

                        {isShowForm ? (
                            <div>
                                {/* <div
                                    className={`${styles.inputGroup} ${styles.trip} ${
                                        formData.from?.error ? styles.hasError : ''
                                    }`}
                                >
                                    <Button
                                        className={
                                            formData.trip?.value !== 'round-trip'
                                                ? styles.active
                                                : ''
                                        }
                                        onClick={(): void => {
                                            setFormData((data) => ({
                                                ...data,
                                                trip: {
                                                    value: 'one-way',
                                                    error: '',
                                                },
                                            }));
                                        }}
                                    >
                                        1 chiều
                                    </Button>
                                    <Button
                                        className={
                                            formData.trip?.value === 'round-trip'
                                                ? styles.active
                                                : ''
                                        }
                                        onClick={(): void => {
                                            setFormData((data) => ({
                                                ...data,
                                                trip: {
                                                    value: 'round-trip',
                                                    error: '',
                                                },
                                            }));
                                        }}
                                    >
                                        Khứ hồi
                                    </Button>
                                </div> */}

                                <div
                                    className={`${styles.inputGroup} ${
                                        formData.from?.error ? styles.hasError : ''
                                    }`}
                                >
                                    <SuggestionInput
                                        label="Điểm đón"
                                        className={styles.input}
                                        onChanged={(value): void => {
                                            setFormData((data) => ({
                                                ...data,
                                                from: {
                                                    value,
                                                    error: '',
                                                },
                                            }));
                                        }}
                                        getPredictionFunc={handleGetPrediction}
                                    />
                                    <img src={LocationIcon} alt="Location" />
                                    {!!formData.from?.error && (
                                        <div className={styles.error}>Vui lòng nhập điểm đón</div>
                                    )}
                                </div>

                                <div
                                    className={`${styles.inputGroup} ${
                                        formData.to?.error ? styles.hasError : ''
                                    }`}
                                >
                                    <SuggestionInput
                                        label="Điểm đến"
                                        defaultValue={params.get('to') || ''}
                                        className={styles.input}
                                        onChanged={(value): void => {
                                            setFormData((data) => ({
                                                ...data,
                                                to: {
                                                    value,
                                                    error: '',
                                                },
                                            }));
                                        }}
                                        getPredictionFunc={handleGetPrediction}
                                    />
                                    <img src={LocationIcon} alt="Location" />
                                    {!!formData.to?.error && (
                                        <div className={styles.error}>Vui lòng nhập điểm đến</div>
                                    )}
                                </div>

                                <div
                                    className={`${styles.inputGroup} ${
                                        formData.phone?.error ? styles.hasError : ''
                                    }`}
                                >
                                    <Input
                                        containerClassName={styles.input}
                                        type="tel"
                                        label="Số điện thoại"
                                        onTextChange={(value): void => {
                                            setFormData((data) => ({
                                                ...data,
                                                phone: {
                                                    value,
                                                    error: '',
                                                },
                                            }));
                                        }}
                                    />
                                    <img src={PhoneIcon} alt="Phone" />
                                    {!!formData.phone?.error && (
                                        <div className={styles.error}>
                                            Vui lòng nhập số điện thoại
                                        </div>
                                    )}
                                </div>

                                <div
                                    className={`${styles.inputGroup} ${
                                        formData.trip?.error ? styles.hasError : ''
                                    }`}
                                >
                                    <Select
                                        className={styles.select}
                                        emptySelectionLabel="Loại chặng"
                                        onChange={(option): void => {
                                            setFormData((data) => ({
                                                ...data,
                                                trip: {
                                                    value: String(option.value),
                                                    error: '',
                                                },
                                            }));
                                        }}
                                        options={[
                                            {
                                                label: 'Một chiều',
                                                value: 'one-way',
                                                selected: formData.trip?.value === 'one-way',
                                            },
                                            {
                                                label: 'Khứ hồi',
                                                value: 'round-trip',
                                                selected: formData.trip?.value === 'round-trip',
                                            },
                                        ]}
                                    />
                                    {!!formData.trip?.error && (
                                        <div className={styles.error}>Vui lòng chọn loại chặng</div>
                                    )}
                                </div>

                                <div
                                    className={`${styles.inputGroup} ${
                                        formData.type?.error ? styles.hasError : ''
                                    }`}
                                >
                                    <Select
                                        className={styles.select}
                                        emptySelectionLabel="Loại xe"
                                        onChange={(option): void => {
                                            setFormData((data) => ({
                                                ...data,
                                                type: {
                                                    value: String(option.value),
                                                    error: '',
                                                },
                                            }));
                                        }}
                                        options={[
                                            {
                                                label: 'Xe 4 chỗ',
                                                value: '4',
                                                selected: formData.type?.value === '4',
                                            },
                                            {
                                                label: 'Xe 7 chỗ',
                                                value: '7',
                                                selected: formData.type?.value === '7',
                                            },
                                            {
                                                label: 'Xe 16 chỗ',
                                                value: '16',
                                                selected: formData.type?.value === '16',
                                            },
                                            {
                                                label: 'Xe 29 chỗ',
                                                value: '29',
                                                selected: formData.type?.value === '29',
                                            },
                                            {
                                                label: 'Xe 45 chỗ',
                                                value: '45',
                                                selected: formData.type?.value === '45',
                                            },
                                        ]}
                                    />
                                    {!!formData.type?.error && (
                                        <div className={styles.error}>Vui lòng chọn loại xe</div>
                                    )}
                                </div>

                                <div className={styles.inputGroupFlex}>
                                    <DatePicker
                                        title="Ngày đi"
                                        onChange={(ts): void => {
                                            setFormData((data) => ({
                                                ...data,
                                                time: {
                                                    value: moment(ts).format('DD/MM/YYYY'),
                                                    error: '',
                                                },
                                                timeBack: {
                                                    value: moment(ts)
                                                        .add(1, 'd')
                                                        .format('DD/MM/YYYY'),
                                                    error: '',
                                                },
                                            }));
                                            Object(timeBackAPIRef.current).updateValue?.(
                                                moment(ts).add(1, 'd').valueOf()
                                            );
                                        }}
                                    />
                                    <TimePicker
                                        title="Giờ đi"
                                        onChange={(val): void => {
                                            setFormData((data) => ({
                                                ...data,
                                                hm: {
                                                    value: val,
                                                    error: '',
                                                },
                                            }));
                                        }}
                                    />
                                </div>

                                {formData.trip?.value === 'round-trip' && (
                                    <div className={styles.inputGroupFlex}>
                                        <DatePicker
                                            onLoad={(api): void => {
                                                timeBackAPIRef.current = api;
                                                if (formData.timeBack?.value) {
                                                    Object(api).updateValue?.(
                                                        moment(
                                                            formData.timeBack?.value,
                                                            'DD/MM/YYYY'
                                                        ).valueOf()
                                                    );
                                                }
                                            }}
                                            title="Ngày về"
                                            min={
                                                formData.time?.value
                                                    ? moment(
                                                          formData.time.value,
                                                          'DD/MM/YYYY'
                                                      ).valueOf()
                                                    : undefined
                                            }
                                            onChange={(ts): void => {
                                                setFormData((data) => ({
                                                    ...data,
                                                    timeBack: {
                                                        value: moment(ts).format('DD/MM/YYYY'),
                                                        error: '',
                                                    },
                                                }));
                                            }}
                                        />
                                        <TimePicker
                                            title="Giờ về"
                                            onChange={(val): void => {
                                                setFormData((data) => ({
                                                    ...data,
                                                    hmBack: {
                                                        value: val,
                                                        error: '',
                                                    },
                                                }));
                                            }}
                                        />
                                    </div>
                                )}

                                <div
                                    className={`${styles.inputGroup} ${
                                        formData.note?.error ? styles.hasError : ''
                                    }`}
                                >
                                    <Textarea
                                        label="Ghi chú"
                                        onTextChange={(text): void => {
                                            setFormData((data) => ({
                                                ...data,
                                                note: {
                                                    value: text,
                                                    error: '',
                                                },
                                            }));
                                        }}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className={styles.formPlaceholder} />
                        )}
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <Button className={styles.action} onClick={submit}>
                        {isLoading ? 'Đang xử lý ...' : 'Đặt xe'}
                    </Button>
                </div>
            </div>

            {isShowPopup && (
                <Modal
                    title="Đăng ký thành công"
                    onClose={(): void => {
                        setIsShowPopup(false);
                        setFormData((data) => ({
                            ...data,
                            from: {},
                            to: {
                                value: params.get('to') || '',
                            },
                            phone: {},
                            trip: {},
                            type: {},
                            time: {},
                            timeBack: {},
                            hm: {
                                value: `${moment().format('HH')}:${moment().format('mm')}`,
                            },
                            hmBack: {
                                value: `${moment().add(1, 'd').format('HH')}:${moment().format(
                                    'mm'
                                )}`,
                            },
                            note: {},
                        }));
                        setIsShowForm(false);
                        setTimeout(() => {
                            setIsShowForm(true);
                        }, 100);
                    }}
                >
                    <p className={styles.comingSoon}>
                        Chúng tôi sẽ liên hệ lại với quý khách ngay sau ít phút. Xin chân thành cảm
                        ơn.
                    </p>
                    <div className={styles.summary}>
                        <div>
                            Điểm đón: <span>{formData.from?.value}</span>
                        </div>
                        <div>
                            Điểm đến: <span>{formData.to?.value}</span>
                        </div>
                        <div>
                            Loại chặng :{' '}
                            <span>
                                {formData.trip?.value === 'round-trip' ? 'Khứ hồi' : 'Một chiều'}
                            </span>
                        </div>
                        <div>
                            Số điện thoại: <span>{formData.phone?.value}</span>
                        </div>
                        <div>
                            Ngày đi:{' '}
                            <span>
                                {formData.time?.value} - {formData.hm?.value}
                            </span>
                        </div>

                        {formData.trip?.value === 'round-trip' && (
                            <div>
                                Ngày về:{' '}
                                <span>
                                    {formData.timeBack?.value} - {formData.hmBack?.value}
                                </span>
                            </div>
                        )}

                        <div>
                            Loại xe: <span>{formData.type?.value} chỗ</span>
                        </div>
                        <div>
                            Ghi chú : <span>{formData.note?.value || '(không có)'}</span>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Booking;

import React from 'react';
import ENVS from '../../envs';
import { animateScroll } from '../../helpers/dom.helpers';

// resources
import XeImage from '../../resources/images/xe.png';

// modules
import Header from '../../modules/header';
import Preview from '../../modules/preview';
import Booking from '../../modules/booking';
import Services from '../../modules/services';
import News from '../../modules/news';
import Footer from '../../modules/footer';
import ReCall from '../../modules/recall';
import Carousel from '../../modules/carousel';
import Cars from '../../modules/cars';
import Call from '../../modules/call';
import Tours from '../../modules/tours';
import Feedbacks from '../../modules/feedbacks';
import Menu from '../../modules/menu';
import Wrapper from '../../modules/wrapper';
import Tags from '../../modules/tags';

// styles
import styles from './styles.module.scss';
import Pricing from '../../modules/pricing';

// main
const Home = (): JSX.Element => {
    const bookingRef = React.useRef<HTMLDivElement>(null);
    const servicesRef = React.useRef<HTMLDivElement>(null);
    const newsRef = React.useRef<HTMLDivElement>(null);
    const carsRef = React.useRef<HTMLDivElement>(null);
    const pricingRef = React.useRef<HTMLDivElement>(null);

    const scrollTo = (element: HTMLDivElement): void => {
        const initialPosition = window.scrollY;

        if (element) {
            animateScroll({
                targetPosition: element.offsetTop,
                initialPosition,
                duration: 1200,
            });
        }
    };

    const handleScrollToCars = (): void => {
        if (carsRef.current) {
            scrollTo(carsRef.current);
        }
    };

    const handleScrollToPricing = (): void => {
        if (pricingRef.current) {
            scrollTo(pricingRef.current);
        }
    };

    const handleScrollToBooking = (): void => {
        if (bookingRef.current) {
            scrollTo(bookingRef.current);
        }
    };

    const handleScrollToServices = (): void => {
        if (servicesRef.current) {
            scrollTo(servicesRef.current);
        }
    };

    const handleScrollToNews = (): void => {
        if (newsRef.current) {
            scrollTo(newsRef.current);
        }
    };

    const setupGoogleMapAutoComplete = (): void => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${ENVS.googleMapAutoCompleteApiKey}&libraries=places`;
        document.head.appendChild(script);
    };

    const scrollToBookingIfHasQueryParam = (): void => {
        const params = new URLSearchParams(window.location.search);
        if(params.get('to')) handleScrollToBooking();
    };

    React.useEffect(() => {
        setupGoogleMapAutoComplete();
        scrollToBookingIfHasQueryParam();
    }, []);

    return (
        <div className={styles.container}>
            <img className={styles.background} src={XeImage} alt="" />

            <div className={styles.wrapper}>
                <Header onClickAction={handleScrollToBooking} />
                <Menu
                    onClickBooking={handleScrollToBooking}
                    onClickIntro={handleScrollToServices}
                    onClickNews={handleScrollToNews}
                    onClickCars={handleScrollToCars}
                    onClickPricing={handleScrollToPricing}
                />
                <Preview />
                <Carousel autoplay />
                <Wrapper hasShadow className={styles.bookingContainer} containerRef={bookingRef}>
                    <div className={styles.introduction}>
                        <img className={styles.decor} src={XeImage} alt="" />

                        <h3>Dịch vụ cung cấp</h3>

                        <div className={styles.item}>
                            <span />
                            Cung cấp dịch vụ <span>xe khách</span>, <span>4 chỗ</span>, <span>7 chỗ</span>, <span>16 chỗ</span> ...
                        </div>

                        <div className={styles.item}>
                            <span />
                            Cung cấp dịch vụ <span>taxi sân bay</span>.
                        </div>

                        <div className={styles.item}>
                            <span />
                            Cung cấp dịch vụ taxi <span>các tỉnh thành</span> nhiều khu vực.
                        </div>

                        <div className={styles.item}>
                            <span />
                            Cam kết <span>giá cả phải chăng</span>, cạnh tranh nhất thị trường.
                        </div>

                        <div className={styles.item}>
                            <span />
                            Tài xế phục vụ <span>tận tình</span>.
                        </div>

                        <div className={styles.item}>
                            <span />
                            Xe đón <span>nhanh chóng, gọi là có</span>.
                        </div>

                        <div className={styles.item}>
                            <span />
                            Ưu đãi khi <span>đi tỉnh, đường dài</span>.
                        </div>

                        <div className={styles.item}>
                            <span />
                            Không phí phát sinh.
                        </div>

                        <div className={styles.item}>
                            <span />
                            Các dòng xe <span>đảm bảo chất lượng</span>.
                        </div>
                    </div>
                    <Booking />
                </Wrapper>
                <Tags />
                <ReCall
                    onClick={handleScrollToBooking}
                    title="Bắt đầu đặt xe để trải nghiệm dịch vụ tuyệt vời"
                    buttonLabel="Đặt xe đi ngay"
                />
                <Cars containerRef={carsRef} />
                <ReCall
                    onClick={handleScrollToBooking}
                    title="Nhận báo giá chi tiết các loại xe cho chuyến đi của bạn"
                    buttonLabel="Nhận báo giá"
                />
                <Pricing containerRef={pricingRef}/>
                <ReCall
                    onClick={handleScrollToBooking}
                    title="Nhận báo giá cho chuyến đi của bạn"
                    buttonLabel="Nhận báo giá"
                />
                <Tours onClickBooking={handleScrollToBooking} />
                <ReCall
                    onClick={handleScrollToBooking}
                    title="Nhận báo giá chi tiết các loại xe cho chuyến đi của bạn"
                    buttonLabel="Nhận báo giá"
                />
                <Services containerRef={servicesRef} />
                <ReCall
                    onClick={handleScrollToBooking}
                    title="Bắt đầu đặt xe để nhận thêm nhiều dịch vụ ưu đãi"
                    buttonLabel="Bắt đầu đặt xe"
                />
                <Feedbacks />
                <ReCall
                    onClick={handleScrollToBooking}
                    title="Bắt đầu đặt xe để trải nghiệm dịch vụ tuyệt vời"
                    buttonLabel="Bắt đầu đặt xe"
                />
                <News containerRef={newsRef} />
                <ReCall onClick={handleScrollToBooking} />
                <Footer
                    onClickBooking={handleScrollToBooking}
                    onClickIntro={handleScrollToServices}
                    onClickNews={handleScrollToNews}
                />

                <Call />
            </div>
        </div>
    );
};

export default Home;
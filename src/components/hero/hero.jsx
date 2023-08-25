import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './hero.scss'
import Navbar from "../../components/navbar/navbar"


function Hero() {

    return (
        <section className='hero-section'>
            <Navbar />
            <Swiper

                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='SliderOne'>

                    <div className="hero-wrapper">
                        <div className="container">

                            <div className="hero-about">
                                <div className="hero-brand">
                                    <h4 className='hero-brand-h4'>Filmagnet</h4>
                                </div>

                                <div className="hero-title">
                                    <h1 className='hero-title-h1'>Filmagnet Unlimited Entertainment, Movies, TVs shows, & More.</h1>
                                </div>

                                <div className="hero-info">
                                    <div className="hero-info-dramma">
                                        <h5 className='hero-info-dramma-h5'>Movie</h5>
                                    </div>

                                    <div className="hero-info-quality">
                                        <h5 className='hero-info-quality-h5'>FHD</h5>
                                    </div>

                                    <div className="hero-info-type">
                                        <h5 className='hero-info-type-h5'>Action, Drama</h5>
                                    </div>

                                    <div className="hero-info-calendar">
                                        <h5 className='hero-info-calendar-h5'>2023</h5>
                                    </div>
                                </div>

                                <div className="hero-play">
                                    <div className="hero-play-wrapper">
                                        <button className='hero-play-btn'>Play Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide className='SliderTwo'>

                    <div className="hero-wrapper">
                        <div className="container">

                            <div className="hero-about">
                                <div className="hero-brand">
                                    <h4 className='hero-brand-h4'>Filmagnet</h4>
                                </div>

                                <div className="hero-title">
                                    <h1 className='hero-title-h1'>Filmagnet Unlimited Entertainment, Movies, TVs shows, & More.</h1>
                                </div>

                                <div className="hero-info">
                                    <div className="hero-info-dramma">
                                        <h5 className='hero-info-dramma-h5'>Movie</h5>
                                    </div>

                                    <div className="hero-info-quality">
                                        <h5 className='hero-info-quality-h5'>FHD</h5>
                                    </div>

                                    <div className="hero-info-type">
                                        <h5 className='hero-info-type-h5'>Action, Drama</h5>
                                    </div>

                                    <div className="hero-info-calendar">
                                        <h5 className='hero-info-calendar-h5'>2023</h5>
                                    </div>
                                </div>

                                <div className="hero-play">
                                    <div className="hero-play-wrapper">
                                        <button className='hero-play-btn'>Play Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='SliderThree'>

                    <div className="hero-wrapper">
                        <div className="container">

                            <div className="hero-about">
                                <div className="hero-brand">
                                    <h4 className='hero-brand-h4'>Filmagnet</h4>
                                </div>

                                <div className="hero-title">
                                    <h1 className='hero-title-h1'>Filmagnet Unlimited Entertainment, Movies, TVs shows, & More.</h1>
                                </div>

                                <div className="hero-info">
                                    <div className="hero-info-dramma">
                                        <h5 className='hero-info-dramma-h5'>Movie</h5>
                                    </div>

                                    <div className="hero-info-quality">
                                        <h5 className='hero-info-quality-h5'>FHD</h5>
                                    </div>

                                    <div className="hero-info-type">
                                        <h5 className='hero-info-type-h5'>Action, Drama</h5>
                                    </div>

                                    <div className="hero-info-calendar">
                                        <h5 className='hero-info-calendar-h5'>2023</h5>
                                    </div>
                                </div>

                                <div className="hero-play">
                                    <div className="hero-play-wrapper">
                                        <button className='hero-play-btn'>Play Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>


        </section>
    )
}

export default Hero
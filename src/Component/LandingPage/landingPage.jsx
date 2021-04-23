import React from 'react';
import '../LandingPage/landingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css'
// SwiperCore.use([Autoplay]);

const LandingPage = () => {
    return(
        <div className="landing-page">
            <div className="item-1">
                <div className="img-fill">
                    <div className="text-content">
                        <p>Let's find you the home you would love</p>
                        <div className="bottom-text">
                            <h4>Buy</h4>
                            <h4>Rent</h4>
                            <h4>Sale</h4>
                        </div>
                       
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            {/* <Swiper slidesPerView={1}
            spaceBetween={30}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            >
                <SwiperSlide>
                    <div className="item-1">
                        <div className="img-fill">
                            <div className="text-content">
                                <p>Let's find you the home you would love</p>
                                <div className="bottom-text">
                                    <h4>BUY</h4>
                                    <h4>RENT</h4>
                                    <h4>SALE</h4>
                                </div>
                                <button>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item-2">
                        <div className="img-fill">
                            <div className="text-content">
                                <p>Let's find you a home you would love</p>
                                <h4>BUY.</h4>
                                <h4>RENT.</h4>
                                <h4>SALE</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item-3">
                        <div className="img-fill">
                            <div className="text-content">
                                <p>Let's find you a home you would love</p>
                                <h4>BUY.</h4>
                                <h4>RENT.</h4>
                                <h4>SALE</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
             */}
            
            {/* end of hero page */}

            <div className="banner">
                <div className="container">
                    <banner className="banner-content">
                        <div className="banner-text">
                            <h3>Request for an inspection right now!</h3>
                            <p>We are always ready to hear from you</p>
                        </div>
                        
                        <div className="phone-no">
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                            <p className="number">+234 816 911 4001</p>
                        </div>
                       
                    </banner>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;


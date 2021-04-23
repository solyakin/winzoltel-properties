import React from 'react';
import '../properties/properties.css';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css'
import { Container, Figure } from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
SwiperCore.use([Autoplay]);

const Properties = () => {
    return(
        <div className="properties">
            <Container>
                <h2>Available Properties</h2>
                <Swiper className="desktop" slidesPerView={3}
                    spaceBetween={10}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}>
                    <SwiperSlide>
                        <div className="item-2">
                            <Figure>
                                <img src={image1} alt="title"/>
                                <FigureCaption>
                                    <p>3-Bedroom semi-detached </p>
                                    <strong>#63,000,000</strong>
                                </FigureCaption>
                            </Figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-2">
                            <Figure>
                                <img src={image2} alt="title"/>
                                <FigureCaption>
                                    <p>4-Bedroom semi-detached </p>
                                    <strong>#63,000,000</strong>
                                </FigureCaption>
                            </Figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-2">
                            <Figure>
                                <img src={image3} alt="title"/>
                                <FigureCaption>
                                    <p>2-Bedroom semi-detached </p>
                                    <strong>#63,000,000</strong>
                                </FigureCaption>
                            </Figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-2">
                            <Figure>
                                <img src={image2} alt="title"/>
                                <FigureCaption>
                                    <p>5 Bedroom duplex</p>
                                    <strong>#63,000,000</strong>
                                </FigureCaption>
                            </Figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-2">
                            <Figure>
                                <img src={image1} alt="title"/>
                                <FigureCaption>
                                    <p><p>3-Bedroom semi-detached </p></p>
                                    <strong>#63,000,000</strong>
                                </FigureCaption>
                            </Figure>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <Swiper className="mobile" slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}>
                    <SwiperSlide>
                        <div className="item-2">
                            <Figure>
                                <img src={image1} alt="title"/>
                                <FigureCaption>
                                    <p>3-Bedroom semi-detached </p>
                                    <strong>#63,000,000</strong>
                                </FigureCaption>
                            </Figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-2">
                            <Figure>
                                <img src={image2} alt="title"/>
                                <FigureCaption>
                                    <p>4-Bedroom semi-detached </p>
                                    <strong>#63,000,000</strong>
                                </FigureCaption>
                            </Figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-2">
                            <Figure>
                                <img src={image3} alt="title"/>
                                <FigureCaption>
                                    <p>2-Bedroom semi-detached </p>
                                    <strong>#63,000,000</strong>
                                </FigureCaption>
                            </Figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-2">
                            <Figure>
                                <img src={image2} alt="title"/>
                                <FigureCaption>
                                    <p>5 Bedroom duplex</p>
                                    <strong>#63,000,000</strong>
                                </FigureCaption>
                            </Figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item-2">
                            <Figure>
                                <img src={image1} alt="title"/>
                                <FigureCaption>
                                    <p><p>3-Bedroom semi-detached </p></p>
                                    <strong>#63,000,000</strong>
                                </FigureCaption>
                            </Figure>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </Container>
        </div>
    )
}

export default Properties;
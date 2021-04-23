import React from 'react';
import '../AboutUsPage/about-us.css';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/header';
import TopBannner from './topBanner/topbanner';
import image from '../assets/building.jpg';
import Service from '../service/service';
import Footer from '../footer/footer';
import CopyRight from '../copyright/copyright';

const AboutUs = () => {
    return(
        <div className="about-us">
            <Header/>
            <TopBannner/>
            <section className="about">
                <Container>
                    <Row lg={2} xs={1}>
                        <Col>
                            <div className="right-content">
                                <h2>Get to know about <span>our company</span></h2>
                                <p>Fusce nec ultrices lectus. Duis nec scelerisque risus. Ut id tempor turpis, ac dignissim ipsum. Nulla ullamcorper, ipsum vel condimentum congue, mi odio vehicula tellus, sit amet malesuada justo sem.
                                </p> 
                                <p>Pellentesque in sagittis lacus, vel auctor sem. Quisque eu quam eleifend, ullamcorper dui nec, luctus quam.</p>
                                <button>Read More</button>
                            </div>
                        </Col>
                        <Col>
                            <div className="left-image">
                                <img src={image} alt="image"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about-service">
                <Service/>
            </section>
            <Footer/>
            <CopyRight/>
        </div>
    )
}

export default AboutUs;
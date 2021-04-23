import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Container } from 'react-bootstrap';
import Header from '../Header/header';
import '../ContactPage/contact.css';
import Footer from '../footer/footer';
import CopyRight from '../copyright/copyright';
const ContactPage = () => {
    return(
        <div className="contact-page">
            <Header/>
            <div className="top-banner">
                <div className="title">
                    <Container>
                        <h2>Contact Us</h2>
                        <p>FEEL FREE TO SEND US A MESSAGE NOW!</p>
                    </Container>
                </div>  
            </div>
            <section className="contact-wrapper">
                <Container>
                    <Row lg={3} md={2} xs={1}>
                        <Col>
                            <FontAwesomeIcon icon={faPhone}/>
                            <h4>Phone</h4>
                            <p className="text-align-center">Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec cursus augue.</p>
                            <span>081-691-14001</span>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <h4>Email</h4>
                            <p className="text-align-center">Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec cursus augue.</p>
                            <span>info@company.com</span>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            <h4>Address</h4>
                            <p className="text-align-center">No. 14b Ayodele Fanoiki, Magodo Phase 1, Lagos Nigeria</p>
                            <span>View on google map</span>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer/>
            <CopyRight/>
        </div>
    )
}

export default ContactPage;
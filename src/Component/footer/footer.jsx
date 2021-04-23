import React from 'react';
import '../footer/footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faMapMarkerAlt, faPhoneAlt, faEnvelope, faArrowRight, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';

const Footer = () =>{
    return(
        <div className="footer">
            <Container>
                <Row lg={4} md={2} xs={1}>
                    <Col>
                        <h3>Real Properties</h3>
                        <p className="footer-text">We hold our customers in high esteem which is why our core values are integrity, excellence and transparency.</p>
                        <div className="social-media-icons">
                            <FontAwesomeIcon icon={['far', 'facebook']} />
                        </div>
                    </Col>
                    <Col>
                        <h3>Our Company</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faArrowsAltV}/>who we are</li>
                            <li><FontAwesomeIcon icon={faArrowsAltV}/>Properties</li>
                            <li><FontAwesomeIcon icon={faArrowsAltV}/>our services</li>
                            <li><FontAwesomeIcon icon={faArrowsAltV}/>contact us</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Our services</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faArrowsAltV}/>Buying of Properties</li>
                            <li><FontAwesomeIcon icon={faArrowsAltV}/>Selling of Properties</li>
                            <li><FontAwesomeIcon icon={faArrowsAltV}/>Renting of properties</li>
                            <li><FontAwesomeIcon icon={faArrowsAltV}/>Properties Management</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Contact Us</h3>
                        <div className="social-media-icons">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <p>14 Ayodele Fanoiki Magodo Phase 1, Lagos</p>
                        </div>
                        <div className="social-media-icons">
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            <p>+234-816-911-4001</p>
                        </div>
                        <div className="social-media-icons">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>salesproperites@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;
import React from 'react';
import '../service/service.css';
import { faHandshake, faWallet, faStore, faGift, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container } from 'react-bootstrap';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Service = () => {
    return(
        <div className="services">
            <h3>Our Services</h3>
            <div className="service-content">
                <Container>
                    <Row lg={3} md={2} xs={1}>
                        <Col>
                            <div className="service-wrapper">
                                <img src={image1} alt=""/>  
                                <div className="service-text">
                                    <FontAwesomeIcon icon={faWallet}/>
                                    <h4>Selling</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae et fugiat cupiditate enim ab tenetur laudantium aliquid.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                        <div className="service-wrapper">
                            <img src={image2} alt=""/>
                            <div className="service-text">
                                <FontAwesomeIcon icon={faHandshake}/>
                                <h4>Buying</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae et fugiat cupiditate enim ab tenetur laudantium aliquid.</p>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <div className="service-wrapper">
                            <img src={image3} alt=""/>
                            <div className="service-text">
                                <FontAwesomeIcon icon={faHouseUser}/>
                                <h4>Renting</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae et fugiat cupiditate enim ab tenetur laudantium aliquid.</p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Service;
import React from 'react';
import '../testimonies/testimonies.css'
import { Row, Col, Figure, Container } from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
const Testimonies = () => {
    return(
        <div className="testimonies">
            <Container>
                <h1>What they say <span>about us</span></h1>
                <h3>TESTIMONIALS FROM OUR GREATEST CLIENTS</h3>
                <Row lg={2} xs={1}>
                    <Col>
                        <Figure>
                            <FigureCaption>
                                <h5>George Imeh</h5>
                                <h6>Chief Financial Officer</h6>
                                <p><FontAwesomeIcon icon={faQuoteLeft}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, assumenda doloremque officiis veniam nemo ad obcaecati. lorem isddhe lfrsus queri edfdk"</p>
                            </FigureCaption>
                                <img src={user1} alt=""/>
                        </Figure>
                    </Col>
                    <Col>
                        <Figure>
                            <FigureCaption>
                                <h5>Ada Smith</h5>
                                <h6>Entrepreneur</h6>
                                <p><FontAwesomeIcon icon={faQuoteLeft}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, assumenda doloremque officiis veniam nemo ad obcaecati. lorem isddhe lfrsus queri edfdk"</p>
                            </FigureCaption>
                            {/* <FigureImage> */}
                                <img src={user2} alt=""/>
                            {/* </FigureImage> */}
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonies;
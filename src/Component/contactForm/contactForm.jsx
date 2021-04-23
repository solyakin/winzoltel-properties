import React from 'react';
import '../contactForm/contactForm.css';
import { Col, Container, Form, Row, FormLabel, Card } from 'react-bootstrap';
import building from '../assets/building.jpg';

const ContactForm = () => {
    return(
        <div className="contact-form">
            <Container>
                <Row md={2} xs={1}>
                    <Col>
                        <div className="img">
                            <img src={building} alt=""/>
                        </div>
                    </Col>
                    <Col>
                    <Form>
                        <Card className="p-5">
                            <h3 className="mb-4">Request Booking</h3>
                            <FormLabel>Name</FormLabel>
                            <input type="text" className="p-2" required/>
                            <FormLabel>Subject</FormLabel>
                            <input type="text" className="p-2"/>
                            <FormLabel>Email</FormLabel>
                            <input type="text" className="p-2"/>
                            <FormLabel>Message</FormLabel>
                            <input type="textarea" className="p-5"/>
                        </Card>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactForm;
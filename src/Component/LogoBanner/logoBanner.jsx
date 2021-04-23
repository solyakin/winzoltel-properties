import React from 'react';
import '../LogoBanner/logo-banner.css';
import { Container } from 'react-bootstrap';
import client from '../assets/client-01.png';

const LogoBanner = () => {
    return(
        <div className="logo-banner">
            <Container>
                <div className="content">
                    <img src={client} alt="client"/>
                    <img src={client} alt="client"/>
                    <img src={client} alt="client"/>
                    <img src={client} alt="client"/>
                    <img src={client} alt="client"/>  
                </div>
            </Container>
        </div>
    )
}

export default LogoBanner;
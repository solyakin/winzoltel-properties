import React from 'react';
import '../topBanner/topbanner.css';
import { Container } from 'react-bootstrap';

const TopBannner = () => {
    return(
        <div className="top-banner">
            <div className="title">
                <Container>
                    <h2>About Us</h2>
                    <p>WE ARE A DEDICATED TEAM OF PASSIONATE PEOPLE</p>
                </Container>
            </div>
        </div>
    )
}

export default TopBannner;
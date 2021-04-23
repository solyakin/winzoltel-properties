import React from 'react';
import AboutUs from '../AboutUsPage/aboutUs';
import ContactForm from '../contactForm/contactForm';
import CopyRight from '../copyright/copyright';
import Footer from '../footer/footer';
import Header from '../Header/header';
import LandingPage from '../LandingPage/landingPage';
import LogoBanner from '../LogoBanner/logoBanner';
import Properties from '../properties/properties';
import Service from '../service/service';
import Testimonies from '../testimonies/testimonies';

const HomePage = () => {
    return(
        <div className="homepage">
            <Header/>
            <LandingPage/>
            <Service/>
            <Properties/>
            <Testimonies/>
            <ContactForm/>
            <LogoBanner/>
            <Footer/>
            <CopyRight/>
        </div>
    )
}

export default HomePage;
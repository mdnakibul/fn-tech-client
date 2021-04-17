import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <section className="home" style={{paddingBottom : '50px'}}>
            <Navigation></Navigation>
            <Header></Header>
            <Services></Services>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </section>
    );
};

export default Home;
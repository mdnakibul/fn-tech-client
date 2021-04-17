import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <section className="home" style={{paddingBottom : '50px'}}>
            <Navigation></Navigation>
            <Header></Header>
            <Services></Services>
        </section>
    );
};

export default Home;
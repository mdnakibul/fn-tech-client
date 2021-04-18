import React, { useEffect, useState } from 'react';
import './Services.css'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import SectionTitle from '../SectionTitle/SectionTitle';
const Services = () => {

    const [services,setServices] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    const sectionTitle = 'our services';
    const sectionDescription = 'We are working with both individuals and businesses from all over the globe to create awesome websites and applications';
    return (
        <section className="services mt-5">
            <SectionTitle title={sectionTitle} titleDescription={sectionDescription}></SectionTitle>
            <div className="container mt-5">
                <div className="row">
                    {
                        services.map(service => <ServiceDetails service={service} key={service._id}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
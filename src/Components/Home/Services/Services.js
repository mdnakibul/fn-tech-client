import React from 'react';
import './Services.css'
import webdev from '../../../images/webdev.jpg'
import androiddev from '../../../images/androidDev.jpg'
import iosdev from '../../../images/ios-app.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import SectionTitle from '../SectionTitle/SectionTitle';
const Services = () => {
    const serviceData = [
        {
            id : 1,
            title : 'web development',
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium facere ipsum, perspiciatis voluptas repellendus nesciunt repudiandae magnam omnis error eos?",
            image : webdev
        },
        {
            id : 2,
            title : 'android development',
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium facere ipsum, perspiciatis voluptas repellendus nesciunt repudiandae magnam omnis error eos?",
            image : androiddev
        },
        {
            id : 3,
            title : 'iOS development',
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium facere ipsum, perspiciatis voluptas repellendus nesciunt repudiandae magnam omnis error eos?",
            image : iosdev
        }
    ]
    const sectionTitle = 'our services';
    const sectionDescription = 'We are working with both individuals and businesses from all over the globe to create awesome websites and applications';
    return (
        <section className="services mt-5">
            <SectionTitle title={sectionTitle} titleDescription={sectionDescription}></SectionTitle>
            <div className="container mt-5">
                <div className="row">
                    {
                        serviceData.map(service => <ServiceDetails service={service} key={service.id}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
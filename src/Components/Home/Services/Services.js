import React from 'react';
import './Services.css'
import webdev from '../../../images/webdev.jpg'
import androiddev from '../../../images/androidDev.jpg'
import iosdev from '../../../images/ios-app.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const Services = () => {
    const serviceData = [
        {
            id : 1,
            title : 'web development',
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium facere ipsum, perspiciatis voluptas repellendus nesciunt repudiandae magnam omnis error eos?",
            image : webdev
        },
        {
            id : 1,
            title : 'android development',
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium facere ipsum, perspiciatis voluptas repellendus nesciunt repudiandae magnam omnis error eos?",
            image : androiddev
        },
        {
            id : 1,
            title : 'iOS development',
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium facere ipsum, perspiciatis voluptas repellendus nesciunt repudiandae magnam omnis error eos?",
            image : iosdev
        }
    ]
    return (
        <section className="services mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-heading">
                        <h2>our services</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-description">
                            <p>We are working with both individuals and businesses from all over the globe to create awesome websites and applications</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
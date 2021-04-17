import React from 'react';

const ServiceDetails = ({service}) => {
    const {title,description,image} = service;
    return (
        <div className="col-md-4">
            <div className="service-card text-center p-4">
                <img src={image} alt={title} className="img-fluid" style={{minHeight : '235px'}}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    );
};

export default ServiceDetails;
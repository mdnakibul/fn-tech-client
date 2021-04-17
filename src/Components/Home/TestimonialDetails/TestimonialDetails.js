import React from 'react';
import './TestimonialDetails.css'
const TestimonialDetails = ({testimonial}) => {
    const {quote,name,designation,image} = testimonial;
    return (
        <div className="col-md-4">
           <div className="testimonial-block shadow p-4 rounded">
               <p className="quote">"{quote}"</p>
               <div className="d-flex align-items-center">
                   <img src={image} alt="Client" className="img-fluid rounded-circle" style={{maxHeight : '100px'}}/>
                   <div className="pl-3">
                       <h5 className="text-uppercase">{name}</h5>
                       <h6 className="text-uppercase">{designation}</h6>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default TestimonialDetails;
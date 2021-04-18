import React from 'react';
import './TestimonialDetails.css'
import avatar from '../../../images/avatar.png'
const TestimonialDetails = ({review}) => {
    const {quote,name,designation} = review;
    return (
        <div className="col-md-4">
           <div className="testimonial-block shadow p-4 rounded">
               <p className="quote">"{quote}"</p>
               <div className="d-flex align-items-center">
                   <img src={avatar} alt="Client" className="img-fluid rounded-circle" style={{maxHeight : '100px'}}/>
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
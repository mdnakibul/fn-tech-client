import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import testimonial1 from '../../../images/testimonial1.jpg'
import testimonial2 from '../../../images/testimonial2.jpg'
import testimonial3 from '../../../images/testimonial3.jpg'
const Testimonial = () => {
    const title = 'WHAT POEPLE SAY ABOUT US';
    const titleDescription = 'Our clients love us!';

    const testimonialData = [
        {
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam debitis omnis, distinctio maiores doloremque.",
            name: 'john doe',
            designation: 'HR',
            image: testimonial1
        },
        {
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam debitis omnis, distinctio maiores doloremque.",
            name: 'michel mork',
            designation: 'HR',
            image: testimonial2
        },
        {
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam debitis omnis, distinctio maiores doloremque.",
            name: 'mark mesty',
            designation: 'HR',
            image: testimonial3
        },
    ]
    return (
        <section className="testimonial mt-5">
            <SectionTitle title={title} titleDescription={titleDescription}></SectionTitle>
            <div className="container mt-5">
                <div className="row">
                    {
                        testimonialData.map(testimonial => <TestimonialDetails testimonial={testimonial} key={testimonial.name}></TestimonialDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
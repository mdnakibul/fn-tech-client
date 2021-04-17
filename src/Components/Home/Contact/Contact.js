import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Contact = () => {
    const sectionTitle = 'get in touch';
    const sectionDescription = '1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111'
    return (
        <section className="contact-us mt-5">
            <SectionTitle title={sectionTitle} titleDescription={sectionDescription}></SectionTitle>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-12">
                        <form className="mt-5">
                            <div className="form-group">
                                <input type="email" className="form-control py-4" id="email" aria-describedby="emailHelp" placeholder="Email*" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control py-4" id="password" placeholder="Subject*" required/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="message" rows="4" placeholder="Your Message*" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary d-block m-auto">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
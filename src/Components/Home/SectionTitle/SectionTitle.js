import React from 'react';

const SectionTitle = ({title,titleDescription}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 section-heading">
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="title-description">
                        <p>{titleDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;
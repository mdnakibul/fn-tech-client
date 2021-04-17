import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import WriteReview from '../WriteReview/WriteReview';

const Review = () => {
    return (
        <section className="review">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <WriteReview></WriteReview>
                </div>
            </div>
        </section>
    );
};

export default Review;
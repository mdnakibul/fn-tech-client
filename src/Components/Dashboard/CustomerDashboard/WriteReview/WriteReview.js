import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';

const WriteReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const onSubmit = data => {
        console.log(data);

        fetch('https://fn-tech-server-imjte4rrt-mdnakibul.vercel.app/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Review Submitted Successfully');
                }
            })
    };

    return (
        <div className="write-review col-md-10" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
            <div className="book-navigation d-flex justify-content-between px-3 py-3">
                <h4 className="text-uppercase pl-2">Write your Review</h4>
                <h4 className="pr-2">{loggedInUser.displayName}</h4>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">

                        <input name="name" type="text" className="form-control py-3 mb-3" {...register("name", { required: true })} placeholder="Enter Your Name" />
                        {errors.name && <span>Name is required</span>}

                        <input name="designation" type="text" className="form-control py-3 mb-3" {...register("designation", { required: true })} placeholder="Enter Your Company Name , Designation" />
                        {/* errors will return when field validation fails  */}
                        {errors.designation && <span>This field is required</span>}

                        <input name="quote" type="text" style={{ minHeight: '100px' }} className="form-control py-3 mb-3" {...register("quote", { required: true })} placeholder="Write Your Opinion" />
                        {/* errors will return when field validation fails  */}
                        {errors.quote && <span>This field is required</span>}

                        <input type="submit" className="btn btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WriteReview;
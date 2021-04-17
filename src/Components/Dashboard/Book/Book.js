import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Book.css';

const Book = ({serviceTitle}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const [shipmentData, setShipmentData] = useState(null)
    const onSubmit = data => {
        setShipmentData(data);
    };

    const handlePaymentSuccess = (paymentId) => {
        const orderInfo = { ...loggedInUser, product: shipmentData.service, address: shipmentData, paymentId, orderTime: new Date() }
        // fetch('https://murmuring-falls-44571.herokuapp.com/addOrder', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(orderInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data) {
        //             alert('Order placed successfully')
        //             processOrder()
        //         }
        //     })
    };
    return (
        <div className="book col-md-10" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
            <div className="book-navigation d-flex justify-content-between px-3 py-3">
                <h4 className="text-uppercase pl-2">book</h4>
                <h4 className="pr-2">Your Name</h4>
            </div>
            <div className="row booking-form mt-5">
                <div style={{ display: shipmentData ? 'none' : 'block' }} className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">

                        <input name="name" type="text" className="form-control py-3 mb-3" {...register("name", { required: true })} placeholder="Enter Your Name" />
                        {errors.name && <span>Name is required</span>}

                        <input name="email" type="email" className="form-control py-3 mb-3" defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Enter Your Email" />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span>This field is required</span>}

                        <input name="address" type="text" className="form-control py-3 mb-3" {...register("address", { required: true })} placeholder="Enter Your Address" />
                        {/* errors will return when field validation fails  */}
                        {errors.address && <span>Address is required</span>}

                        <input name="service" type="text" className="form-control py-3 mb-3" defaultValue={serviceTitle} {...register("service", { required: true })} placeholder="SErvice Name" />
                        {/* errors will return when field validation fails  */}
                        {errors.service && <span>Service name is required</span>}

                        <input name="phone" type="tel" className="form-control py-3 mb-3" {...register("phone", { required: true })} placeholder="Enter Your Phone" />
                        {/* errors will return when field validation fails  */}
                        {errors.phone && <span>Phone Number is required</span>}

                        <input type="submit" className="btn btn-primary" />
                    </form>
                </div>
                <div className="col-md-6" style={{ display: shipmentData ? 'block' : 'none' }}>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                    <p>You payment amouont is $100</p>
                </div>
            </div>
        </div>
    );
};

export default Book;
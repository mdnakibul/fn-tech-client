import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const email = 'tuhinmate@gmail.com';
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://fn-tech-server-imjte4rrt-mdnakibul.vercel.app/order?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
        console.log(orders);
    }, [email])
    return (
        <section className="order-list">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2" style={{ paddingLeft: '0px' }}>
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="book-navigation d-flex justify-content-between px-3 py-3">
                            <h4 className="text-uppercase pl-2">book</h4>
                            <h4 className="pr-2">{loggedInUser.displayName}</h4>
                        </div>
                        <table className="table mt-5" style={{ maxWidth: '98%' }}>
                            <thead>
                                <tr>
                                    <th scope="col">Email</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => {
                                    return (<tr key={order._id}>
                                        <td>{order.address.email}</td>
                                        <td>{order.product}</td>
                                        <td>{order.price}</td>
                                        <td>{order.status}</td>
                                    </tr>);
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OrderList;
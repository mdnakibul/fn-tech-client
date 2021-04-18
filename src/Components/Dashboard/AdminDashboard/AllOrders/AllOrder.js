import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const AllOrders = () => {
    return (
        <section className="all-orders">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-10" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="book-navigation d-flex justify-content-between px-3 py-3">
                            <h4 className="text-uppercase pl-2">book</h4>
                            <h4 className="pr-2">Your Name</h4>
                        </div>
                        <table className="table mt-5" style={{maxWidth : '98%'}}>
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Customer Name</th>
                                    <td>mail@exaple.com</td>
                                    <td>Service Name</td>
                                    <td>
                                        <select className="custom-select" id="status">
                                            <option value="pending">Pending</option>
                                            <option value="processing">Processing</option>
                                            <option value="done">Done</option>
                                        </select>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllOrders;
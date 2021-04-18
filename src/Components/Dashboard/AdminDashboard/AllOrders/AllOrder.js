import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const AllOrders = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])

    const handleStatusChange = (event,id)=>{
        console.log('Status changed of', id);
        console.log(event.target.value);
    }
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
                        <table className="table mt-5" style={{ maxWidth: '98%' }}>
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allOrder.map(order => {
                                        if(!order.status){
                                            order.status = 'pending'
                                        }
                                        return <tr key={order._id}>
                                            <th scope="row">{order.address.name}</th>
                                            <td>{order.address.email}</td>
                                            <td>{order.product}</td>
                                            <td>
                                                {
                                                    order.status === 'pending' && <select className="custom-select" name="status" id="status" defaultValue={order.status} onChange={(event)=>handleStatusChange(event,order._id)}>
                                                        <option value={order.status} >{order.status}</option>
                                                        <option value='processng'>processng</option>
                                                        <option value='done'>done</option>
                                                    </select>
                                                }
                                                {
                                                    order.status === 'processing' && <select className="custom-select" name="status" id="status" defaultValue={order.status} onChange={(event)=>handleStatusChange(event,order._id)}>
                                                        <option value={order.status} selected>{order.status}</option>
                                                        <option value='pending'>Pending</option>
                                                        <option value='done'>Done</option>
                                                    </select>
                                                }
                                                {
                                                    order.status === 'done' && <select className="custom-select" name="status" id="status" defaultValue={order.status} onChange={(event)=>handleStatusChange(event,order._id)}>
                                                        <option value={order.status} selected>{order.status}</option>
                                                        <option value='pending'>Pending</option>
                                                        <option value='processing'>Processing</option>
                                                    </select>
                                                }
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllOrders;
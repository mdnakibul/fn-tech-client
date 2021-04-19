import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';

const AllOrders = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://enigmatic-castle-41503.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])

    const handleStatusChange = (event,id)=>{
        const modifiedValue = event.target.value;

        fetch(`https://enigmatic-castle-41503.herokuapp.com/update/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify({modifiedValue})
        })
            .then(result => {
                if(result){
                    alert('Data Updated Successfully')
                }
            })
    }
    return (
        <section className="all-orders">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-10" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="book-navigation d-flex justify-content-between px-3 py-3">
                            <h4 className="text-uppercase pl-2">book</h4>
                            <h4 className="pr-2">{loggedInUser.displayName}</h4>
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
                                                        <option value='processng'>processing</option>
                                                        <option value='done'>done</option>
                                                    </select>
                                                }
                                                {
                                                    order.status === 'processing' && <select className="custom-select" name="status" id="status" defaultValue={order.status} onChange={(event)=>handleStatusChange(event,order._id)}>
                                                        <option value={order.status} >{order.status}</option>
                                                        <option value='pending'>Pending</option>
                                                        <option value='done'>Done</option>
                                                    </select>
                                                }
                                                {
                                                    order.status === 'done' && <select className="custom-select" name="status" id="status" defaultValue={order.status} onChange={(event)=>handleStatusChange(event,order._id)}>
                                                        <option value={order.status} >{order.status}</option>
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
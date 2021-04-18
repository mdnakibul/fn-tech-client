import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const ManageServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => alert(error.message))
    }, [])

const deleteService = (event,id)=>{
    const deleteNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    console.log('Deleting ', id);
    console.log(deleteNode);
            fetch(`http://localhost:5000/deleteService/${id}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if(data){
                        alert('Delete Successful')
                        deleteNode.style.display = "none"
                    }
                })
}

    return (
        <section className="manage-services">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-10" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="book-navigation d-flex justify-content-between px-3 py-3">
                            <h4 className="text-uppercase pl-2">Manage Services</h4>
                            <h4 className="pr-2">Your Name</h4>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"> Title </th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service => {

                                        return (<tr key={service._id}>
                                            <th scope="row">{service.title}</th>
                                            <td>{service.description}</td>
                                            <td>{service.price}</td>
                                            <td>
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn bg-white">
                                                    <FontAwesomeIcon icon={faEdit} color="green" />
                                                    </button>
                                                    <button type="button" className="btn bg-white" onClick={(event)=>deleteService(event,service._id)}>
                                                    <FontAwesomeIcon icon={faTrashAlt} color="red" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>);
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

export default ManageServices;
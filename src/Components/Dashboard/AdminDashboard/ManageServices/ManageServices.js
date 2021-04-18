import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const ManageServices = () => {
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
                                <tr>
                                    <th scope="row">Service title</th>
                                    <td>Service Description</td>
                                    <td>Price</td>
                                    <td>
                                        <FontAwesomeIcon icon={faEdit} color="green" style={{marginRight:'5px'}}/>
                                        <FontAwesomeIcon icon={faTrashAlt} color="red"/>
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

export default ManageServices;
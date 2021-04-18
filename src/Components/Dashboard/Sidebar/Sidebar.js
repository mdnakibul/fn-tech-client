import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faCalendar, faHome, faUserPlus, faCartArrowDown, faList, faCommentDots, faPlus, faThLarge, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(true);

    // useEffect(() => {
    //     fetch('https://sleepy-mountain-85887.herokuapp.com/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsAdmin(data));
    // }, [])

    return (
        <div className="col-md-2" style={{ height: "100vh",paddingLeft:'0px' }}>
            <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh", width:'16%'}}>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="text-white">
                            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon icon={faCalendarCheck} /> <span>Overview</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/book" className="text-white">
                            <FontAwesomeIcon icon={faCartArrowDown} /> <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="dashboard/booking-list" className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/review" className="text-white">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Reviews</span>
                        </Link>
                    </li>
                    {isAdmin && <div>
                        <li>
                            <Link to="/dashboard/allOrders" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addService" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/makeAdmin" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/manageServices" className="text-white" >
                                <FontAwesomeIcon icon={faThLarge} /> <span>Manage Services</span>
                            </Link>
                        </li>
                    </div>}
                </ul>
                <div>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
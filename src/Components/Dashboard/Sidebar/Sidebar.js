import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignOutAlt, faCalendar, faHome, faUserPlus,faCartArrowDown, faList , faCommentDots, faPlus, faThLarge} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

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
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/book" className="text-white">
                        <FontAwesomeIcon icon={faCartArrowDown} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/booking-list" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Reviews</span>
                    </Link>
                </li>
                {isAdmin && <div>
                    <li>
                        <Link to="/allOrders" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Ordr List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white" >
                            <FontAwesomeIcon icon={faThLarge} /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;
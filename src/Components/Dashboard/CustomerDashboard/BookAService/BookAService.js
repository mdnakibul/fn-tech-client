import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../Sidebar/Sidebar';
import Book from '../Book/Book';

const BookAService = () => {
    const {id} = useParams();
    const [serviceDetails,setServiceDetails] = useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/service/'+id)
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    },[])
    return (
        <section className="make-booking">
            <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <Book serviceDetails = {serviceDetails}></Book>
                </div>
            </div>
        </section>
    );
};

export default BookAService;
import React from 'react';
import { useParams } from 'react-router';
import Book from '../Book/Book';
import Sidebar from '../Sidebar/Sidebar';

const BookAService = () => {
    const {title} = useParams();
    return (
        <section className="make-booking">
            <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <Book serviceTitle = {title}></Book>
                </div>
            </div>
        </section>
    );
};

export default BookAService;
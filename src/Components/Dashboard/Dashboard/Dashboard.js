import React from 'react';
import Overview from '../CustomerDashboard/Overview/Overview';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="dashboard">
            <div className="container-fluid">
                <div className="row">
                <Sidebar></Sidebar>
                <Overview></Overview>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
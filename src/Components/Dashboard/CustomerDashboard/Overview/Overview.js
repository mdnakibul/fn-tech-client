import React from 'react';
import { useHistory } from 'react-router';

const Overview = () => {
    const history = useHistory();
    const seeOrderList = ()=>{
        history.push('/dashboard/order-list')
    }
    return (
        <div className="col-md-10 overview">
            {/* <div className="row">
                <div className="col-md-3">
                    <div className="overview-block  bg-primary m-3 text-center text-white p-3" style={{minHeight : '150px'}}>
                        <h2>Total Order</h2>
                        <h5>10</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="overview-block  bg-danger m-3 text-center text-white p-3" style={{minHeight : '150px'}}>
                        <h2>Pending Order</h2>
                        <h5>10</h5>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="overview-block bg-warning m-3 text-center text-white p-3" style={{minHeight : '150px'}}>
                        <h2>Processing Order</h2>
                        <h5>10</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="overview-block  bg-success m-3 text-center text-white p-3" style={{minHeight : '150px'}}>
                        <h2>Done</h2>
                        <h5>10</h5>
                    </div>
                </div>
            </div> */}
            <div className="row mt-5">
                <button className="btn btn-primary d-block m-auto" onClick={seeOrderList}>See Your Order List</button>
            </div>
        </div>
    );
};

export default Overview;
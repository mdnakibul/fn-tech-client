import React from 'react';
import itservice1 from '../../../images/itservice1.jpg';
import './Header.css'
const Header = () => {
    return (
        <main className="row d-flex align-items-center" style={{height:'700px',maxWidth : '100%',marginLeft : '0px'}}>
            <div className="col-md-4 offset-md-1">
                <h2>Your New Business <br/> Start Here </h2>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo inventore quisquam delectus vero maxime.</p>
                <button className="btn btn-primary text-uppercase">Buy Our Service  </button>
            </div>
            <div className="col-md-6">
                <img src={itservice1} alt="Dental chair" className="img-fluid"/>

            </div>
        </main>
    );
};

export default Header;
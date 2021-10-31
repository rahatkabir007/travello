import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { _id, location, description, price, image } = service;
    return (
        <div className="col-md-6 col-lg-6 col-xxl-4 service-section mt-3">
            <div className="card service-card h-100 mx-auto " style={{ width: "18rem"}}>
                <img src={image} className="card-img-top " style={{height: "15rem"}} alt="..." />
                <div className="card-body text-center service-text">
                    <h2 className="card-title">{location}</h2>
                    <p className="card-text" id="description">{description}</p>
                    <p className="card-text" id="price">Price:  {price}$</p>
                </div>
                <div className="text-center p-3">
                    <Link to={`/services/${_id}`} className="booking-btn ">Book Now</Link>
                </div>


            </div>
        </div>
    );
};

export default Service;
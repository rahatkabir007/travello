import React, { useEffect, useState } from 'react';
import Service from './service/Service';
import './HomeServices.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services-section" id="services">
            <h1 className="text-center">Our Services</h1>
            <hr />
            <div className="container">
                <div className="row">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
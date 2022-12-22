import React, { useEffect, useState } from 'react';
import Service from './service/Service';
import './HomeServices.css';
import { Spinner } from 'react-bootstrap';


const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://travello-server-sage.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    if (services.length <= 0) {
        return <div className="w-25 mx-auto text-center"><Spinner className="my-5 " animation="border" variant="success" /></div>


    }


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

export default HomeServices;
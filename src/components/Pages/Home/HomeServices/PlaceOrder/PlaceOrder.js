import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import Header from '../../../Shared/Header/Header';
import './PlaceOrder.css';
const PlaceOrder = () => {
    const { user } = useAuth();
    const [serviceDetails, setServiceDetails] = useState([]);
    const { serviceId } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
         console.log(data);
     }
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data));
    }, [])

    return (
        <div className="placeOrder">
            <div className="header-area">
                <nav className="navbar navbar-expand-lg py-4 fixed-top">
                    <Header></Header>
                </nav>
            </div>
            <div className="placeOrder-section">
                <h1>Place Order</h1>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-5 left-order-details ms-auto">
                        <div className="image-area my-3 w-75 ms-auto" >
                            <img className="w-100 ms-auto mt-5" src={serviceDetails?.image} alt="" />
                        </div>
                        <div className="text-area w-75 ms-auto mb-5">
                            <h1>{serviceDetails?.location}</h1>
                            <p>{serviceDetails?.description}</p>
                            <p style={{fontSize: "30px"}}>Price: {serviceDetails?.price}$</p>
                            <p>Image URL</p>
                            <input type="text" name="" id="" value={serviceDetails?.image} style={{width: "100%"}} className="p-2" />

                        </div>
                    </div>
                    <div className="col-lg-7 my-5 right-order-form text-center">
                        <form onSubmit={handleSubmit(onSubmit)} className="ms-auto mt-3">
                            <input
                                {...register("name")}
                                value={user?.displayName}
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("email")}
                                value={user?.email}
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("location")}
                                placeholder="Please Type The Location"
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("price")}
                                placeholder="Please Type The Price"
                                type="number"
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("address")}
                                placeholder="Please Type Your Address"
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("phone")}
                                placeholder="Please Type Your Phone Number"
                                className="p-2 m-2 w-100"
                            />
                        
                            <input
                                {...register("date")}
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("image")}
                                placeholder="Please Paste The Image URL"
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("status")}
                                value= "Pending"
                                className="p-2 m-2 w-100"
                            />
                            
                         
                            <br/>
                       

                            <input type="submit" value="Place Order" className="btn btn-dark w-25 ms-2 my-3" id="place-order-btn" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;
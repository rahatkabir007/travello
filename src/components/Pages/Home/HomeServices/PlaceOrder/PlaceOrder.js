import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import Header from '../../../Shared/Header/Header';
import './PlaceOrder.css';
const PlaceOrder = () => {
    const { user } = useAuth();
    const [serviceDetails, setServiceDetails] = useState([]);
    const { serviceKey } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
         
     }
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data));
    }, [])

    const searchDetails = serviceDetails.find(details => details.key === serviceKey)
    return (
        <div className="placeOrder">
            <div className="header-area">
                <nav className="navbar navbar-expand-lg py-4">
                    <Header></Header>
                </nav>
            </div>
            <div className="placeOrder-section">
                <h1>Place Order</h1>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-5 left-order-details ms-auto">
                        <div className="image-area my-3 w-75 ms-auto  " >
                            <img className="w-100 ms-auto mt-5" src={searchDetails?.image} alt="" />

                        </div>
                        <div className="text-area w-75 ms-auto">
                            <h1>{searchDetails?.name}</h1>
                            <p>{searchDetails?.description}</p>

                        </div>
                    </div>
                    <div className="col-lg-7 my-5 right-order-form text-center">
                        <form onSubmit={handleSubmit(onSubmit)} className="ms-auto">
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
                                placeholder="Location"
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("price")}
                                placeholder="Price"
                                className="p-2 m-2 w-100"
                            />
                        
                            <input
                                {...register("date")}
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100"
                            />
                         
                            <br/>
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Place Order" className="btn btn-dark w-25 ms-2 my-3" id="place-order-btn" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;
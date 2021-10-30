import React from 'react';
import Header from '../Shared/Header/Header';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const AddService = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <div className="header-area">
                <nav className="navbar navbar-expand-lg py-4">
                    <Header></Header>
                </nav>
                <div className="add-service-section">
                    <h1>Add Your Recommendation</h1>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto text-center">
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
                            <textarea
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("price")}
                                placeholder="Price"
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100"
                            />

                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Place Order" className="btn btn-dark w-25 ms-2 my-3" id="place-order-btn" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;
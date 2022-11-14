import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './AddService.css';

const AddService = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post('https://travello-server-production.up.railway.app/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successfully Added");
                    reset();
                }
            })
    }
    return (
        <div>

            <div className="add-service-section">
                <h1>Add Your Recommendation</h1>
            </div>
            <div className="container my-4">
                <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto text-center add-form-area">
                    <input
                        {...register("name")}
                        defaultValue={user?.displayName}
                        className="p-2 m-2 w-100"
                    />
                    <input
                        {...register("email")}
                        defaultValue={user?.email}
                        className="p-2 m-2 w-100"
                    />
                    <input
                        {...register("location", { required: true })}
                        placeholder="Location"
                        className="p-2 m-2 w-100"
                    />
                    <textarea
                        {...register("description", { required: true })}
                        placeholder="Description"
                        className="p-2 m-2 w-100"
                    />
                    <input
                        {...register("price", { required: true })}
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

                    <div className="place-order-button-area">
                        <input type="submit" value="ADD" className=" ms-2 my-3" id="place-order-btn" />
                    </div>
                </form>
            </div>


        </div>
    );
};

export default AddService;
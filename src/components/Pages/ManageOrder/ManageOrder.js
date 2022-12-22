import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './ManageOrder.css'

const ManageOrder = () => {
    const [manageOrders, setManageOrders] = useState([]);
    useEffect(() => {
        fetch('https://travello-server-sage.vercel.app/orders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [])
    if (manageOrders.length <= 0) {
        return <div className="w-25 mx-auto text-center"><Spinner className="my-5 " animation="border" variant="success" /></div>


    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this order?');
        if (proceed) {
            const url = `https://travello-server-sage.vercel.app/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = manageOrders.filter(order => order._id !== id);
                        setManageOrders(remaining);
                        alert("Your Order Has Been Deleted");
                    }
                })
        }

    }



    return (
        <div>
            <div className="manage-orders-intro-section">
                <h1>Manage Orders</h1>
            </div>
            <div className="manageOrders container my-5">
                <h1 className="text-center p-3">Total Orders Placed: {manageOrders.length}</h1>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Serial</th>
                                <th scope="col">Location</th>
                                <th scope="col">User Name</th>
                                <th scope="col">User Email</th>
                                <th scope="col">User Address</th>
                                <th scope="col">User Phone</th>
                                <th scope="col">Price</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        {manageOrders?.map((orders, index) => (
                            <tbody key={orders?._id}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{orders?.location}</td>
                                    <td>{orders?.name}</td>
                                    <td>{orders?.email}</td>
                                    <td>{orders?.address}</td>
                                    <td>{orders?.phone}</td>
                                    <td>{orders?.price}$</td>
                                    <td>{orders?.date}</td>
                                    <td><div class="input-group mb-3">
                                        <select class="p-2" id="inputGroupSelect01">
                                            <option selected>{orders?.status}</option>
                                            <option >Approved</option>
                                        </select>
                                    </div></td>
                                    <td><button className="btn btn-warning p-2" onClick={() => handleDelete(orders?._id)}>Delete</button></td>
                                    <td> <button className="btn btn-warning">Update Status</button></td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ManageOrder;
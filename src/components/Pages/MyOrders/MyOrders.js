import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import './MyOrders.css';
const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to cancel your order?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                        alert("Your Order Has Been Cancelled");
                    }
                })
        }
       
    }

    const matched = orders.filter(order => order.email === user.email);
    return (
        <div>
            <div className="header-area">
                <nav className="navbar navbar-expand-lg fixed-top py-4">
                    <Header></Header>
                </nav>
            </div>
            <div className="my-orders-intro-section">
                <h1>My Orders</h1>
            </div>
            <div className="container my-orders my-4">
                <div className="row">
                    {
                        matched.map(order => <div className="col-md-6 col-lg-6 col-xxl-4 service-section mt-3">
                            <div className="card service-card h-100 mx-auto " style={{ width: "25rem" }}>
                                <img src={order?.image} className="card-img-top " style={{ height: "15rem" }} alt="..." />
                                <div className="card-body text-center service-text">
                                    <h2 className="card-title">{order?.location}</h2>
                                    <p className="card-text" id="description">{order?.description}</p>
                                    <p className="card-text" id="price">Price:  {order?.price}$</p>
                                </div>
                                <div className="text-center p-3">
                                    <button className="btn btn-dark" onClick={() => handleDelete(order?._id)}>Cancel Order</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default MyOrders;
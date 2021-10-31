import React from 'react';
import Header from '../Shared/Header/Header';
import './ManageOrder.css'

const ManageOrder = () => {
    return (
        <div>
            <div className="header-area">
                <nav className="navbar navbar-expand-lg fixed-top py-4">
                    <Header></Header>
                </nav>
            </div>
            <div className="manage-orders-intro-section">
                <h1>Add Your Recommendation</h1>
            </div>
            <div className="manageOrders container my-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Location</th>
                            <th scope="col">User Name</th>
                            <th scope="col">User Email</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;
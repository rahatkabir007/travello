import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <div className="container">
                <div className="title-area">
                    <NavLink to='/'><img src={logo} alt="" /></NavLink>
                </div>
                <button className="navbar-toggler ms-auto p-3 mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="fs-3">Menu</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/home'>Home</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/aboutus'>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/services'>Services</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">

                            {user?.email ?

                                <div className="d-lg-flex">
                                    <Link className="nav-link" to='/addService'>Add Service</Link>
                                    <Link className="nav-link" to='/myOrders'>My Orders</Link>
                                    <Link className="nav-link" to='/manageOrders'>Manage Orders</Link>
                                    <Nav.Link onClick={logOut} to="/home" >Sign Out</Nav.Link>
                                    <Navbar.Text>
                                        <p className="mb-0 ms-2">User: {user?.displayName}</p>
                                    </Navbar.Text>
                                </div>
                                :

                                <Link className="nav-link" to='/signin'>Sign In</Link>

                            }
                        </li>
                    </ul>

                </div>
                <div>

                </div>
            </div>

        </>
    );
};

export default Header;
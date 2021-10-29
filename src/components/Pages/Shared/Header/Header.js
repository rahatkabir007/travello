import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
const Header = () => {
    return (
        <div className="header-area">
            <nav class="navbar navbar-expand-lg  py-4">
                <div class="container">
                    <div className="title-area">
                        <img src={logo} alt="" />
                   </div>
                    <button class="navbar-toggler ms-auto p-3 mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                      <span className="fs-3">Menu</span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/aboutus">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/services">Services</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/signin">Sign In/Sign Up</a>
                            </li>
                        </ul>
                            
                    </div>
                    <div>
                  
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
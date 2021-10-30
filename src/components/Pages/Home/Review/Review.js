import React from 'react';
import './Review.css';


const Review = () => {
    return (
        <div className="review-section m-4">
            <div id="carouselExampleControls" className="carousel slide p-5" data-bs-ride="carousel">
                <div className="carousel-inner  p-3 h-75">
                    <div className="carousel-item active p-4 ">
                        <div className="row w-75 mx-auto">
                            <div className="col-lg-3 review-details p-5 mx-auto h-75 my-auto" id="left-detail">
                                <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 mx-auto" alt="..." />
                                <h2>John Kim</h2>
                                <p>Travelo Is Really Good,The Tour Guides Are Really Helpfull</p>
                            </div>
                            <div className="col-lg-6 review-details w-25 px-4 py-5 mx-auto" id="middle-detail">
                                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 mx-auto " alt="..." />
                                <h2>Sara Geller</h2>
                                <p>Travelo Is Really Good,The Tour Guides Are Really Helpfull</p>
                                <div className="rating w-50 mx-auto text-center ">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                            </div>
                            <div className="col-lg-3 review-details p-5  mx-auto h-75 my-auto" id="right-detail">
                                <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 mx-auto " alt="..." />
                                <h2>Rishab Kapoor</h2>
                                <p>Travelo Is Really Good,The Tour Guides Are Really Helpfull</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item p-4">
                        <div className="row w-75 mx-auto">
                            <div className="col-lg-3 review-details p-5 mx-auto h-75 my-auto" id="left-detail">
                                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 mx-auto " alt="..." />
                                <h2>Sara Geller</h2>
                                <p>Travelo Is Really Good,The Tour Guides Are Really Helpfull</p>
                            </div>
                            <div className="col-lg-6 review-details w-25 px-4 py-5 mx-auto" id="middle-detail">
                                <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 mx-auto " alt="..." />
                                <h2>Rishab Kapoor</h2>
                                <p>Travelo Is Really Good,The Tour Guides Are Really Helpfull</p>
                                <div className="rating w-50 mx-auto text-center ">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                            </div>
                            <div className="col-lg-3 review-details p-5 mx-auto h-75 my-auto" id="right-detail">
                                <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 mx-auto" alt="..." />
                                <h2>John Kim</h2>
                                <p>Travelo Is Really Good,The Tour Guides Are Really Helpfull</p>

                            </div>
                        </div>

                    </div>
                    <div className="carousel-item p-4">
                        <div className="row w-75 mx-auto">
                            <div className="col-lg-3 review-details p-5 mx-auto h-75 my-auto" id="left-detail">
                                <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 mx-auto " alt="..." />
                                <h2>Rishab Kapoor</h2>
                                <p>Travelo Is Really Good,The Tour Guides Are Really Helpfull</p>
                            </div>
                            <div className="col-lg-6 review-details w-25 px-4 py-5 mx-auto" id="middle-detail">
                                <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 mx-auto" alt="..." />
                                <h2>John Kim</h2>
                                <p>Travelo Is Really Good,The Tour Guides Are Really Helpfull</p>
                                <div className="rating w-50 mx-auto text-center">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                            </div>
                            <div className="col-lg-3 review-details p-5 mx-auto h-75 my-auto" id="right-detail">
                                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 mx-auto " alt="..." />
                                <h2>Sara Geller</h2>
                                <p>Travelo Is Really Good,The Tour Guides Are Really Helpfull</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark " aria-hidden="true"></span>
                    <span  className="visually-hidden ">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Review;
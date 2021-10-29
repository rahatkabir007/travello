import React from 'react';
import './Destination.css';

const Destination = () => {
    return (
        <div className="my-5">
            <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner ">
                    <div class="carousel-item active destination-slider" >
                        <img src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..."/>
                        <div class ="carousel-caption d-none d-md-block">
                        <h5>India</h5>
                        <p>Taj Mahal</p>
                        </div>
                    </div>
                    <div class="carousel-item destination-slider">
                        <img src="https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..."/>
                        <div class ="carousel-caption d-none d-md-block">
                        <h5>Nepal</h5>
                        <p>Himalaya</p>
                        </div>
                    </div>
                    <div class="carousel-item destination-slider">
                        <img src="https://images.pexels.com/photos/9989554/pexels-photo-9989554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..."/>
                        <div class ="carousel-caption d-none d-md-block">
                        <h5>Bangladesh</h5>
                        <p>Cox's Bazar</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Destination;
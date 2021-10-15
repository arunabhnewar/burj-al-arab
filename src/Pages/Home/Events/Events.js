import React from 'react';
import './Events.css';

const Events = () => {
    return (
        <div className="container-fluid mt-5 pt-5">
            <h2 className="mt-5 pt-3 booking-title">Events</h2>
            <div className="booking-title-underline"></div>

            <div className="row pt-5 d-flex justify-content-start align-items-start event-section">
                <div className="col-md-5 mt-5 pt-5">
                    <h5 className="text-white mt-5 pt-5">Discover your destination event</h5>
                    <h1 className="text-white">Dubai’s <br /> iconic events destination</h1>
                    <p className="text-white">Discover the ultimate setting for unforgettable occasions</p>
                </div>
            </div>
        </div>
    );
};

export default Events;
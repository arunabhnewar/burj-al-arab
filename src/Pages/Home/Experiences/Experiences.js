import React from 'react';
import './Experiences.css';

const Experiences = () => {
    return (
        <div className="container-fluid mt-5 pt-5">
            <h2 className="mt-3 pt-3 booking-title">Experiences</h2>
            <div className="booking-title-underline"></div>

            <div className="row d-flex flex-row-reverse  exclusive">
                <div className="col-md-5 mt-5 pt-5">
                    <h5 className="text-white mt-5 pt-5">ATTENTION TO DETAIL</h5>
                    <h1 className="text-white">A landmark of architectural innovation</h1>
                    <p className="text-white">A hotel that’s home to cutting-edge engineering — <br /> from the unique man-made beach and infinity pool <br /> terrace, to one of the tallest grand atrium at 180 <br /> metres high</p>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
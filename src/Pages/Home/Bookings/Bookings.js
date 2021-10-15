import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import './Bookings.css';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('booking.json')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    return (

        <div className="container mt-5 pt-5" id="rooms">
            <h2 className="mt-3 booking-title">Booking Now</h2>
            <div className="booking-title-underline"></div>
            <div className="booking-container">

                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                    ></Booking>)
                }
            </div>
        </div>

    );
};

export default Bookings;
import React from 'react';
import { useParams } from 'react-router';

const Rooms = () => {
    const { bookingId, description } = useParams();
    return (
        <div>
            <h1>This is rooms page</h1>
            <h4>Booking  for {bookingId} room</h4>
            <p>{description}</p>
        </div>
    );
};

export default Rooms;
import React from 'react';
import Banner from '../Banner/Banner';
import Bookings from '../Bookings/Bookings';
import Experiences from '../Experiences/Experiences';
import Clubs from '../Clubs/Clubs';

import './Home.css'
import Awards from '../Awards/Awards';
import Contacts from '../Contacts/Contacts';
import Events from '../Events/Events';

const Home = () => {
    return (
        <div id="home" className="p-0 home-section">
            <Banner />
            <Bookings />
            <Experiences />
            <Clubs />
            <Events />
            <Awards />
            <Contacts />
        </div>
    );
};

export default Home;
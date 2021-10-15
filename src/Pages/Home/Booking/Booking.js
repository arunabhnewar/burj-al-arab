import { faDeskpro } from '@fortawesome/free-brands-svg-icons';
import { faBath, faBeer, faBreadSlice, faCoffee, faDoorClosed, faLuggageCart, faNewspaper, faWallet, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = (props) => {
    const { id, name, rent, img, size, person, summary } = props.booking;
    return (
        <div className="container p-0 room-booking">
            <Card className="mx-auto my-3" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className="room-card">

                    <Card.Title className="text-start text-primary">
                        {name}</Card.Title>

                    <Card.Text className="text-start text-primary">
                        {size} | 2 double or 1 king | {person} </Card.Text>

                    <Card.Text className="text-start text-primary">
                        {summary} </Card.Text>

                    <div>
                        <ul className="">
                            <li> <FontAwesomeIcon icon={faWifi} /> </li>
                            <li> <FontAwesomeIcon icon={faDeskpro} /> </li>
                            <li> <FontAwesomeIcon icon={faDoorClosed} /> </li>
                            <li> <FontAwesomeIcon icon={faCoffee} /> </li>
                            <li> <FontAwesomeIcon icon={faBreadSlice} /> </li>
                            <li> <FontAwesomeIcon icon={faNewspaper} /> </li>
                            <li> <FontAwesomeIcon icon={faBeer} /> </li>
                            <li> <FontAwesomeIcon icon={faLuggageCart} /> </li>
                            <li> <FontAwesomeIcon icon={faBath} /> </li>
                        </ul>
                    </div>

                    <Card.Title className="text-start text-primary">
                        <FontAwesomeIcon icon={faWallet}
                            style={{ width: '18px', color: "gray" }} /> $ {rent}</Card.Title>

                    <div>
                        <Link to={`/rooms/${id}`}>
                            <Button className="me-2" variant="warning">Read More</Button>
                        </Link>
                        <Button className="me-2" variant="success">Booking</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Booking;



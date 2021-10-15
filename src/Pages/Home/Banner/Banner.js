import React from 'react';
import { Carousel } from 'react-bootstrap';

import header1 from '../../../images/header-1.png'
import header2 from '../../../images/header-2.png'
import header3 from '../../../images/header-3.png'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={header1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Burj Al Arab</h1>
                        <h5>A global icon of Arabian luxury</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={header2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Wonder of Architectural</h1>
                        <h5>A global icon of Arabian luxury</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={header3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Beauty of Nature</h1>
                        <h5>A global icon of Arabian luxury</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
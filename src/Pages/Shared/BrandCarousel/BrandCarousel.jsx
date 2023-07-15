import React from 'react';
import { Carousel } from 'react-bootstrap';
import brand1 from '../../../assets/brand/brand1.png'
import brand2 from '../../../assets/brand/brand2.png'
import brand3 from '../../../assets/brand/brand3.png'

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={brand1}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={brand2}
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={brand3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;
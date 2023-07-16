import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import useTitle from '../../Hooks/useTitle';

const News = () => {
    useTitle('News')
    const news= useLoaderData();
    const {category_id,title, author, details, image_url, total_view, rating } = news;
    const { img, published_date, name } = author;
    return (
        <div>
            <Card className="text-center mb-3">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image src={img} style={{ height: '60px' }} roundedCircle></Image>
                        <div className='ml-2'>
                            <p className='mb-0 text-left'>{name}</p>
                            <p><small>{published_date}</small></p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text className='text-justify'>
                                <p>{details}</p>
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                    <div>
                        <FaStar />
                        <span className='ml-2'>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye />
                        <span className='ml-2'>{total_view}</span> 
                    </div>
                </Card.Footer>
                <Link to={`/category/${category_id}`}>
                <Button variant='primary' className='my-3'>All news in this Category</Button>
                </Link>
            </Card>
        </div>
    );
};

export default News;
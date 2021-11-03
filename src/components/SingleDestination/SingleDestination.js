import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleDestination.css';

const SingleDestination = ({destination}) => {
    const { title,img, description, price, _id } = destination;
    return (
        <Col className=" mt-5 ">
            <Card className="card">
                <div className=""><Card.Img style={{  height: '200px', width: '350px' }}  className="img card img-fluid image" variant="top" src={img} /></div>
                <Card.Body>
                    <Card.Title className=" cardText">{title}</Card.Title>
                    <Card.Text className=" cardText">{description}</Card.Text>
                    <Card.Text className=" cardText">{price}</Card.Text>
                    
                </Card.Body>
                <Card.Body>
                    <Link
                        to={`/orderdetails/${_id}`}
                        className="btn  btn-bg mx-auto btn-primary"
                    >
                        Book Now
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};


export default SingleDestination;
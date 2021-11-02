
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const {img,title,description,price,_id}= props.country;
    return (
        <div >
           <Card style={{ width: '18rem' }}>
  <Card.Img className="image" variant="top" src={img} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{description}</Card.Text>
    <Card.Text>{price}</Card.Text>
    <Link to={`/orderdetails/${_id}`}><Button className="btn-success text-light">Purchase Now</Button></Link>
    
    
  </Card.Body>
</Card>
        </div>
    );
};

export default Country;
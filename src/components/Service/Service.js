import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    // const {service}=props;
    const{_id,title,price,description,img}=service;
    return (
        <div>
            <img src={img} alt=''/>
            <h3>{title}</h3>
            <h5>Price:{price}</h5>
            <p className='px-3'>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className='btn btn-warning'>Book</button>
            </Link>
            
        </div>
    );
};

export default Service;
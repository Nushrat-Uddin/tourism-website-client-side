
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Destinations.css';

const Destinations = () => {
    const[destinations,setDestinations]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/destinations')
        .then(res=>res.json())
        .then(data=>setDestinations(data))
    },[])
    return (
        <div>
           <h2>Our Services</h2> 
           <div className='container'>
               {
                   destinations.map(country=> <Country key={country._id}
                            country={country}
                   ></Country>)
               }
           </div>
        </div>
    );
};

export default Destinations;
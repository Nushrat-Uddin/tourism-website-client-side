import React from 'react';
import './OrderDetails.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const OrderDetails = () => {
    const { user } = useAuth();
    const { destinationId} = useParams();
    const [destination, setDestination] = useState({});
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.booking_id = destinationId;
        axios.post('https://calm-mountain-04463.herokuapp.com/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset();
                }
            })
        console.log(data)

    }

    useEffect(() => {
        fetch(`https://calm-mountain-04463.herokuapp.com/destinations/${destinationId}`)
            .then(res => res.json())
            .then(data => setDestination(data))
    },[])
    console.log(destinationId);

    return (
        <div className="container mx-auto py-5">
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={destination?.img} className="card-img h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-left">
                            <h3 className="card-title">{destination?.title}</h3>
                            <h5 className="card-title"> {destination?.price}</h5>
                            <h5 className="card-title"> {destination?.description}</h5>
                            <div className="placeOrder d-flex flex-column">

                    <form onSubmit={handleSubmit(onSubmit)}>
      
                    <input defaultValue="test" {...register("name")} value={user.displayName} />
                    <input {...register("email", { required: true })} value={user.email} />
                    <input type="text" {...register("address")} placeholder="Address" />
                    <input type="number" {...register("phone")} placeholder="Phone" />
                    <input type="text" {...register("city")} placeholder="City" />
                    <input type="text" {...register("status")} value="Pending" style={{ border: 'none' }} />
                    <input type="submit" />
                     </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
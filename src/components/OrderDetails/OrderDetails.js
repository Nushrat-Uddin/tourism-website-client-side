import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './OrderDetails.css';

const OrderDetails = () => {
    const {user}= useAuth();
    const {destination_id} = useParams();
    const[destination,setDestination]=useState({});
    const {register,handleSubmit,reset}=useForm();

    const onSubmit=data=>{
        data.orderId=destination_id;
        axios.post('http://localhost:5000/users',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('added successfully')
                reset();
            }
        })
        console.log(data);
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/destinations/${destination_id}`)
        .then(res=>res.json())
        .then(data=>setDestination(data))
    },[destination_id])
    return (
         <div>
             <div className=" mx-auto py-5">
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={destination?.img} className="card-img h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-left">
                            <h3 className="card-title"> {destination?.title}</h3>
                            <h5 className="card-title"> {destination?.price}</h5>
                            <h5 className="card-title"> {destination?.description}</h5>
                            <div className="destinationOrder d-flex flex-column placeOrder">
                                <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("name", { required: true, maxLength: 20 })} value={user.displayName} />
    <input {...register("email", { required: true, maxLength: 20 })} value={user.email} />
    <input type="text" {...register("address")} placeholder="Address" />
    <input type="number" {...register("phone")} placeholder="Phone" />
    <input type="text" {...register("city")} placeholder="City"/>
    <input type="text" {...register("status")} value="Pending" style={{ border: 'none' }} />
                                    <input type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         </div>
    );
};

export default OrderDetails;
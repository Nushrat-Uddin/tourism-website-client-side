import React from 'react';
import useDestinations from '../../hooks/useDestinations';


const SingleOrder = ({ item }) => {
    const [destinations] = useDestinations();
    const { address, city, email, name, booking_id, status } = item;
    const myOrder = destinations.find(destination => destination._id === booking_id);

    return (
        <div className=" container" >
            <div className="row">
                <div className="col-md-4 text-left">
                    <img src={myOrder?.img} className=" h-50 w-100" alt="..." />
                    <h2 className=""> {myOrder?.title}</h2>
                    <h5 className=""> {myOrder?.price}</h5>
                </div>
                <div className="col-md-8">
                    <div className="text-left">
                        <h3 className="">Name: {name}</h3>
                        <h5 className="">Address: {address}</h5>
                        <h5 className="">Email: {email}</h5>
                        <h5 className="">City: {city}</h5>
                        <h5 className="">Status: {status}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleOrder;
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';


const MyOrder = () => {
    const { user } = useAuth();
    const [clients,setClients] = useState([]);

    useEffect(() => {
        fetch('https://calm-mountain-04463.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    const MyItems =clients.filter(client => client.email === user.email)

    return (
        <div className="backgrnd-img py-5">
            {
                MyItems.map(item => <SingleOrder
                    key={item._id}
                    item={item}
                ></SingleOrder>)
            }
        </div>
    );
};

export default MyOrder;
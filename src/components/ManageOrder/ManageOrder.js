import React, { useEffect, useState } from 'react';
import AllOrder from '../AllOrder/AllOrder';


const ManageOrder = () => {
    const [users, setUsers] = useState([]);
    const [countDelete, setCountDelete] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [countDelete])

    const handleUpdate = id => {
        const status = ['Approved'];
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)

        })
            .then(res => res.json())
            .then(data => setCountDelete(countDelete+1))
    }
    //delete an user
    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure to Delete?');
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
            setCountDelete(countDelete+1);

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        // const remainnigs = orders.filter(order => order._id !== id);
                        // setOrders(remainnigs);
                        setCountDelete(countDelete+1);
                    }
                })
        }
    }

    return (
        <div className="backgrnd-img">
            <div className="py-3">
                <h2 className="pb-2">Orders available</h2>
                {
                    users.map(user => <AllOrder
                        key={user._id}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        order={user}
                    ></AllOrder>)
                }
            </div>
        </div>
    );
};

export default ManageOrder;

import useDestinations from '../../hooks/useDestinations';


const AllOrder = ({ order, handleUpdate,handleDelete }) => {
    const [destinations] = useDestinations();
    const { name, address, city, booking_id, status } = order;
    

    const myDestination = destinations.find(destination => destination._id === booking_id);


    return (
        <div className=" container" >
            <div className="row">
                <div className="col-md-4 text-left">
                    <img src={myDestination?.img} className=" h-50 w-100" alt="..." />
                    <h3 className="">Destination: {myDestination?.title}</h3>
                    <h5 className="">Country: {myDestination?.price}</h5>
                </div>
                <div className="col-md-8">
                    <div className="text-left">
                        <h3 className="">Name: {name}</h3>
                        <h5 className="">Address: {address}</h5>
                        <h5 className="">City: {city}</h5>
                        <h5 className="">Status: {status}</h5>
                        <button onClick={() => handleDelete(order._id)}>Delete</button>
                        <button onClick={() => handleUpdate(order._id)}>Update Status</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrder;








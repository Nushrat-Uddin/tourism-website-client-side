import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useDestinations from '../../hooks/useDestinations';
import SingleDestination from '../SingleDestination/SingleDestination';



const Destinations = () => {
    const [destinations] = useDestinations();
    return (
        <>
            <div className="backgrnd-img">
                <div className="text-enter pt-5">
                    <h1 style={{ color: 'navy' }} className="fs-1">Explore Destinations</h1>
                    <h3 style={{ color: '#2C77B1' }} className=" fs-3">Book a package</h3>
                </div>
                <div className="backgrnd-img container-fluid px-4 p-md-5">
                    {
                        destinations.length === 0 ?
                        <div>
                        <Spinner animation="border" variant="danger" />
                        <Spinner animation="border" variant="warning" />
                        <Spinner animation="border" variant="info" />
                        <Spinner animation="border" variant="dark" />
                        </div>
                        :
                    <Row xs={1} md={3} lg={3} xl={4} className="g-4">
                        {
                            destinations.map(destination => <SingleDestination
                                key={destination._id}
                                destination={destination}
                            ></SingleDestination>)
                        }
                    </Row>
                    }
                </div>
            </div>
        </>
    );
};

export default Destinations;

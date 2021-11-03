import { useEffect, useState } from 'react';

const useDestinations = () => {
    const [destinations,setDestinations] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, []);
    return [destinations,setDestinations];

};

export default useDestinations;
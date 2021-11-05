import { useEffect, useState } from 'react';

const useDestinations = () => {
    const [destinations,setDestinations] = useState([]);
    useEffect(() => {
        fetch('https://calm-mountain-04463.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, []);
    return [destinations,setDestinations];

};

export default useDestinations;
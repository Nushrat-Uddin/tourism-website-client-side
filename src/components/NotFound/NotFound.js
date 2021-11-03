import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center mx-auto '>
            <h2>404 ERRORS</h2>
            <p>Page Not Found</p>
            <Link to='/home'> <button>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;
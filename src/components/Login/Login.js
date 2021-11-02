import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const{signInUsingGoogle}=useFirebase();
    return (
        <div>
            <h2 className='mt-3'>Please Login</h2>
            <button onClick={signInUsingGoogle} className='btn-success mt-2'>Google Sign In</button>
        </div>
    );
};

export default Login;
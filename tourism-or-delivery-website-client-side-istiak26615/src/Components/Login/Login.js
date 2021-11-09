import React from 'react';
import { useHistory, useLocation } from 'react-router';

import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = (props) => {
    let{loginWithGoogle}=useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || "/";
    
    const handleGoogleLogin=()=>{
        loginWithGoogle()
        .then(result=>{
            history.push(redirect);
        })
    }
    return (
        <div className="login-bg">
            <button onClick={handleGoogleLogin} className="login-button">Login With Google</button>
        </div>
    );
};

export default Login;
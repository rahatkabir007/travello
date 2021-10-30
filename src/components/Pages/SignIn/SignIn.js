import React from 'react';
import { useHistory, useLocation } from 'react-router';
import initializeAuthentication from '../../Firebase/Firebase.init';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import './SignIn.css';

initializeAuthentication();
const SignIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div>
            <div className="header-area">
                <nav className="navbar navbar-expand-lg py-4">
                    <Header></Header>
                </nav>
            </div>
            <div className="signin-section">
                <h1>This is sign in</h1>
                <button onClick={handleGoogleSignIn} className="btn btn-dark">Google Login</button>



            </div>
        </div>
    );
};
export default SignIn;
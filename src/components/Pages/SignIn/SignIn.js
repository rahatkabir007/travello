import React from 'react';
import { useHistory, useLocation } from 'react-router';
import initializeAuthentication from '../../Firebase/Firebase.init';
import useAuth from '../../hooks/useAuth';
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
            <div className="signin-section">
                <div className="row w-75 mx-auto signin-area-section">
                    <div className="col-lg-8 w-50 mx-auto signin-left">
                        <img className="w-75 mx-auto" src="https://images.pexels.com/photos/9975988/pexels-photo-9975988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </div>
                    <div className="col-lg-4 w-50 ms-auto h-75 my-auto signin-right">
                        <h1>Sign in</h1>
                        <hr/>
                        <button onClick={handleGoogleSignIn} className="btn signin-btn"><i className="fab fa-google me-2"></i>Sign in with Google</button>
                    </div>
                </div>
               



            </div>
        </div>
    );
};
export default SignIn;
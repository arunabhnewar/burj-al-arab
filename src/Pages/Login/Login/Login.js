import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const { signInUsingGoogle, user, signInUsingFacebook } = useAuth();
    console.log(user);
    return (
        <div className="container my-5 pb-3">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h2 className="text-success my-5">Login</h2>
                    <div>
                        <p className="text-danger"></p>
                        <input className="input-field border-bottom border-0 w-50" type="text" name="first name" placeholder="First name" />
                        <br /> <br />
                        <input className="input-field border-bottom border-0 w-50" type="text" name="last name" placeholder="Last name" />
                        <br /> <br />
                        <input className="input-field border-bottom border-0 w-50" type="phone" name="phone" placeholder="Phone" />
                        <br /> <br />
                        <input className="input-field border-bottom border-0 w-50" type="email" name="email" placeholder="Email" />
                        <br /> <br />
                        <input className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Password" />
                        <br /> <br />

                        <p>new to burj-al-arab? <br />
                            <Link className="form-text" to="register">Create an Account</Link>
                        </p>
                        <div>------or---------</div>
                        <br />

                        <button onClick={signInUsingGoogle} type="submit" className="btn btn-success me-2"> <FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>

                        <button onClick={signInUsingFacebook} type="submit" className="btn btn-primary text-white"> <FontAwesomeIcon icon={faFacebook} /> Facebook Sign In</button>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 pt-3">
                    <div className="img">
                        <img className="img-fluid w-75" src={login} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
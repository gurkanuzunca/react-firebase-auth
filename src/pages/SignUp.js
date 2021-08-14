import React, { useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../actions/authAction';
import Alert from '../components/Alert';

function SignUp() {
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();
    const currentUser = useSelector(state => state.auth.user);

    if (currentUser !== null) {
        return <Redirect to="/" />
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(signUp(emailRef.current.value, passwordRef.current.value))
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Sign Up</h2>
                            <Alert />

                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="email-form" className="form-label">Email</label>
                                    <input ref={emailRef} type="email" className="form-control" id="email-form" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password-form" className="form-label">Password</label>
                                    <input ref={passwordRef} type="password" className="form-control" id="password-form" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                            </form>
                        </div>
                    </div>

                    <div className="text-center mt-2">
                        Already have an account? <Link to="/signin">Sign In</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp;

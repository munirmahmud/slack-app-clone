import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { formatErrors } from "../authHelpers";
import firebase from "../../../server/firebase";
import '../Auth.css';

const Login = () => {
    const user = {
        email: '',
        password: '',
    };
    const [userState, setUserState] = useState(user);
    const [errors, setErrors] = useState([]);

    const handleInput = (e) => {
        const target = e.target;
        setUserState(currentState => {
            const currentUser = { ...currentState };
            currentUser[target.name] = target.value;
            return currentUser;
        });
    };

    const formValidation = () => {
        if (isFormEmpty()) {
            setErrors(error => error.concat({message: "Please fill in all fields."}));
            return false;
        }
        return true;
    };

    const isFormEmpty = () => {
        return !userState.email.length || !userState.password.length;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(() => []);

        if (formValidation()) {
            firebase.auth().signInWithEmailAndPassword(userState.email, userState.password)
                .then(user => {
                    setUserState({email: '', password: ''});
                    console.log(user);
                }).catch(serverError => {
                setErrors(error => error.concat({message: serverError.message}));
            });
        }
    };

    return (
        <div className="form-wrapper">
            <div className="form-fields">
                <div className="form-header">
                    <h2>Sign In</h2>
                </div>

                {formatErrors(errors)}

                <form onSubmit={handleSubmit}>
                    <div className="field-group">
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="field-control"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            value={userState.email}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="field-group">
                        <label className="sr-only" htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="field-control"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            value={userState.password}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="field-group">
                        <button type="submit" className="btn btn-light fluid">Sign In</button>
                    </div>
                </form>

                <div className="form-footer">
                    Need an account? Please <Link to="/register">Register</Link>
                </div>

            </div>
        </div>
    );
};

export default Login;
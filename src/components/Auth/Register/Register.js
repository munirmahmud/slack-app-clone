import React, { useState } from 'react';
import { Link } from "react-router-dom";

import '../Auth.css';

const Register = () => {
    const user = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [userState, setUserState] = useState(user);

    const handleInput = (e) => {
        const target = e.target;
        setUserState(currentState => {
            const currentUser = { ...currentState };
            currentUser[target.name] = target.value;
            return currentUser;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <div className="form-wrapper">
            <div className="form-fields">
                <div className="form-header">
                    <h2>Register</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="field-group">
                        <label className="sr-only" htmlFor="username">User Name</label>
                        <input
                            type="text"
                            className="field-control"
                            id="username"
                            name="username"
                            placeholder="Enter User Name"
                            value={userState.username}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="field-group">
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="field-control"
                            id="email"
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
                            placeholder="Enter Password"
                            value={userState.password}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="field-group">
                        <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            className="field-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={userState.confirmPassword}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="field-group">
                        <button type="submit" className="btn btn-light fluid">Register</button>
                    </div>
                </form>

                <div className="form-footer">
                    Have an account? Please <Link to="/login">Login</Link>
                </div>

            </div>
        </div>
    );
};

export default Register;
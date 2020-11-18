import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { formatErrors } from "../authHelpers";
import firebase from "../../../server/firebase";
import '../Auth.css';

const Register = () => {
    const user = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    const [userState, setUserState] = useState(user);
    const [errors, setErrors] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);

    const userCollectionRef = firebase.database().ref('users');

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
        } else if(!checkPassword()) {
            return false;
        }
        return true;
    };

    const isFormEmpty = () => {
        return !userState.username.length || !userState.email.length || !userState.password.length || !userState.confirmPassword.length;
    };

    const checkPassword = () => {
        if(userState.password.length < 6) {
            setErrors(error => error.concat({message: "Password should be at least 6 or more characters."}));
            return false;
        } else if (userState.password !== userState.confirmPassword) {
            setErrors(error => error.concat({message: "Password do not match."}));
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(() => []);

        if (formValidation()) {
            firebase.auth().createUserWithEmailAndPassword(userState.email, userState.password)
                .then(createdNewUser => {
                    updateUserInfo(createdNewUser);
                    setIsSuccess(true);
                    setUserState({username: '', email: '', password: '', confirmPassword: ''});
                    setTimeout(() => {
                        setIsSuccess(false);
                    }, 3000);
                }).catch(serverError => {
                setErrors(error => error.concat({message: serverError.message}));
            });
        }
    };

    const updateUserInfo = (createdNewUser) => {
        if (createdNewUser) {
            createdNewUser.user.updateProfile({
                displayName: userState.username,
                photoURL: `http://gravatar.com/avatar/${createdNewUser.user.uid}?d=identicon`
            }).then(() => {
                saveUserInfoIntoDB(createdNewUser)
            }).catch(serverError => {
                setErrors(error => error.concat({message: serverError.message}));
            })
        }
    };

    const saveUserInfoIntoDB = (createdNewUser) => {
        userCollectionRef.child(createdNewUser.user.uid).set({
            displayName: createdNewUser.user.displayName,
            photoURL: createdNewUser.user.photoURL
        }).then(() => {
            console.log('Saved in db');
        }).catch(serverError => {
            setErrors(error => error.concat({message: serverError.message}));
        });
    };

    return (
        <div className="form-wrapper">
            <div className="form-fields">
                <div className="form-header">
                    <h2>Register</h2>
                </div>

                {formatErrors(errors)}

                {isSuccess && <div className="alert success">Successfully Registered</div>}

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
                        <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            className="field-control"
                            id="confirmPassword"
                            name="confirmPassword"
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
import React, { useState } from 'react';
import './Modal.styles.css';
import firebase from "../../server/firebase";
import { connect } from "react-redux";


const Modal = ({showModal, closeModal, user}) => {
    const [channelState, setChannelState] = useState({name: '', description: ''});

    const channelRef = firebase.database().ref('channels');

    const handleInput = (e) => {
        const target = e.target;

        setChannelState(currentState => {
            const state = { ...currentState };
            state[target.name] = target.value;
            return state;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (channelState.name === '') {
            return;
        }

        const key = channelRef.push().key;
        const channel = {
            id: key,
            channelName: channelState.name.toLowerCase().replace(" ", ""),
            description: channelState.description,
            createdBy: {
                name: user.displayName,
                avatar: user.photoURL
            }
        };

        channelRef.child(key).update(channel).then(() => {
            setTimeout(() => {
                setChannelState({name: '', description: ''});
                closeModal();
            }, 800);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <>
            {showModal && (
                <div className="modal__container">
                    <div className="modal__wrapper">
                        <div className="modal__header">
                            <h2>Add New Channel</h2>
                        </div>

                        <div className="modal__body">
                            <form onSubmit={handleSubmit}>
                                <div className="field-group">
                                    <label className="sr-only" htmlFor="name">Channel Name</label>
                                    <input
                                        type="text"
                                        className="field-control"
                                        id="name"
                                        name="name"
                                        placeholder="Enter Channel Name"
                                        value={channelState.name}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="field-group">
                                    <label className="sr-only" htmlFor="description">Channel Description</label>
                                    <input
                                        type="text"
                                        className="field-control"
                                        id="description"
                                        name="description"
                                        placeholder="Channel Description"
                                        value={channelState.description}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div className="modal__actions">
                                    <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">Save</button>
                                    <button onClick={closeModal} type="button" className="btn btn-light">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
};

export default connect(mapStateToProps) (Modal);
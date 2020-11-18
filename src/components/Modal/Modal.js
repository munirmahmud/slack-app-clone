import React, { useState } from 'react';
import './Modal.styles.css';

const Modal = ({showModal, closeModal}) => {
    const [channelState, setChannelState] = useState({name: '', description: ''});

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

        return (channelState.name === '');

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
                            </form>
                        </div>

                        <div className="modal__actions">
                            <button type="button" className="btn btn-primary">Save</button>
                            <button onClick={closeModal} type="button" className="btn btn-light">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
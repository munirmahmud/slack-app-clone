import React, { useState } from 'react';
import './MessageInput.styles.css';
import { IoIosAttach, IoMdSend } from "react-icons/io";
import firebase from "../../../server/firebase";
import { connect } from "react-redux";

const MessageInput = (props) => {
    const [messageState, setMessageState] = useState("");

    const messageRef = firebase.database().ref('messages');

    const createMessageInfo = () => {
        return {
            user: {
                id: props.user.uid,
                avatar: props.user.photoURL,
                name: props.user.displayName,
            },
            content: messageState,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (messageState) {
            messageRef.child(props.channel.id).push().set(createMessageInfo())
                .then(() => setMessageState(""))
                .catch(error => console.log(error));
        }
    };

    return (
        <div className="message__input">
            <div className="row">
                <div className="message__input-field">
                    <form onSubmit={handleSubmit}>
                        <textarea name="message" rows="4" value={messageState} onChange={e => setMessageState(e.target.value)} placeholder="Write Message" />
                        <div className="message__input-icons">
                            <div className="message__input-icons-right">
                                <IoIosAttach className="icon" />
                                <button type="submit"><IoMdSend className="send_icon icon" /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser,
        channel: state.channel.currentChannel
    }
};

export default connect(mapStateToProps) (MessageInput);
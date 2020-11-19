import React, { useEffect, useState } from 'react';
import './MessageContent.styles.css';
import firebase from "../../../server/firebase";
import {connect} from "react-redux";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.locale(en);
const timeAgo = new TimeAgo();

const MessageContent = (props) => {
    const messagesRef = firebase.database().ref('messages');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([]);

        if (props.channel) {
            messagesRef.child(props.channel.id).on('child_added', snap => {
                setMessages(currentState => {
                    let updatedState = [...currentState];
                    updatedState.push(snap.val());
                    return updatedState;
                });
            });

            return () => messagesRef.off();
        }
    }, [props.channel]);

    return (
        <div className="message__content">
            {messages.length > 0 && messages.map(message => (
                <div key={message.timestamp} className="row">
                    <div className="message__content-wrapper">
                        <img src={message.user.avatar} alt={message.user.name} />
                        <div className="message__info">
                            <strong>{message.user.name} <span>{timeAgo.format(message.timestamp)}</span></strong>
                            <p>{message.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        channel: state.channel.currentChannel
    }
};

export default connect(mapStateToProps) (MessageContent);
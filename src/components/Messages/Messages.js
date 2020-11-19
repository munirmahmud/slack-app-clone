import React from 'react';
import MessageHeader from "./MessageHeader/MessageHeader";
import MessageInput from "./MessageInput/MessageInput";

const Messages = () => {
    return (
        <div className="message__body">
            <MessageHeader />
            <MessageInput />
        </div>
    );
};

export default Messages;
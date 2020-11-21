import React from 'react';
import MessageHeader from "./MessageHeader/MessageHeader";
import MessageInput from "./MessageInput/MessageInput";
import MessageContent from "./MessageContent/MessageContent";

const Messages = () => {
    return (
        <div className="message__body">
            <MessageHeader />
            <MessageContent />
            <MessageInput />
        </div>
    );
};

export default Messages;
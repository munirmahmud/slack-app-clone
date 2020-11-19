import React from 'react';
import './MessageInput.styles.css';
import { IoIosAttach, IoMdSend } from "react-icons/io";

const MessageInput = () => {
    return (
        <div className="message__input">
            <div className="row">
                <div className="message__input-field">
                    <textarea name="message" rows="4" placeholder="Write Message" />
                    <div className="message__input-icons">
                        <div className="message__input-icons-right">
                            <IoIosAttach className="icon" />
                            <IoMdSend className="send_icon icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageInput;
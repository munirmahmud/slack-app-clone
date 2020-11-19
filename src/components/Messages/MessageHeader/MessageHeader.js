import React from 'react';
import './MessageHeader.styles.css';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";


const MessageHeader = () => {
    return (
        <div className="message__header">
            <div className="row">
                <div className="col-6">
                    <div className="message__header-left">
                        #channel
                        <span className="icon">
                            <AiOutlineStar />
                        </span>
                    </div>
                </div>

                <div className="col-6">
                    <div className="message__header-right">
                        3 Users
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageHeader;
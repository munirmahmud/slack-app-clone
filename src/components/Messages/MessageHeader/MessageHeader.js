import React, { useState } from 'react';
import './MessageHeader.styles.css';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {connect} from "react-redux";

const MessageHeader = (props) => {
    const [channelStar, setChannelStar] = useState(false);

    const givenStar = () => {
        setChannelStar(prev => !prev);
    };

    return (
        <div className="message__header">
            <div className="row">
                <div className="col-6">
                    <div className="message__header-left">
                        #{props.channel.channelName}
                        <span onClick={givenStar} className="icon">
                            {channelStar ? <AiFillStar /> : <AiOutlineStar />}
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

const mapStateToProps = (state) => {
    return {
        channel: state.channel.currentChannel
    }
};

export default connect(mapStateToProps) (MessageHeader);
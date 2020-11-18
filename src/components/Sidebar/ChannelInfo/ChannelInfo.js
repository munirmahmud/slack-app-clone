import React from 'react';
import './ChannelInfo.styles.css';
import { connect } from "react-redux";


const ChannelInfo = () => {
    return (
        <>
            <div className="channel__area">
                <div className="channel__header">
                    <span className="item channel__header-text">Channels (0)</span>
                </div>

                <div className="all__channels">
                    <span className="item active">General</span>
                    <span className="item">Youtube</span>
                    <span className="item">Facebook</span>
                    <span className="item">Instagram</span>
                </div>

                <div className="channel__header">
                    <span className="item">Add new Channel</span>
                </div>

            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {

    }
};

export default connect() (ChannelInfo);
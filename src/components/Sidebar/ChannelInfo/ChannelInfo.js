import React, { useState } from 'react';
import './ChannelInfo.styles.css';
import { connect } from "react-redux";
import Modal from "../../Modal/Modal";


const ChannelInfo = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

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
                    <span onClick={openModal} className="item">Add new Channel</span>
                </div>
            </div>

            <Modal showModal={showModal} closeModal={closeModal} />
        </>
    );
};

const mapStateToProps = (state) => {
    return {

    }
};

export default connect() (ChannelInfo);
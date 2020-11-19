import React, { useState, useEffect } from 'react';
import './ChannelInfo.styles.css';
import { connect } from "react-redux";
import Modal from "../../Modal/Modal";
import { HiPlus } from "react-icons/hi";
import firebase from "../../../server/firebase";
import { setChannel } from "../../../store/actions/actionCreator";

const ChannelInfo = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [channels, setChannels] = useState([]);

    const channelsRef = firebase.database().ref('channels');

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        channelsRef.on('child_added', (snap) => {
            setChannels(currentState => {
                const updatedChannel = [ ...currentState ];
                updatedChannel.push(snap.val());
                return updatedChannel;
            });
        });

        return () => channelsRef.off();
    }, []);

    useEffect(() => {
        if (channels.length > 0) {
            props.selectChannel(channels[0]);
        }
    }, [!props.channel ? channels : '']);

    const displayChannels = () => {
        return channels.length > 0 && channels.map(channel => (
            <span
                key={channel.id}
                className={`item ${props.channel && channel.id === props.channel.id ? 'active' : ''}`}
                onClick={() => props.selectChannel(channel)}
            >
                {channel.channelName}
            </span>
        ))
    };

    return (
        <>
            <div className="channel__area">
                <div className="channel__header">
                    <span className="item channel__header-text">Channels ({channels.length})</span>
                </div>

                <div className="all__channels">
                    {displayChannels()}
                </div>

                <div className="channel__header">
                    <span onClick={openModal} className="item"><HiPlus />Add new Channel</span>
                </div>
            </div>

            <Modal showModal={showModal} closeModal={closeModal} />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        channel: state.channel.currentChannel
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectChannel: (channel) => dispatch(setChannel(channel))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ChannelInfo);
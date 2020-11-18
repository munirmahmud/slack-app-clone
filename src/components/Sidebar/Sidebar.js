import React from 'react';
import './Sidebar.styles.css';
import { FiEdit } from "react-icons/fi";
import ChannelInfo from "./ChannelInfo/ChannelInfo";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__top">
                <h4>channelname</h4>

                <div className="edit__icon">
                    <FiEdit />
                </div>
            </div>

            <div className="sidebar__bottom">
                <ChannelInfo />
            </div>
        </aside>
    );
};

export default Sidebar;
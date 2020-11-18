import React from 'react';
import './Sidebar.styles.css';
import { FiEdit } from "react-icons/fi";


const Sidebar = (props) => {
    return (
        <aside className="sidebar">
            <div className="sidebar__top">
                <h4>channelname</h4>

                <div className="edit__icon">
                    <FiEdit />
                </div>
            </div>

            <div className="sidebar__bottom">
                
            </div>
        </aside>
    );
};

export default Sidebar;
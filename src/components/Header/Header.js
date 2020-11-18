import React from 'react';
import './Header.styles.css';
import { FiHelpCircle } from "react-icons/fi";
import { BiTime } from "react-icons/bi";


const Header = () => {
    return (
        <header className="header">
            <div className="row">
                <div className="col-4">

                </div>

                <div className="col-4">
                    <div className="header__middle">
                        <div className="header__middle-left icon">
                            <BiTime />
                        </div>
                        <div className="header__middle-input">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search Messages..."
                            />
                        </div>

                        <div className="header__middle-right icon">
                            <FiHelpCircle />
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="user__photo">
                        <img src="https://ca.slack-edge.com/T04GZKGQY-U014TDGHJQN-fe8d05f98df9-48" alt="User"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
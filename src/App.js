import React from 'react';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Messages from "./components/Messages/Messages";

const App = () => {
    return (
        <>
            <Header />

            <div className="main-content">
                <Sidebar />
                <Messages />
            </div>
        </>
    );
};

export default App;
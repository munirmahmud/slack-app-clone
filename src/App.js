import React from 'react';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
    return (
        <>
            <Header />

            <div className="main-content">
                <Sidebar />
            </div>
        </>
    );
};

export default App;
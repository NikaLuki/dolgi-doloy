import React from "react";
import useMockData from "../utils/mockData";

const AuthPage = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        console.log("click");
        initialize();
    };
    return (
        <div className="container mt-5">
            <h1>Main</h1>
            <h3>Инициализация в FireBase</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Progress: {progress}%</li>
                {error && <li>Error: {error}</li>}
            </ul>
            <button onClick={handleClick}>Инициализация</button>
        </div>
    );
};

export default AuthPage;

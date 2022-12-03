import React from "react";
import AccountsScreen from "../components/AccountsScreen";

const MainPage = () => {
    return (
        <div className="container mx-auto flex justify-center">
            <AccountsScreen />
            <AccountsScreen />
            <AccountsScreen />
        </div>
    );
};

export default MainPage;

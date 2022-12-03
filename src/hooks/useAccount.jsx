import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import accountService from "../services/account.service";

const AccountContext = React.createContext();

export const useAccount = () => {
    return useContext(AccountContext);
};

const AccountProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getAccounts();
    }, []);

    useEffect(() => {
        if (!error) {
            toast(error);
            setError(null);
        }
    }, [error]);

    async function getAccounts() {
        try {
            const { content } = await accountService.get();
            console.log(content);
            setAccounts(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }
    function errorCatcher(error) {
        const message = error.response.data;
        setError(message);
        setLoading(false);
    }
    return (
        <AccountContext.Provider value={{ accounts }}>
            {!isLoading ? children : "Loading..."}
        </AccountContext.Provider>
    );
};
export default AccountProvider;

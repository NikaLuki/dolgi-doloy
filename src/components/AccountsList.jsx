import React from "react";
import { useAccount } from "../hooks/useAccount";
import AccountCard from "./AccountCard";

const AccountsList = () => {
    const { accounts } = useAccount();

    if (accounts) {
        return (
            <div className="flex">
                {accounts.map((acc) => (
                    <AccountCard key={acc._id} {...acc} />
                ))}
            </div>
        );
    }
};

export default AccountsList;

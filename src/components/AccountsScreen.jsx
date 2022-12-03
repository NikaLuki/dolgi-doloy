import React from "react";
import AccountsList from "./AccountsList";

const AccountsScreen = () => {
    return (
        <div className="rounded-xl bg-[#f4f5fa] text-[#242423] m-4">
            <div className="p-[20px]">
                <div className="flex justify-between">
                    <h4 className="flex p-2">Счета</h4>
                    <div className="flex p-2"></div>
                </div>
                <div className="flex mt-6">
                    <div className="overflow-hidden ">
                        <AccountsList />
                    </div>
                    <button className="flex self-center rounded-xl">+</button>
                </div>
            </div>
        </div>
    );
};

export default AccountsScreen;

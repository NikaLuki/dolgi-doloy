import React from "react";

const AccountCard = ({ name, balance, _id }) => {
    return (
        <div className="mr-5 max-w-max  ">
            <div className="pb-2 border-b-4 border-white-500">{name}</div>
            <div className=" ">
                <div className="mt-4 flex justify-between">
                    <p>Баланс</p>
                    <p>{balance}</p>
                </div>
            </div>{" "}
        </div>
    );
};

export default AccountCard;

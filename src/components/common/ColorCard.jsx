import React from "react";

const colors = {
    cyan: "from-cyan-500 to-blue-500",
    sky: "bg-gradient-to-r from-sky-500 to-indigo-500",
    violet: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
};

const ColorCard = ({ children, color }) => {
    return (
        <div className={"rounded-xl bg-gradient-to-r " + colors[color]}>
            {children}
        </div>
    );
};

export default ColorCard;

import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex justify-between px-5 h-[50px] bg-[#242423] text-white items-center shadow-md">
            <Link to={"/"}>Main</Link>
            <Link to={"/history"}>Hisotry</Link>
            <Link to={"/auth"}>Auth</Link>
        </nav>
    );
};

export default Navigation;

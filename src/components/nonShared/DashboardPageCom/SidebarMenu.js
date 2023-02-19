import React from "react";
import { SidebarMenuData } from "../../../database/DashboardPageData";
import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
    return (
        <ul className="menu py-6 px-1 w-max bg-gray text-sm ">
            {SidebarMenuData.map((link) => {
                return (
                    <li key={link._id}>
                        <NavLink
                            to={link.link}
                            className="text-black font-medium capitalize py-1 px-6 mb-1 rounded-sm foodFunSidebar tracking-wide  hover:bg-green-100 hover:text-white"
                        >
                            {link.name}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

export default SidebarMenu;

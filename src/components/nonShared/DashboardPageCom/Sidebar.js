import React from "react";
import SidebarMenu from "./SidebarMenu";
import { Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="drawer drawer-mobile">
                <input
                    id="dashboardDrawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col ">
                    <div className="mx-4 my-6 flex justify-between items-center border-b-[1px] border-gray pb-1">
                        <h2 className=" uppercase text-green-500 font-medium  tracking-wide text-lg md:text-2xl opacity-80">
                            dashboard
                        </h2>
                        <label
                            htmlFor="dashboardDrawer"
                            className="text-green-500 border-green-100 px-1 py-1 uppercase border rounded-sm drawer-button lg:hidden"
                        >
                            <GiHamburgerMenu />
                        </label>
                    </div>

                    {/* main contents */}
                    <div className="mx-4">
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="dashboardDrawer"
                        className="drawer-overlay"
                    ></label>
                    <SidebarMenu />
                </div>
            </div>
        </section>
    );
};

export default Sidebar;

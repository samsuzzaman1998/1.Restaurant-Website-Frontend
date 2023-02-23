import React, { useContext, useEffect, useRef, useState } from "react";
// import logo from "../../../assets/logo.png";
import avatar from "../../assets/M1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { navbarLink } from "../../database/NavbarData";
import { userContext } from "../../Utils/Context/userContext";
import useUserToken from "../../Utils/useUserToken";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const [gUser, gLoading, gError] = useAuthState(auth); // google user
    const [signOut, loading, error] = useSignOut(auth);
    const { user, userError, userLoading, userLogout, handleLoginToken } =
        useContext(userContext); // custom user

    // navbar toggle
    const handleToggleBtn = () => {
        setShowLinks(!showLinks);
    };

    // toggle responsive navbar
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = "0px";
        }
    }, [showLinks]);

    const userToken = useUserToken();

    useEffect(() => {
        handleLoginToken(userToken);
    }, [user?.email]);

    // logout handler
    const handleLogOut = async () => {
        user?.email ? userLogout() : await signOut();
    };

    return (
        <nav className="bg-green-100 sticky top-0 z-50">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0 py-2 md:py-2  overflow-hidden md:overflow-visible ">
                <div className="flex justify-between items-center ">
                    {/* <img src={logo} alt="brand" /> */}
                    <Logo />

                    <button
                        className="md:hidden text-white text-lg sm:text-xl transition-all duration-200 p-2 rounded-full hover:bg-green-200"
                        onClick={handleToggleBtn}
                    >
                        {showLinks ? (
                            <GrClose className="text-white text-sm" />
                        ) : (
                            <GiHamburgerMenu className="text-white text-base " />
                        )}
                    </button>
                </div>

                <div
                    className="md:!h-auto bg-green-100 md:bg-transparent ease-in duration-300 transition-[height] "
                    ref={linksContainerRef}
                >
                    <ul
                        ref={linksRef}
                        className="flex flex-col md:flex-row md:items-center sm:pb-2 md:pb-0 xs:pt-2 md:pt-0"
                    >
                        {navbarLink.map((value) => {
                            const { id, url, text } = value;
                            return (
                                <>
                                    <li key={id}>
                                        <NavLink
                                            to={url}
                                            className="uppercase text-sm tracking-wide text-white my-4 md:my-0 md:mx-2 py-2 md:py-0 transition-all duration-300 ease-in hover:text-green-500 foodFunMainMenu"
                                        >
                                            {text}
                                        </NavLink>
                                    </li>
                                </>
                            );
                        })}
                        <li className="flex justify-between items-center mt-[8px] md:mt-0 md:mx-[4px]">
                            <Link to="/order" className="relative inline-block">
                                <div className="absolute top-[-5px] right-[-4px] text-[10px] font-medium inline-block text-white bg-green-500 px-[4px] rounded-full">
                                    20
                                </div>
                                <AiOutlineShoppingCart className="text-white text-2xl" />
                            </Link>
                        </li>
                        {(user?.email || gUser) && (
                            <li
                                className=" dropdown dropdown-bottom dropdown-end md:ml-2"
                                tabIndex={0}
                            >
                                <div className="avatar">
                                    <div className=" rounded-full">
                                        <img
                                            src={
                                                user?.avatar || gUser?.photoURL
                                            }
                                            alt="avatar"
                                            className="w-full max-w-[40px]"
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-green-100 rounded-box w-[150px] hidden md:block"
                                >
                                    <li>
                                        <NavLink
                                            to="/dashboard/profile"
                                            className="uppercase text-sm tracking-wide text-white my-4 md:my-0 md:mx-2 py-2 md:pt-2 transition-all duration-300 ease-in hover:text-green-500 foodFunMainMenu bg-transparent"
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleLogOut()}
                                            className="uppercase text-sm tracking-wide text-white my-4 md:my-0 md:mx-2 py-2 md:py-2 transition-all duration-300 ease-in hover:text-green-500 foodFunMainMenu bg-transparent"
                                        >
                                            log out
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        )}
                        {!user?.status && !gUser && (
                            <li>
                                <Link
                                    to="/signup"
                                    className=" uppercase tracking-wider text-white text-sm border-[1px] border-white rounded-3xl px-4 py-[2px] md:ml-2 mt-2 md:mt-0 transition-all duration-300 hover:bg-white hover:border-green-100 hover:text-green-400 font-medium"
                                >
                                    sign up
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

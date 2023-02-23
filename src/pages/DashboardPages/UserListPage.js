import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../components/shared/Loading";

const UserListPage = () => {
    const [users, setUsers] = useState({
        avatar: "",
        email: "",
        name: "",
        role: "",
        location: "",
        contact: "",
    });
    const [userLoading, setUserLoading] = useState(true);
    const [userError, setUserError] = useState(false);
    const token = localStorage.getItem("access-token");

    const getMeHandler = async () => {
        try {
            if (token) {
                const config = {
                    headers: { authorization: `Bearerr ${token}` },
                };
                const response = await axios.get(
                    "http://localhost:3001/api/v1/user/get-all-user",
                    config
                );
                if (response?.data?.status) {
                    setUsers(response?.data?.result);
                    setUserLoading(false);
                    setUserError(false);
                }
            } else {
                setUsers({ status: false });
                setUserLoading(false);
                return;
            }
        } catch (error) {
            const temp = { status: false };
            setUserLoading(false);
            setUserError(temp);
        }
    };

    useEffect(() => {
        getMeHandler();
    }, [token]);

    if (userLoading) {
        return <Loading />;
    }
    return (
        <section className=" mb-12">
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={user?.avatar}
                                                        alt="Avatar"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td className="capitalize">{user?.role}</td>
                                    <td>
                                        <button className="capitalize text-xs tracking-wide text-white bg-green-100 px-2     py-[2px] rounded-xl transition-all duration-300 hover:bg-green-400 mr-[4px]">
                                            admin
                                        </button>
                                        <button className="capitalize text-xs tracking-wide text-white bg-red px-2     py-[2px] rounded-xl transition-all duration-300 hover:bg-opacity-80">
                                            remove
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default UserListPage;

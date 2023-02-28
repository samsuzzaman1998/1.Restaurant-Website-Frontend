import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../components/shared/Loading";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

const UserListPage = () => {
    const token = localStorage.getItem("access-token");

    const {
        isLoading,
        isError,
        data: users,
        error,
        refetch,
    } = useQuery("allUsers", () =>
        fetch("http://localhost:3001/api/v1/user/get-all-user", {
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then((response) => response.json())
    );

    const handleMakeAdminBtn = (email) => {
        fetch(`http://localhost:3001/api/v1/user/make-admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.status) {
                    refetch();
                    toast.success("Admin added");
                } else {
                    toast.error("Not eligible");
                }
            })
            .catch((err) => {
                toast.error("Admin added failed");
                console.log(err);
            });
    };

    if (isLoading) {
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
                        {users?.result?.map((user, index) => {
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
                                        {user?.role !== "ADMIN" && (
                                            <button
                                                onClick={() =>
                                                    handleMakeAdminBtn(
                                                        user?.email
                                                    )
                                                }
                                                className="capitalize text-xs tracking-wide text-white bg-green-100 px-2     py-[2px] rounded-xl transition-all duration-300 hover:bg-green-400 mr-[4px]"
                                            >
                                                admin
                                            </button>
                                        )}
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

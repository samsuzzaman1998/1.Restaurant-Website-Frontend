import React, { useState } from "react";
import Loading from "../../components/shared/Loading";
import useFetchData from "../../Utils/Hook/useFetchData";
import { toast } from "react-toastify";
import DeleteFoodModal from "../../components/nonShared/DashboardPageCom/DeleteFoodModal";
import axios from "axios";
import UpdateFoodModal from "../../components/nonShared/DashboardPageCom/UpdateFoodModal";

const FoodListPage = () => {
    const [foods, loading, error, refetch] = useFetchData("food/get-foods");
    const [deletedFoodID, setDeletedFoodID] = useState("");
    const [updateFood, setUpdateFood] = useState({});
    const [showUpdateFoodModal, setShowUpdateFoodModal] = useState(false);

    const handleUpdateFood = (food) => {
        setUpdateFood(food);
        setShowUpdateFoodModal(true);
    };

    const handleDeleteProcess = (response) => {
        if (response) {
            const url = `http://localhost:3001/api/v1/food/delete-food/${deletedFoodID}`;
            axios
                .delete(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "access-token"
                        )}`,
                    },
                })
                .then((res) => {
                    console.log(res);
                    refetch();
                    // inform
                    res?.status &&
                        toast.success("Deleted", { position: "top-center" });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            return;
        }
    };

    if (loading) {
        return <Loading />;
    }
    if (error) {
        console.log(error?.message);
    }

    return (
        <section className="mt-4 mb-12">
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Photo</th>
                            <th>title</th>
                            <th>price</th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods?.map((food, index) => {
                            return (
                                <tr key={food._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-14 h-14">
                                                    <img
                                                        src={food?.thumbnail}
                                                        alt="foodPhoto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{food?.title}</td>
                                    <td className="capitalize">
                                        {food?.price}
                                    </td>
                                    <td>
                                        <label
                                            onClick={() =>
                                                handleUpdateFood(food)
                                            }
                                            htmlFor="update_food_modal"
                                            className="capitalize text-xs tracking-wide text-white bg-green-100 px-2     py-[2px] rounded-xl transition-all duration-300 hover:bg-green-400 mr-[4px] cursor-pointer"
                                        >
                                            Update
                                        </label>

                                        <label
                                            onClick={() =>
                                                setDeletedFoodID(food?._id)
                                            }
                                            htmlFor="delete_food_modal"
                                            className="capitalize text-xs tracking-wide text-white bg-red px-2     py-[2px] rounded-xl transition-all duration-300 hover:bg-opacity-80 cursor-pointer"
                                        >
                                            Delete
                                        </label>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {showUpdateFoodModal && (
                <UpdateFoodModal
                    food={updateFood}
                    setShowUpdateFoodModal={setShowUpdateFoodModal}
                    refetch={refetch}
                />
            )}
            <DeleteFoodModal handleDeleteProcess={handleDeleteProcess} />
        </section>
    );
};

export default FoodListPage;

import React from "react";
import Loading from "../../components/shared/Loading";
import useFetchData from "../../Utils/Hook/useFetchData";
import { toast } from "react-toastify";

const FoodListPage = () => {
    const [foods, loading, error] = useFetchData("food/get-foods");

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
                                        <button className="capitalize text-xs tracking-wide text-white bg-green-100 px-2     py-[2px] rounded-xl transition-all duration-300 hover:bg-green-400 mr-[4px]">
                                            update
                                        </button>
                                        <button className="capitalize text-xs tracking-wide text-white bg-red px-2     py-[2px] rounded-xl transition-all duration-300 hover:bg-opacity-80">
                                            delete
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

export default FoodListPage;

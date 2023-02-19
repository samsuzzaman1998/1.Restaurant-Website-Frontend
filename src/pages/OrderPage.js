import React from "react";
import { foodData } from "../database/HomePageData";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const OrderPage = () => {
    const data = foodData.slice(0, 5);

    return (
        <>
            <section className="mt-8 sm:mt-16 md:mt-24 mb-8 w-full max-w-7xl mx-auto px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0">
                <h2 className="uppercase text-lg xs:text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-center text-green-100">
                    your food orders
                </h2>
            </section>
            <section className=" w-full max-w-7xl mx-auto px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0 mb-16">
                <div className="w-full max-w-[800px] overflow-x-auto mx-auto">
                    <table className="table-auto border-collapse ">
                        <thead>
                            <tr>
                                <th className="border-b-[1px] border-gray px-8 py-2">
                                    <p className="capitalize font-medium text-base text-green-100 text-left">
                                        photo
                                    </p>
                                </th>
                                <th className="border-b-[1px] border-gray px-4 py-2">
                                    <p className="capitalize font-medium text-base text-green-100 text-left">
                                        name
                                    </p>
                                </th>
                                <th className="border-b-[1px] border-gray px-8 py-2">
                                    <p className="capitalize font-medium text-base text-green-100 text-center">
                                        price
                                    </p>
                                </th>
                                <th className="border-b-[1px] border-gray px-8 py-2">
                                    <p className="capitalize font-medium text-base text-green-100 text-center">
                                        quantity
                                    </p>
                                </th>
                                <th className="border-b-[1px] border-gray px-8 py-2">
                                    <p className="capitalize font-medium text-base text-green-100 text-center">
                                        total
                                    </p>
                                </th>
                                <th className="border-b-[1px] border-gray px-4 py-2">
                                    <p className="capitalize font-medium text-base text-green-100 text-center">
                                        control
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((food) => {
                                const { title, price, photo } = food;
                                return (
                                    <tr>
                                        <td className="border-b-[1px] border-gray px-4 py-2 mx-10">
                                            <img
                                                src={photo}
                                                alt="title"
                                                className="w-16"
                                            />
                                        </td>
                                        <td className="border-b-[1px] border-gray px-4 py-2">
                                            <h4 className="uppercase text-base text-green-400 font-medium">
                                                {title}
                                            </h4>
                                        </td>
                                        <td className="border-b-[1px] border-gray px-8 py-2">
                                            <p className="text-green-400 font-medium text-base">
                                                {price} TK
                                            </p>
                                        </td>
                                        <td className="border-b-[1px] border-gray px-8 py-2">
                                            <div className="flex justify-between items-center">
                                                <AiOutlineMinus className="border-gray border-[1px]  text-white rounded-md  p-[1px] text-2xl cursor-pointer hover:border-green-100 duration-200 font-bold bg-green-100 hover:bg-green-200  " />
                                                <input
                                                    type="text"
                                                    placeholder="0"
                                                    className="w-10 border-gray border-[1px] rounded-md text-center text-sm p-[1px] text-green-300 font-medium outline-none mx-1"
                                                />
                                                <AiOutlinePlus className="border-gray border-[1px]  text-white rounded-md  p-[1px] text-2xl cursor-pointer hover:border-green-100 duration-200 font-bold  bg-green-100 hover:bg-green-200 " />
                                            </div>
                                        </td>
                                        <td className="border-b-[1px] border-gray px-8 py-2">
                                            <p className="">1500 TK</p>
                                        </td>
                                        <td className="border-b-[1px] border-gray px-8 py-2 ">
                                            <RxCross1 className="border-gray border-[1px]  text-green-100 rounded-md  p-[1px] text-2xl cursor-pointer hover:border-green-100 duration-200 font-bold  hover:bg-green-200 hover:text-white" />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4" className="px-8 py-1">
                                    <p className="text-base capitalize text-right font-[500]">
                                        subtotal
                                    </p>
                                </td>

                                <td colSpan="2" className="px-8 py-1">
                                    <p className="">15000 TK</p>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-8 border-b-[1px] border-gray py-1"
                                >
                                    <p className="text-base capitalize text-right font-[500]">
                                        tax
                                    </p>
                                </td>

                                <td
                                    colSpan="2"
                                    className="px-8 border-b-[1px] border-gray py-1"
                                >
                                    <p className="">15 TK</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4" className=" py-1 px-8">
                                    <p className="text-base uppercase text-right font-[500] text-green-100">
                                        order total
                                    </p>
                                </td>

                                <td colSpan="2" className="py-1 px-8">
                                    <p className="">15015 TK</p>
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                    <div className="flex justify-center items-center mt-8 gap-x-4">
                        <Link
                            to="/menu"
                            className="uppercase text-sm tracking-wide font-medium border-[1px] border-green-100 px-8 py-1 bg-green-100 rounded-full text-white transition-all duration-300 hover:text-white hover:bg-green-200"
                        >
                            back to shop
                        </Link>
                        <button className="uppercase text-sm tracking-wide font-medium border-[1px] border-green-100 px-8 py-1 bg-green-100 rounded-full text-white transition-all duration-300 hover:text-white hover:bg-green-200">
                            clear cart
                        </button>
                        <Link
                            to="/checkout"
                            className="uppercase text-sm tracking-wide font-medium border-[1px] border-green-100 px-8 py-1 bg-green-100 rounded-full text-white transition-all duration-300 hover:text-white hover:bg-green-200"
                        >
                            checkout
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderPage;

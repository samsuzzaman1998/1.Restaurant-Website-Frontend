import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { OrderContext } from "../../../Utils/Context/OrderContext";

const SingleFoodRow = ({ food }) => {
    const { cart, updateOrderQuantityHandler } = useContext(OrderContext);
    const { title, price, photo, orderQuantity } = food;

    const increaseBtnHandler = (e) => {
        
    };

    return (
        <tr>
            <td className="border-b-[1px] border-gray px-4 py-2 mx-10">
                <img src={photo} alt="title" className="w-16" />
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
                        defaultValue={orderQuantity}
                    />
                    <AiOutlinePlus
                        className="border-gray border-[1px]  text-white rounded-md  p-[1px] text-2xl cursor-pointer hover:border-green-100 duration-200 font-bold  bg-green-100 hover:bg-green-200 "
                        onClick={increaseBtnHandler}
                    />
                </div>
            </td>
            <td className="border-b-[1px] border-gray px-8 py-2">
                <p className="">1500 TK</p>
            </td>
            <td className="border-b-[1px] border-gray px-8 py-2 ">
                <RxCross1 className="border-gray border-[1px]  text-red rounded-md  p-[1px] text-2xl cursor-pointer hover:border-red duration-200 font-bold  hover:bg-red hover:text-white" />
            </td>
        </tr>
    );
};

export default SingleFoodRow;

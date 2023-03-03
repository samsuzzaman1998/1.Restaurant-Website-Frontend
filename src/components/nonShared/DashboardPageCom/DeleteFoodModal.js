import React from "react";

const DeleteFoodModal = ({ handleDeleteProcess }) => {
    return (
        <div>
            <input
                type="checkbox"
                id="delete_food_modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-full sm:max-w-[400px]">
                    <h3 className="font-semibold text-lg text-center">
                        Food will be Permanently deleted!!!
                    </h3>
                    <div className="modal-action flex justify-center items-center mt-3">
                        <label
                            className="btn btn-xs font-medium text-[13px] tracking-wider bg-green-100 border-green-100 hover:bg-green-200 hover:border-green-200"
                            onClick={() => handleDeleteProcess(true)}
                            htmlFor="delete_food_modal"
                        >
                            Yes
                        </label>
                        <label
                            className="btn btn-xs font-medium text-[13px] tracking-wider bg-red bg-opacity-80 border-red hover:bg-red hover:bg-opacity-100 hover:border-red"
                            onClick={() => handleDeleteProcess(false)}
                            htmlFor="delete_food_modal"
                        >
                            No
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteFoodModal;

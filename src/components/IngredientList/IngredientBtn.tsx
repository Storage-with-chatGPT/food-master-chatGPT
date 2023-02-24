import React, { useState } from "react";
import { useAppDispatch } from "@/store";
import { IngredientType } from "@/types";
import {
  addIngredients,
  deleteIngredientList,
  removeIngredients,
  updateIngredientList,
} from "@/services/ingredientList/slice";
import { BsTrash } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const IngredientBtn = ({ name, state }: IngredientType) => {
  const [btnState, setBtnState] = useState(state);
  const [editModeState, setEditModeState] = useState(true);
  const [editModeInput, setEditModeInput] = useState(name);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    setBtnState(!btnState);
    if (!btnState) {
      dispatch(addIngredients(name));
    } else {
      dispatch(removeIngredients(name));
    }
  };

  const setIconOnClick = () => {
    setEditModeState(!editModeState);
    setEditModeInput(name);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditModeInput(event.currentTarget.value.split(" ").join(""));
  };
  // TODO: window.confirm 으로 확인하기
  const updateIngredient = () => {
    dispatch(updateIngredientList({ name, editModeInput }));
  };

  const deleteIngredient = () => {
    dispatch(deleteIngredientList(name));
  };

  return editModeState ? (
    <div>
      <div className="relative">
        {btnState ? (
          ""
        ) : (
          <CiSettings
            onClick={setIconOnClick}
            className="text-lg absolute top-1.5 right-1 hover:text-blue-200 cursor-pointer"
          />
        )}
      </div>
      <button
        onClick={handleOnClick}
        className={`w-20 h-20 border-2 m-1 ${
          btnState ? "bg-blue-300" : "bg-gray-100"
        } hover:bg-blue-200`}
      >
        {name}
      </button>
    </div>
  ) : (
    <div className="relative">
      <div className="flex flex-row">
        <AiOutlineCheck
          onClick={updateIngredient}
          className="text-base absolute top-2 right-11 hover:text-blue-200 cursor-pointer"
        />
        <BsTrash
          onClick={deleteIngredient}
          className="text-base absolute top-2 right-6 hover:text-blue-200 cursor-pointer"
        />
        <AiOutlineClose
          onClick={setIconOnClick}
          className="text-base absolute top-2 right-1 hover:text-blue-200 cursor-pointer"
        />
      </div>

      <button
        className={`w-20 h-20 border-2 m-1 ${
          btnState ? "bg-blue-300" : "bg-gray-100"
        } `}
      >
        <input
          className="w-14"
          type="text"
          value={editModeInput}
          onChange={handleOnChange}
        />
      </button>
    </div>
  );
};

export default IngredientBtn;

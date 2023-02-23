import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { IngredientType } from "@/types";
import {
  addIngredients,
  removeIngredients,
} from "@/services/ingredientList/slice";

const IngredientBtn = ({ type, name, state }: IngredientType) => {
  const [btnState, setBtnState] = useState(state);
  const dispatch = useAppDispatch();

  // TODO : 이거 써야 됨.
  const IngredientList = useAppSelector((state) => state.ingredientList);

  const handleOnClick = () => {
    setBtnState(!btnState);
    if (!btnState) {
      dispatch(addIngredients({ type, name, state: btnState }));
    } else {
      dispatch(removeIngredients({ type, name, state }));
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className={`w-20 h-20 border-2 m-1 ${
        btnState ? "bg-blue-300" : "bg-gray-100"
      } hover:bg-blue-200`}
    >
      {name}
    </button>
  );
};

export default IngredientBtn;

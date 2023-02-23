import { addIngredients, removeIngredients } from "@/services/ingredient/slice";
import React, { useState } from "react";
import { useAppDispatch } from "@/store";
interface Ingredient {
  IngredientName: string;
}

const IngredientBtn = ({ IngredientName }: Ingredient) => {
  const [btnState, setBtnState] = useState(true);
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    setBtnState(!btnState);
    // 버튼 상태값이 true인 경우
    if (btnState) {
      dispatch(addIngredients(IngredientName));
    } else {
      // 버튼 상태값이 false인 경우
      dispatch(removeIngredients(IngredientName));
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className={`w-20 h-20 border-2 m-1 ${
        btnState ? "bg-gray-100" : "bg-blue-300"
      } hover:bg-blue-200`}
    >
      {IngredientName}
    </button>
  );
};

export default IngredientBtn;

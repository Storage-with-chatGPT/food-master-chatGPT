import React from "react";
import { useAppSelector } from "@/store";
import { FaMinusSquare } from "react-icons/fa";

const SelectItem = () => {
  const Ingredients = useAppSelector(
    (state) => state.ingredientList.SelectIngredients
  );

  return (
    <div className="flex flex-col m-2 bg-slate-400 w-[180px] ml-2 rounded-md">
      <div className="text-center my-3 text-white text-sm">
        <p>선택한 재료 리스트</p>
        <p className="text-[8px] text-right mr-4 hover:text-red-300 cursor-pointer">
          전체 삭제
        </p>
      </div>
      <div className="flex flex-col w-32 text-white text-sm text-left ml-9 h-[190px] overflow-auto scrollbar-hide">
        {Ingredients.map((item, idx) => (
          <div key={idx} className="flex flex-row ">
            <FaMinusSquare className="text-red-300 mt-1 mr-1" />
            <p className="hover:text-red-300 cursor-pointer">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectItem;

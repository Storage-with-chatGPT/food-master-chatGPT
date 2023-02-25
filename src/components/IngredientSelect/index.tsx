import React from "react";
import SelectItem from "./SelectItem";

const IngredientSelect = () => {
  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col w-[500px] border-2 border-green-400">
        <div className="text-center mt-1">마이 냉장고</div>
        <div className="w-[300px] h-[220px] m-2 ml-20 bg-yellow-100">
          이미지
        </div>
        <button className="w-[300px] ml-20 text-center border-2 border-black">
          레시피 찾기
        </button>
      </div>
      <SelectItem />
    </div>
  );
};

export default IngredientSelect;

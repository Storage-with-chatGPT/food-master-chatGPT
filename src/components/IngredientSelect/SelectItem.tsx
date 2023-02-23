import React from "react";
import { useAppSelector } from "@/store";

const SelectItem = () => {
  const Ingredients = useAppSelector((state) => state.ingredient.Ingredients);

  return (
    <div>
      {/* 선택한 재료 */}
      <div className="flex flex-row space-x-1">
        {Ingredients.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default SelectItem;

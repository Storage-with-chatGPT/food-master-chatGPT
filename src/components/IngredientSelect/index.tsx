import { QuetionChat } from "@/apis";
import { DataResponse } from "@/types";
import { AxiosResponse } from "axios";
import React, { useState } from "react";
import SelectItems from "./SelectItems";
import Refrigerator from "../../assets/refrigerator.svg";
import { useAppSelector } from "@/store";

const IngredientSelect = () => {
  const SelectIngredients = useAppSelector(
    (state) => state.ingredientList.SelectIngredients
  )
    .join(" ")
    .trim();

  const [menus, setMenus] = useState<string[]>([]);

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { data }: AxiosResponse<DataResponse> = await QuetionChat(
      SelectIngredients
    );
    const formatString = data.choices[0].text
      .trim()
      .split("\n")
      .map((item) => item.replace(/^\d+\.\s*/, ""));
    setMenus(formatString);
  };

  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col w-[500px] items-center">
        <div className="text-center mt-1">마이 냉장고</div>
        <div className="flex flex-col w-[300px] h-[220px] m-2 ml-15 bg-yellow-50  items-center overflow-auto scrollbar-hide ">
          {menus.length > 0 ? <p>📖 추천 메뉴</p> : <Refrigerator />}
          {menus.map((item, idx) => (
            <button
              key={`menu_${idx}`}
              className="w-34 text-left border-2 border-red-50 m-1 pr-1 hover:text-white hover:bg-blue-200 ease-in duration-150 "
              value={item}
            >
              💡 {item}
            </button>
          ))}
        </div>
        <button
          onClick={handleOnClick}
          className="w-[300px] ml-15 text-center border-2 border-gray-100"
        >
          Chat선생 메뉴 추천 받기
        </button>
      </div>
      <SelectItems />
    </div>
  );
};

export default IngredientSelect;

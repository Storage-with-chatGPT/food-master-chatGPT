import { QuetionChat } from "@/apis";
import { DataResponse } from "@/types";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import SelectItems from "./SelectItems";
import Refrigerator from "../../assets/refrigerator.svg";
import { useAppDispatch, useAppSelector } from "@/store";
import { setRecipe } from "@/services/recipe/slice";
import { useRouter } from "next/router";

const IngredientSelect = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const SelectIngredients = useAppSelector(
    (state) => state.ingredientList.SelectIngredients
  );
  const selectIngredientsString = SelectIngredients.join(", ").trim();

  const [menus, setMenus] = useState<string[]>([]);
  const [btnState, setBtnState] = useState(true);
  const [disabledBtnState, setDisabledBtnState] = useState(false);
  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;
    if (SelectIngredients.length < 1) {
      alert("1개이상의 재료를 선택해주세요.");
      return;
    }

    let quetion = "";
    if (name === "recipe") quetion = value;
    if (name === "menu") quetion = selectIngredientsString;

    //TODO: 로딩 스피너 만들 시 console 대체
    console.log("loading");
    setDisabledBtnState(true);
    const { data }: AxiosResponse<DataResponse> = await QuetionChat(
      quetion,
      name
    );
    setDisabledBtnState(false);
    console.log("loading end");

    setBtnState(false);

    if (name === "menu") {
      const formatMenuString = data.choices[0].text
        .trim()
        .split("\n")
        .map((item) => item.replace(/^\d+\.\s*/, ""))
        .filter((item) => {
          if (item === "" || item === ".") {
            return false;
          }
          return true;
        });
      setMenus(formatMenuString);
    }

    if (name === "recipe") {
      router.push("/recipe");
      const formatRecipeString = data.choices[0].text
        .trim()
        .split("\n")
        .filter((item) => item !== "");
      dispatch(setRecipe(formatRecipeString));
    }
  };

  useEffect(() => {
    setBtnState(true);
  }, [SelectIngredients]);

  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col w-[500px] items-center">
        <div className="text-center mt-1">마이 냉장고</div>
        <div className="flex flex-col w-[300px] h-[220px] m-2 ml-15 bg-yellow-50  items-center overflow-auto scrollbar-hide ">
          {menus.length > 0 ? <p>📖 추천 메뉴</p> : <Refrigerator />}

          {menus.map((item, idx) => (
            <button
              name="recipe"
              key={`recipe_${idx}`}
              className="w-34 text-left border-2 border-red-50 m-1 pr-1 hover:text-white hover:bg-blue-200 ease-in duration-150 "
              value={item}
              onClick={handleOnClick}
            >
              💡 {item}
            </button>
          ))}
        </div>

        <button
          onClick={handleOnClick}
          className={`${
            disabledBtnState
              ? "bg-gray-100 text-gray-200"
              : "bg-white hover:text-white hover:bg-blue-200 text-gray-500"
          } w-[300px] ml-15 text-center border-1 border-gray-100 `}
          name="menu"
          disabled={disabledBtnState}
        >
          {btnState ? "Chat선생 메뉴 추천 받기 " : "추천 메뉴 다시 받기 "}
        </button>
      </div>
      <SelectItems />
    </div>
  );
};

export default IngredientSelect;

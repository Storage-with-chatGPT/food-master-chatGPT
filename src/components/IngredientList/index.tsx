import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import IngredientBtn from "./IngredientBtn";
import SearchInput from "./SearchInput";
import { selectCategory } from "@/services/ingredientList/slice";
import { IngredientType } from "@/types";
import { categoryBtn } from "@/constants";

const IngredientList = () => {
  const dispatch = useAppDispatch();
  const IngredientList = useAppSelector((state) => state.ingredientList);
  const categoryValue = useAppSelector(
    (state) => state.ingredientList.category
  );
  const searchValue = useAppSelector(
    (state) => state.ingredientList.inputValue
  );
  const [list, setList] = useState<IngredientType[]>([]);
  const filterSearchValue = list.filter(
    (item) => item.name.includes(searchValue) === true
  );

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(selectCategory(event.currentTarget.value));
  };

  useEffect(() => {
    switch (categoryValue) {
      case "all":
        setList(IngredientList.ingredientList);
        break;
      case "meat":
        setList(
          IngredientList.ingredientList.filter((value) => value.type === "meat")
        );
        break;
      case "vegetable":
        setList(
          IngredientList.ingredientList.filter(
            (value) => value.type === "vegetable"
          )
        );
        break;
      case "grain":
        setList(
          IngredientList.ingredientList.filter(
            (value) => value.type === "grain"
          )
        );
        break;
      case "acc":
        setList(
          IngredientList.ingredientList.filter((value) => value.type === "acc")
        );
        break;
    }
  }, [categoryValue]);

  return (
    <div className="my-7">
      {/* //TODO : 상수 값으로 반복문 돌려서 관리 */}
      <div className="flex flex-row justify-center space-x-10">
        {categoryBtn.map((item, idx) => (
          <button
            key={`category_btn_${idx}`}
            onClick={handleOnClick}
            value={Object.values(item)}
          >
            {Object.keys(item)}
          </button>
        ))}
      </div>
      <div>
        <SearchInput />
      </div>
      <div className=" h-[300px] flex flex-raw flex-wrap justify-center  overflow-auto scrollbar-hide ">
        {searchValue === ""
          ? list.map((item) => (
              <IngredientBtn
                key={item.name}
                type={item.type}
                name={item.name}
                state={item.state}
              />
            ))
          : filterSearchValue.map((item) => (
              <IngredientBtn
                key={item.name}
                type={item.type}
                name={item.name}
                state={item.state}
              />
            ))}
      </div>
    </div>
  );
};

export default IngredientList;

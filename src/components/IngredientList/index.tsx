import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import IngredientBtn from "./IngredientBtn";
import SearchInput from "./SearchInput";
import {
  selectCategory,
  setIngredientViewList,
} from "@/services/ingredientList/slice";
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

  const list = useAppSelector(
    (state) => state.ingredientList.ingredientViewList
  );

  const filterSearchValue = list.filter(
    (item) => item.name.includes(searchValue) === true
  );

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(selectCategory(event.currentTarget.value));
  };

  useEffect(() => {
    switch (categoryValue) {
      case "all":
        dispatch(setIngredientViewList(IngredientList.ingredientList));
        break;
      case "meat":
        dispatch(
          setIngredientViewList(
            IngredientList.ingredientList.filter(
              (value) => value.type === "meat"
            )
          )
        );
        break;
      case "vegetable":
        dispatch(
          setIngredientViewList(
            IngredientList.ingredientList.filter(
              (value) => value.type === "vegetable"
            )
          )
        );
        break;
      case "grain":
        dispatch(
          setIngredientViewList(
            IngredientList.ingredientList.filter(
              (value) => value.type === "grain"
            )
          )
        );
        break;
      case "acc":
        dispatch(
          setIngredientViewList(
            IngredientList.ingredientList.filter(
              (value) => value.type === "acc"
            )
          )
        );
        break;
    }
  }, [categoryValue]);

  return (
    <div className="my-7">
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
                name={item.name}
                state={item.state}
              />
            ))
          : list
              .filter((item) => item.name.includes(searchValue) === true)
              .map((item) => (
                <IngredientBtn
                  key={item.name}
                  name={item.name}
                  state={item.state}
                />
              ))}
      </div>
    </div>
  );
};

export default IngredientList;

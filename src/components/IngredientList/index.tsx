import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import IngredientBtn from "./IngredientBtn";
import SearchInput from "./SearchInput";
import { selectCategory } from "@/services/ingredientList/slice";

const IngredientList = () => {
  const dispatch = useAppDispatch();
  const IngredientList = useAppSelector((state) => state.ingredientList);
  const categoryValue = useAppSelector(
    (state) => state.ingredientList.category
  );
  const searchValue = useAppSelector(
    (state) => state.ingredientList.inputValue
  );
  const [list, setList] = useState<string[]>([]);

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(selectCategory(event.currentTarget.value));
  };

  const filterSearchValue = list.filter(
    (item) => item.includes(searchValue) === true
  );

  useEffect(() => {
    switch (categoryValue) {
      case "all":
        setList(IngredientList.all);
        break;
      case "meat":
        setList(IngredientList.meat);
        break;
      case "vegetable":
        setList(IngredientList.vegetable);
        break;
      case "grain":
        setList(IngredientList.grain);
        break;
      case "acc":
        setList(IngredientList.acc);
        break;
    }
  }, [categoryValue]);

  return (
    <div className="my-7">
      <div className="flex flex-row justify-center space-x-10">
        <button onClick={handleOnClick} value="all">
          전체
        </button>
        <button onClick={handleOnClick} value="meat">
          고기
        </button>
        <button onClick={handleOnClick} value="vegetable">
          채소
        </button>
        <button onClick={handleOnClick} value="grain">
          곡물
        </button>
        <button onClick={handleOnClick} value="acc">
          기타
        </button>
      </div>
      <div>
        <SearchInput />
      </div>
      <div className=" h-[300px] flex flex-raw flex-wrap justify-center  overflow-auto scrollbar-hide ">
        {searchValue === ""
          ? list.map((item) => (
              <IngredientBtn key={item} IngredientName={item} />
            ))
          : filterSearchValue.length === 0
          ? "찾으시는 재료가 없습니다."
          : filterSearchValue.map((item) => (
              <IngredientBtn key={item} IngredientName={item} />
            ))}
      </div>
    </div>
  );
};

export default IngredientList;

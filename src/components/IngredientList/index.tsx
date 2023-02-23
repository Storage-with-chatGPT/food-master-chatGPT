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

  const [list, setList] = useState<string[]>([]);

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(selectCategory(event.currentTarget.value));
  };

  useEffect(() => {
    switch (categoryValue) {
      case "meat":
        setList(IngredientList.meat);
        break;
      case "vegetable":
        setList(IngredientList.vegetable);
        break;
      case "grain":
        setList(IngredientList.grain);
        break;
    }
  }, [categoryValue]);

  return (
    <div className="my-7">
      <div>
        <SearchInput />
      </div>
      <div className="flex flex-row justify-center space-x-52">
        <button onClick={handleOnClick} value="meat">
          고기
        </button>
        <button onClick={handleOnClick} value="vegetable">
          채소
        </button>
        <button onClick={handleOnClick} value="grain">
          곡물
        </button>
      </div>
      <div className=" h-[300px] flex flex-raw flex-wrap justify-center  overflow-auto scrollbar-hide ">
        {list.map((item, idx) => (
          <IngredientBtn key={idx} IngredientName={item} />
        ))}
      </div>
    </div>
  );
};

export default IngredientList;

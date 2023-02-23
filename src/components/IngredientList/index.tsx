import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import IngredientBtn from "./IngredientBtn";
import SearchInput from "./SearchInput";
import { selectCategory } from "@/services/ingredientList/slice";
import { IngredientType } from "@/types";

const IngredientList = () => {
  const dispatch = useAppDispatch();

  const IngredientList = useAppSelector((state) => state.ingredientList);

  const categoryValue = useAppSelector(
    (state) => state.ingredientList.category
  );

  const searchValue = useAppSelector(
    (state) => state.ingredientList.inputValue
  );

  // TODO : 이 list를 상수로 해서 관리하자
  const [list, setList] = useState<IngredientType[]>([]);

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
        {list.map((item) => (
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

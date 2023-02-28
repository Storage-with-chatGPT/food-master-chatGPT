import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import IngredientBtn from "./IngredientBtn";
import SearchInput from "./SearchInput";
import {
  addIngredientList,
  selectCategory,
  setIngredientViewList,
} from "@/services/ingredientList/slice";
import { categoryBtn } from "@/constants";
import { RxPlusCircled } from "react-icons/rx";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { validateInput } from "@/utils/validation";

const IngredientList = () => {
  const [addBtnState, setAddBtnState] = useState(false);
  const [addIngredientInput, setAddIngredientInput] = useState("");

  const dispatch = useAppDispatch();
  const ingredientList = useAppSelector((state) => state.ingredientList);
  const categoryValue = useAppSelector(
    (state) => state.ingredientList.category
  );
  const searchValue = useAppSelector(
    (state) => state.ingredientList.inputValue
  );
  const list = useAppSelector(
    (state) => state.ingredientList.ingredientViewList
  );
  const category = useAppSelector((state) => state.ingredientList.category);

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(selectCategory(event.currentTarget.value));
  };

  const addOnClick = () => {
    const duplicationCheck = ingredientList.ingredientList.filter(
      (item) => item.name === addIngredientInput
    );

    if (addIngredientInput.length === 0) {
      alert("빈값은 재료로 등록할 수 없습니다.");
      return;
    }

    if (!validateInput(addIngredientInput)) {
      alert("다시한번 확인해주세요.(특수문자/자음/모음/숫자 금지)");
      setAddIngredientInput("");
      return;
    }

    if (duplicationCheck.length > 0) {
      alert("이미 등록되어 있는 재료 입니다.");
      setAddIngredientInput("");
      return;
    }

    dispatch(
      addIngredientList({
        type: category,
        name: addIngredientInput,
        state: false,
      })
    );
    setAddIngredientInput("");
    setAddBtnState(!addBtnState);
  };

  const addOnCloseClick = () => {
    setAddBtnState(!addBtnState);
    setAddIngredientInput("");
  };

  useEffect(() => {
    switch (categoryValue) {
      case "all":
        dispatch(setIngredientViewList(ingredientList.ingredientList));
        break;
      case "meat":
        dispatch(
          setIngredientViewList(
            ingredientList.ingredientList.filter(
              (value) => value.type === "meat"
            )
          )
        );
        break;
      case "vegetable":
        dispatch(
          setIngredientViewList(
            ingredientList.ingredientList.filter(
              (value) => value.type === "vegetable"
            )
          )
        );
        break;
      case "grain":
        dispatch(
          setIngredientViewList(
            ingredientList.ingredientList.filter(
              (value) => value.type === "grain"
            )
          )
        );
        break;
      case "acc":
        dispatch(
          setIngredientViewList(
            ingredientList.ingredientList.filter(
              (value) => value.type === "acc"
            )
          )
        );
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="w-auto my-1 flex flex-raw justify-center">
        <SearchInput />
      </div>
      <div className=" h-[300px] flex flex-raw flex-wrap justify-center  overflow-auto scrollbar-hide ">
        {category === "all" || searchValue !== "" ? (
          ""
        ) : (
          <button className={`w-20 h-20 border-2 m-1 bg-gray-100 `}>
            {addBtnState ? (
              <>
                <input
                  className="w-14 pl-2"
                  type="text"
                  value={addIngredientInput}
                  onChange={(event) =>
                    setAddIngredientInput(event.currentTarget.value)
                  }
                />
                <div className="flex flex-row justify-center mt-3">
                  <AiOutlineCheck
                    onClick={addOnClick}
                    className="border border-gray-200 w-7 mr-0.5 hover:bg-green-300 hover:text-white"
                  />
                  <AiOutlineClose
                    onClick={addOnCloseClick}
                    className="text-base border border-gray-200 w-7 ml-0.5 hover:bg-red-300 hover:text-white"
                  />
                </div>
              </>
            ) : (
              <>
                <p>재료 추가</p>
                <RxPlusCircled
                  onClick={() => setAddBtnState(!addBtnState)}
                  className="w-full text-2xl text-center text-gray-500 hover:text-blue-300 ease-in duration-150"
                />
              </>
            )}
          </button>
        )}

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

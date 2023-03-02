import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addIngredientList,
  setIngredientViewList,
} from "@/services/ingredientList/slice";
import { categoryBtn } from "@/constants";
import { RxPlusCircled } from "react-icons/rx";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { validateInput } from "@/utils/validation";
import { selectCategory } from "@/services/common/slice";
import SearchInput from "./SearchInput";
import IngredientBtn from "./IngredientBtn";
import { showToastMessage } from "@/utils/toastMsg";
import { BiDownArrowCircle } from "react-icons/bi";

const IngredientList = () => {
  const [addBtnState, setAddBtnState] = useState(false);
  const [addIngredientInput, setAddIngredientInput] = useState("");
  const [bgColor, setBgColor] = useState("my-red");

  const scrollRef = useRef<HTMLDivElement>(null);
  const [istBtnVisible, setIsBtnVisible] = useState(true);

  const dispatch = useAppDispatch();
  const ingredientList = useAppSelector((state) => state.ingredientList);
  const categoryValue = useAppSelector((state) => state.common.category);
  const searchValue = useAppSelector((state) => state.common.inputValue);
  const list = useAppSelector(
    (state) => state.ingredientList.ingredientViewList
  );
  const category = useAppSelector((state) => state.common.category);

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(selectCategory(event.currentTarget.value));
  };

  const addOnClick = () => {
    const duplicationCheck = ingredientList.ingredientList.filter(
      (item) => item.name === addIngredientInput
    );

    if (addIngredientInput.length === 0) {
      showToastMessage({
        message: "빈값은 재료로 등록할 수 없습니다.",
        type: "warn",
      });
      return;
    }

    if (!validateInput(addIngredientInput)) {
      showToastMessage({
        message: "다시한번 확인해주세요. (특수문자/자음/모음/숫자 금지)",
        type: "warn",
      });
      setAddIngredientInput("");
      return;
    }

    if (duplicationCheck.length > 0) {
      showToastMessage({
        message: "이미 등록되어 있는 재료 입니다.",
        type: "warn",
      });
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
    showToastMessage({
      message: `[${addIngredientInput}] 재료가 정상적으로 등록되었습니다`,
      type: "success",
    });
  };

  const addOnCloseClick = () => {
    setAddBtnState(!addBtnState);
    setAddIngredientInput("");
  };

  useEffect(() => {
    switch (categoryValue) {
      case "all":
        dispatch(setIngredientViewList(ingredientList.ingredientList));
        setBgColor("bg-my-red");
        break;
      case "meat":
        dispatch(
          setIngredientViewList(
            ingredientList.ingredientList.filter(
              (value) => value.type === "meat"
            )
          )
        );
        setBgColor("bg-my-orange");
        break;
      case "vegetable":
        dispatch(
          setIngredientViewList(
            ingredientList.ingredientList.filter(
              (value) => value.type === "vegetable"
            )
          )
        );
        setBgColor("bg-my-green");
        break;
      case "grain":
        dispatch(
          setIngredientViewList(
            ingredientList.ingredientList.filter(
              (value) => value.type === "grain"
            )
          )
        );
        setBgColor("bg-my-yellow");
        break;
      case "acc":
        dispatch(
          setIngredientViewList(
            ingredientList.ingredientList.filter(
              (value) => value.type === "acc"
            )
          )
        );
        setBgColor("bg-my-gray");
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryValue]);

  const moveBottomEnd = () => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
    const elementTop = scrollRef.current?.getBoundingClientRect().top;
    const DownBtn = document.getElementById("DownBtn");
    if (DownBtn) {
      DownBtn.style.display = "none";
    }
  };

  useEffect(() => {
    const ingredients = document.getElementById("scrollDiv");
    const handleScroll = () => {
      if (ingredients) {
        const scrollHeight = ingredients.scrollHeight;
        const scrollTop = ingredients.scrollTop;
        const clientHeight = ingredients.clientHeight;
        const condition = scrollHeight !== scrollTop + clientHeight;
        setIsBtnVisible(condition);
      }
    };
    ingredients?.addEventListener("scroll", handleScroll);
    return () => {
      ingredients?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="my-7 w-[550px]">
      <div className="flex flex-row justify-left">
        {categoryBtn.map((item, idx) => (
          <button
            key={`category_btn_${idx}`}
            onClick={handleOnClick}
            value={item.type}
            className={`text-gray-100 h-8 w-24 bg-${item.color} opacity-90 rounded-t-xl `}
          >
            <p className="font-bold drop-shadow-lg">
              {Object.values(item.name)}
            </p>
          </button>
        ))}
      </div>
      <div
        className={`${bgColor} h-[345px] py-3 opacity-90 rounded-b-lg rounded-tr-lg drop-shadow-lg`}
      >
        <div className="w-auto my-2.5 flex flex-raw justify-center ">
          <SearchInput />
        </div>

        <div
          id="scrollDiv"
          className=" h-[250px] flex flex-raw flex-wrap justify-center  overflow-auto scrollbar-hide drop-shadow-lg "
        >
          {category === "all" || searchValue !== "" ? (
            ""
          ) : (
            <button
              className={`w-20 h-20 border-2 m-1 bg-gray-100 rounded-md `}
            >
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
          <div ref={scrollRef}></div>
        </div>
      </div>
      <div className="flex justify-center">
        {list.length > 16 && istBtnVisible ? (
          <BiDownArrowCircle
            id="DownBtn"
            onClick={moveBottomEnd}
            className="text-white text-[30px] -mt-8 animate-bounce cursor-pointer"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default IngredientList;

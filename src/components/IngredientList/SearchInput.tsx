import { searchInputValue } from "@/services/ingredientList/slice";
import { useAppDispatch, useAppSelector } from "@/store";
import React from "react";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(
    (state) => state.ingredientList.inputValue
  );

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchInputValue(event.currentTarget.value.split(" ").join("")));
  };

  return (
    <div className="border-2 border-red-200 flex flex-row justify-center">
      <input
        type="text"
        value={searchValue}
        placeholder="검색 입력"
        onChange={handleOnChange}
        className="pl-2"
      />
      {searchValue.length > 1 ? (
        <div
          className="absolute  cursor-pointer  hover:text-blue-300 ml-[160px]  text-right"
          onClick={() => dispatch(searchInputValue(""))}
        >
          X
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchInput;

import { searchInputValue } from "@/services/ingredientList/slice";
import { useAppDispatch, useAppSelector } from "@/store";
import React, { useState } from "react";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(
    (state) => state.ingredientList.inputValue
  );
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchInputValue(event.currentTarget.value.split(" ").join("")));
  };

  return (
    <div className="my-1">
      <input
        type="text"
        value={searchValue}
        placeholder="검색 입력"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchInput;

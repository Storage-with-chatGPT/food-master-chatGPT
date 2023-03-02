import { searchInputValue } from "@/services/common/slice";
import { useAppDispatch, useAppSelector } from "@/store";
import React from "react";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.common.inputValue);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchInputValue(event.currentTarget.value.split(" ").join("")));
  };

  return (
    <div className="border-1 border-white flex flex-row justify-center ">
      <input
        type="text"
        value={searchValue}
        placeholder="검색 입력"
        onChange={handleOnChange}
        className="pl-2 h-6 text-[15px] rounded-md"
      />
      {searchValue.length > 1 ? (
        <div
          className="absolute  cursor-pointer  hover:text-blue-300 ml-[155px] "
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

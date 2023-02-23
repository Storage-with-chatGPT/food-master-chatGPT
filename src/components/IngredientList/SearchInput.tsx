import axios from "axios";
import React, { useState } from "react";

const SearchInput = () => {
  const [searchInput, setSearhInput] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearhInput(event.currentTarget.value);
  };

  return (
    <div className="my-1">
      <input
        type="text"
        value={searchInput}
        placeholder="검색할 내용을 입력해주세요."
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchInput;

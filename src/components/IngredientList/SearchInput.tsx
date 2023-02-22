import axios from "axios";
import React, { useState } from "react";

const SearchInput = () => {
  const [searchInput, setSearhInput] = useState("");
  const [result, setResult] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearhInput(event.currentTarget.value);
  };

  const handleOnClick = async () => {
    try {
      const res = await axios.post(
        String(process.env.NEXT_PUBLIC_API_URL),
        {
          model: "text-davinci-003",
          prompt: searchInput,
          temperature: 0.5,
          max_tokens: 1024,
          top_p: 0.5,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${String(process.env.NEXT_PUBLIC_API_KEY)}`,
          },
        }
      );
      console.log(res.data.choices[0].text);
      setSearhInput("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="my-1">
      <input
        type="text"
        value={searchInput}
        placeholder="검색할 내용을 입력해주세요."
        onChange={handleOnChange}
      />
      <button onClick={handleOnClick}>답변받기</button>
      <div>{result}</div>
    </div>
  );
};

export default SearchInput;

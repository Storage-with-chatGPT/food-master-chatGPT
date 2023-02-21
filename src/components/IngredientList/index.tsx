import { IngredientItems } from "@/constants";
import React from "react";
import IngredientBtn from "./IngredientBtn";
import SearchInput from "./SearchInput";

const IngredientList = () => {
  return (
    <div className="my-7">
      <div>
        <SearchInput />
      </div>
      <div className=" h-[300px] flex flex-raw flex-wrap justify-center  overflow-auto scrollbar-hide ">
        {IngredientItems.map((item, idx) => (
          <IngredientBtn key={idx} IngredientName={item} />
        ))}
      </div>
    </div>
  );
};

export default IngredientList;

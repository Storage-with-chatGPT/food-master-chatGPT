import React from "react";
import IngredientBtn from "./IngredientBtn";
import SearchInput from "./SearchInput";

const IngredientList = () => {
  return (
    <div>
      <div>
        <SearchInput />
      </div>
      <div>
        <IngredientBtn />
      </div>
    </div>
  );
};

export default IngredientList;

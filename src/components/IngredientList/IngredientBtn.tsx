import React from "react";
interface Ingredient {
  IngredientName: string;
}

const IngredientBtn = ({ IngredientName }: Ingredient) => {
  return <button className="w-20 h-20 border-2 m-1 ">{IngredientName}</button>;
};

export default IngredientBtn;

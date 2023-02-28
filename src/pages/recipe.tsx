import { useAppSelector } from "@/store";
import React from "react";
import Barcode from "../assets/barcode.svg";

const Recipe = () => {
  const recipe = useAppSelector((state) => state.recipe);
  console.log(recipe);
  return (
    <div className="w-full h-full flex justify-center mt-20 ">
      <div className="flex flex-col  w-[300px] h-[500px] border-2 border-black">
        <header className="text-2xl text-center border-b-2 border-dotted border-gray-500 py-5">
          Recipe
        </header>
        <div className="h-[300px] text-sm  mx-5 py-1 space-y-2 overflow-auto scrollbar-hide ">
          {recipe.recipe.map((item, idx) => (
            <div key={`recipe_${idx}`}>{item}</div>
          ))}
        </div>
        <div className="w-[300px] flex flex-col justify-center text-center border-t-2 border-dotted border-gray-500">
          <Barcode className="h-[80px] mt-2 " />
          <p className="text-sm mb-2 py-5">THANK YOU ! 🙈</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

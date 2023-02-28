import { useAppSelector } from "@/store";
import React, { useEffect } from "react";
import Barcode from "../assets/barcode.svg";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import PrivateRoute from "@/components/hoc/PrivateRoute";

const Recipe = () => {
  const router = useRouter();
  const recipe = useAppSelector((state) => state.recipe.recipe);

  if (recipe.length < 1) return <PrivateRoute />;

  return (
    <div className="w-full h-full flex justify-center mt-20">
      <div className="flex flex-col  w-[300px] h-[500px] zigzag ">
        <div
          onClick={() => router.push("/")}
          className="flex flex-row ml-1 justify-left cursor-pointer hover:text-blue-300"
        >
          <BiArrowBack className="text-[13px] mt-[3px]" />
          <p className="text-[12px] ml-0.5 mt-[1px]">BACK</p>
        </div>
        <header className="text-2xl text-center border-b-2 border-dotted border-gray-300 py-5">
          Recipe
        </header>
        <div className="h-[290px] text-[10px]  mx-5 py-1 pt-4 space-y-2 overflow-auto scrollbar-hide ">
          {recipe.map((item, idx) => (
            <div key={`recipe_${idx}`}>{item}</div>
          ))}
        </div>
        <div className="w-full flex flex-col justify-center text-center border-t-2 border-dotted border-gray-300 ">
          <p className="text-sm mt-2  pb-2 border-b-2 border-dotted border-gray-300">
            THANK YOU ! WATCH MY RECIPE 👨🏻‍🍳
          </p>
          <Barcode className="h-[55px] w-[300px] my-2  " />
        </div>
      </div>
    </div>
  );
};

export default Recipe;

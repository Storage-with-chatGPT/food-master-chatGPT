import { allIngredientListItems, ingredientListItems } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  all: allIngredientListItems,
  meat: ingredientListItems.meat,
  vegetable: ingredientListItems.vegetable,
  grain: ingredientListItems.grain,
  acc: [],
  category: "meat",
};

export const ingredientListSlice = createSlice({
  name: "ingredientList",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { selectCategory } = ingredientListSlice.actions;
export default ingredientListSlice.reducer;

import { IngredientListItems } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  meat: IngredientListItems.meat,
  vegetable: IngredientListItems.vegetable,
  grain: IngredientListItems.grain,
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

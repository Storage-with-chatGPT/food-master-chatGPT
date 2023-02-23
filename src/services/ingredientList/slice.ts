import { ingredientListItems } from "@/constants";
import { IngredientType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  category: "meat",
  inputValue: "",
  ingredientList: ingredientListItems,
  SelectIngredients: [] as IngredientType[],
};

export const ingredientListSlice = createSlice({
  name: "ingredientList",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    searchInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    addIngredients: (state, action: PayloadAction<IngredientType>) => {
      state.SelectIngredients.push(action.payload);
      state.ingredientList[
        state.ingredientList.findIndex(
          (value) => value.name === action.payload.name
        )
      ].state = true;
    },
    removeIngredients: (state, action: PayloadAction<IngredientType>) => {
      state.SelectIngredients = state.SelectIngredients.filter(
        (value) => value.name !== action.payload.name
      );
      state.ingredientList[
        state.ingredientList.findIndex(
          (value) => value.name === action.payload.name
        )
      ].state = false;
    },
  },
});

export const {
  selectCategory,
  searchInputValue,
  addIngredients,
  removeIngredients,
} = ingredientListSlice.actions;
export default ingredientListSlice.reducer;

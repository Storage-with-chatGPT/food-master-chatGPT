import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  Ingredients: [] as string[],
  searchValue: "",
};

export const ingredientSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    addIngredients: (state, action: PayloadAction<string>) => {
      state.Ingredients.push(action.payload);
    },
    removeIngredients: (state, action: PayloadAction<string>) => {
      state.Ingredients = state.Ingredients.filter(
        (value) => value !== action.payload
      );
    },
  },
});

export const { addIngredients, removeIngredients } = ingredientSlice.actions;
export default ingredientSlice.reducer;

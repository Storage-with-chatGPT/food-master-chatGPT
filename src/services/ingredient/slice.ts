import { createSlice } from "@reduxjs/toolkit";

interface PayloadType {
  payload: string;
  type: string;
}

const initialState = {
  Ingredients: [] as string[],
};

export const ingredientSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    addIngredients: (state, action: PayloadType) => {
      state.Ingredients.push(action.payload);
    },
    removeIngredients: (state, action: PayloadType) => {
      state.Ingredients = state.Ingredients.filter(
        (value) => value !== action.payload
      );
    },
  },
});

export const { addIngredients, removeIngredients } = ingredientSlice.actions;
export default ingredientSlice.reducer;

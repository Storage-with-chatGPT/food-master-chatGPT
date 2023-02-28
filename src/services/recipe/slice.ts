import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  recipe: [] as string[],
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipe: (state, action: PayloadAction<string[]>) => {
      state.recipe = state.recipe.filter((item) => item === "");
      action.payload.map((item) => state.recipe.push(item));
    },
  },
});

export const { setRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;

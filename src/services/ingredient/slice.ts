import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Ingredients: [] as string[],
};

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {},
});

export default ingredientSlice.reducer;

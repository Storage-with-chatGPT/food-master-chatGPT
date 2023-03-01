import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  inputValue: "",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    // 카테고리 선택
    selectCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    // 검색 값
    searchInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { selectCategory, searchInputValue } = commonSlice.actions;

export default commonSlice.reducer;

import { ingredientListItems } from "@/constants";
import { IngredientType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  category: "meat",
  inputValue: "",
  ingredientList: ingredientListItems,
  SelectIngredients: [] as string[],
};

export const ingredientListSlice = createSlice({
  name: "ingredientList",
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
    // 재료 선택 리스트에 추가
    addIngredients: (state, action: PayloadAction<string>) => {
      state.SelectIngredients.push(action.payload);
      state.ingredientList[
        state.ingredientList.findIndex((value) => value.name === action.payload)
      ].state = true;
    },
    // 재료 선택 리스트에서 제거
    removeIngredients: (state, action: PayloadAction<string>) => {
      state.SelectIngredients = state.SelectIngredients.filter(
        (value) => value !== action.payload
      );
      state.ingredientList[
        state.ingredientList.findIndex((value) => value.name === action.payload)
      ].state = false;
    },
    // 재료 리스트 이름 변경
    updateIngredientList: (state, action) => {
      state.ingredientList[
        state.ingredientList.findIndex(
          (value) => value.name === action.payload.name
        )
      ].name = action.payload.editModeInput;
    },
    // 재료 리스트삭제
    deleteIngredientList: (state, action: PayloadAction<string>) => {
      state.ingredientList = state.ingredientList.filter(
        (value) => value.name !== action.payload
      );
    },
  },
});

export const {
  selectCategory,
  searchInputValue,
  addIngredients,
  removeIngredients,
  updateIngredientList,
  deleteIngredientList,
} = ingredientListSlice.actions;
export default ingredientListSlice.reducer;

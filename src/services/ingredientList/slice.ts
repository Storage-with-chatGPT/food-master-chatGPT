import { ingredientListItems } from "@/constants";
import { IngredientType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  inputValue: "",
  SelectIngredients: [] as string[],
  ingredientList: ingredientListItems,
  ingredientViewList: [] as IngredientType[],
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

      state.ingredientViewList[
        state.ingredientViewList.findIndex(
          (value) => value.name === action.payload
        )
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

      state.ingredientViewList[
        state.ingredientViewList.findIndex(
          (value) => value.name === action.payload
        )
      ].state = false;
    },
    // 카테고리 선택 시 ViewList 해당 데이터로 변경
    setIngredientViewList: (state, action) => {
      state.ingredientViewList = action.payload;
    },

    // 재료 리스트 재료 추가
    addIngredientList: (state, action) => {
      state.ingredientList.unshift(action.payload);
      state.ingredientViewList.unshift(action.payload);
    },

    // 재료 리스트 이름 변경
    updateIngredientList: (state, action) => {
      state.ingredientList[
        state.ingredientList.findIndex(
          (value) => value.name === action.payload.name
        )
      ].name = action.payload.editModeInput;

      state.ingredientViewList[
        state.ingredientViewList.findIndex(
          (value) => value.name === action.payload.name
        )
      ].name = action.payload.editModeInput;
    },

    // 재료 리스트삭제
    deleteIngredientList: (state, action: PayloadAction<string>) => {
      state.ingredientList = state.ingredientList.filter(
        (value) => value.name !== action.payload
      );

      state.ingredientViewList = state.ingredientViewList.filter(
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
  setIngredientViewList,
  addIngredientList,
  updateIngredientList,
  deleteIngredientList,
} = ingredientListSlice.actions;
export default ingredientListSlice.reducer;

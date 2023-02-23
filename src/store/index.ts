import { configureStore } from "@reduxjs/toolkit";
import ingredientReducer from "@/services/ingredient/slice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ingredientListReducer from "@/services/ingredientList/slice";

export const store = configureStore({
  reducer: {
    ingredient: ingredientReducer,
    ingredientList: ingredientListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// redux hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import commonReducer from '@/services/common/slice';
import ingredientListReducer from '@/services/ingredientList/slice';
import recipeReducer from '@/services/recipe/slice';

export const store = configureStore({
  reducer: {
    ingredientList: ingredientListReducer,
    recipe: recipeReducer,
    common: commonReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// redux hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

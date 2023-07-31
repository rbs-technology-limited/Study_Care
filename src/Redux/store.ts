import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice from "./features/Auth/auth-slice";
import { apiSlice } from "./features/api/apiSlice";
import categoryReducer from "./features/category/categorySlice";
import courseAccessReducer from "./features/courseAccess/courseAccessSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    courseAccess: courseAccessReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    authSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

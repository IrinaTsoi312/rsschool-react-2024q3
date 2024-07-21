import { configureStore } from "@reduxjs/toolkit";
import selectedCardsSliceReducer from "../features/redux/SelectedSlice";
import { SelectedData } from "../features/redux/redux.types";

export const store = configureStore({
  reducer: { selectedCardsSliceReducer },
});

export type RootState = {
  selectedCardsSlice: SelectedData;
};
import { configureStore } from "@reduxjs/toolkit";
import selectedCardsSliceReducer from "../features/redux/SelectedSlice";

export const store = configureStore({
  reducer: { selectedCardsSliceReducer },
});

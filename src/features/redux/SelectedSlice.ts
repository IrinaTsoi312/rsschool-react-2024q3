import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "./redux.types";

const initialState: RootStateType["selectedCardsSliceReducer"] = {
  selectedCardsData: [],
};

export const selectedCardsSlice = createSlice({
  name: "selectedCards",
  initialState,
  reducers: {
    selectCard: (state, action) => {
      state.selectedCardsData.push(action.payload);
    },
    unSelectCard: (state, action) => {
      state.selectedCardsData = state.selectedCardsData.filter((cardId: string) => {
        return cardId !== action.payload;
      });
    },
  }
});

export const {selectCard , unSelectCard} = selectedCardsSlice.actions;

export default selectedCardsSlice.reducer;
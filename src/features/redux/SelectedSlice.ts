import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "./redux.types";

const initialState: RootStateType["selectedCardsSliceReducer"] = {
  selectedCardsData: [],
  currentCard: "1"
};

export const selectedCardsSlice = createSlice({
  name: "selectedCards",
  initialState,
  reducers: {
    setCurrentCard: (state, action) => {
      state.currentCard = action.payload;
    },
    selectCard: (state, action) => {
      state.selectedCardsData.push(action.payload);
    },
    unSelectCard: (state, action) => {
      state.selectedCardsData = state.selectedCardsData.filter((cardId: string) => {
        return cardId !== action.payload;
      });
    },
    unselectAll: (state) => {
      state.selectedCardsData = [];
    },
  }
});

export const {selectCard , unSelectCard, unselectAll} = selectedCardsSlice.actions;

export default selectedCardsSlice.reducer;
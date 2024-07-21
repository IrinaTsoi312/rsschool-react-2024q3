import { createSlice } from "@reduxjs/toolkit";
import { SelectedData } from "./redux.types";

const initialState: SelectedData = {
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
      console.log(state.selectedCardsData)
      state.selectedCardsData.filter((card) => {
        card !== action.payload;
      });
    },
  }
});

export const {selectCard , unSelectCard} = selectedCardsSlice.actions;

export default selectedCardsSlice.reducer;
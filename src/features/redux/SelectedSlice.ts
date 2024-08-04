"use client";

import { createSlice } from "@reduxjs/toolkit";
import { RootStateType, SelectedCardData } from "./redux.types";

const initialState: RootStateType["selectedCardsSliceReducer"] = {
  selectedCardsData: [],
  currentCard: {
    id: "", name: "", species: ""
  }
};

export const selectedCardsSlice = createSlice({
  name: "selectedCards",
  initialState,
  reducers: {
    setCurrentCard: (state, action) => {
      state.currentCard = action.payload;
    },
    selectCard: (state, action) => {
      state.selectedCardsData = Array.from(new Set([...state.selectedCardsData, action.payload]));
    },
    unSelectCard: (state, action) => {
      state.selectedCardsData = state.selectedCardsData.filter((card: SelectedCardData) => {
        return card.id !== action.payload;
      });
    },
    unselectAll: (state) => {
      state.selectedCardsData = [];
    },
  }
});

export const {selectCard , unSelectCard, unselectAll} = selectedCardsSlice.actions;

export default selectedCardsSlice.reducer;
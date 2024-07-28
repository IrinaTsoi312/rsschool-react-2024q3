import { combineReducers } from "@reduxjs/toolkit";
import selectedCardsSliceReducer from "./SelectedSlice";
import { characterAPI } from "./api/ApiSlice";

export interface SelectedCardsState {
  selectedCardsData: string[];
  currentCard: string;
}

export interface RootState {
  selectedCardsSliceReducer: SelectedCardsState;
  [characterAPI.reducerPath]: ReturnType<typeof characterAPI.reducer>;
}

export const rootReducer = combineReducers({
  selectedCardsSliceReducer,
  [characterAPI.reducerPath]: characterAPI.reducer,
});

export type SelectedCardData = {
  id: string, name: string, species: string
};

export type RootStateType = {
  selectedCardsSliceReducer: {
      selectedCardsData: SelectedCardData[],
      currentCard: {
        id: string, name: string, species: string
      }
  };
};

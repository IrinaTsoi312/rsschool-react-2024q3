import { configureStore } from "@reduxjs/toolkit";
import { characterAPI } from "../features/redux/api/ApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rootReducer } from "../features/redux/redux.types";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
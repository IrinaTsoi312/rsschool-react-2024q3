import { createContext, useContext } from "react";
import { DataContextInitialValue } from "../../../assets/types";

const InitialValue = {
  data: {
    info: {
      count: 0,
      pages: 0,
      next: "",
      prev: null,
    },
    results: [],
  },
  setData: () => {},
  showDetails: false,
  setShowDetails: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  cardId: "",
  setCardId: () => {}
};

export const DataContext = createContext<DataContextInitialValue>(InitialValue);

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    console.error("Ther is nod Data context!");
  }
  return context;
};

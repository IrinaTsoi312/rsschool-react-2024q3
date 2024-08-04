import { createContext, useContext } from "react";
import { SearchContextInitialValue } from "../../../assets/types";

const initialValue = {
  term: "",
  setTerm: () => {},
};

export const SearchContext =
  createContext<SearchContextInitialValue>(initialValue);

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) console.error("There is no Search context!");
  return context;
};

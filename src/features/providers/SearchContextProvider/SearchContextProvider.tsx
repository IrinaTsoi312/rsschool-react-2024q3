"use client";

import { useState } from "react";
import { ContextProps } from "../../../assets/types";
import { SearchContext } from "./SearchContext";

export default function SearchContextProvider({ children }: ContextProps) {
  const [term, setTerm] = useState("");

  return (
    <SearchContext.Provider value={{ term, setTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

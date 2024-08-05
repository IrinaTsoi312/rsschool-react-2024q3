"use client";

import { useState } from "react";
import { CharactersFetchedData, ContextProps } from "../../../assets/types";
import { DataContext } from "./DataContext";

export default function DataContextProvider({ children }: ContextProps) {
  const [data, setData] = useState<CharactersFetchedData | undefined>(undefined);
  const [showDetails , setShowDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardId, setCardId] = useState("");

  return (
    <DataContext.Provider value={{ data, setData, showDetails, setShowDetails, currentPage, setCurrentPage, cardId, setCardId }}>
      {children}
    </DataContext.Provider>
  );
}

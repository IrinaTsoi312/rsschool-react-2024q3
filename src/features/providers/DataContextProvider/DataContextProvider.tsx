import { useState } from "react";
import { CharactersFetchedData, ContextProps } from "../../../assets/types";
import { DataContext } from "./DataContext";

export default function DataContextProvider({children}: ContextProps) {
  const [data, setData] = useState<CharactersFetchedData | undefined>(undefined);

  return (
    <DataContext.Provider value={{data, setData}} >
      {children}
    </DataContext.Provider>
  );
}

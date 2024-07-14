import { Character } from "./types";

export const filterAPIDataSearch = (
  filteredData: Character[],
  searchTerm: string,
) => {
  return filteredData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm),
  );
};

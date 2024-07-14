import { useSearchContext } from "../features/providers/SearchContextProvider/SearchContext";
import { CharactersFetchedData } from "./types";
import { useDataContext } from "../features/providers/DataContextProvider/DataContext";

export const useFetchData = () => {
  const { term } = useSearchContext();
  const {data, setData} = useDataContext();
  if (!term) {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data: CharactersFetchedData) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

export async function useFetchDataHook() {
  const { term } = useSearchContext();
  const {data, setData} = useDataContext();
  localStorage.setItem("searchTerm", term);
  fetch(`https://rickandmortyapi.com/api/character/?name=${term}`)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

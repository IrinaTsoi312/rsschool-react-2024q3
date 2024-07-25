import { useEffect, useState } from "react";
import "./CardCollection.scss";
import { CharactersFetchedData } from "../../assets/types";
import { useSearchContext } from "../../features/providers/SearchContextProvider/SearchContext";
import { BASE_URL } from "./CardCollection.constants";
import Collection from "../Collection/Collection";
import CardDetails from "../CardDetails/CardDetails";
import { useDataContext } from "../../features/providers/DataContextProvider/DataContext";
import { paginations } from "../Pagination/Pagination.helpers";
import { characterAPI } from "../../features/redux/api/ApiSlice";
import { current } from "@reduxjs/toolkit";

const initialFetchedValue = {
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: null
  },
  results: []
};

const CardCollection = () => {
  const { term, setTerm } = useSearchContext();
  const {showDetails} = useDataContext();

  const [fetchedData, setFetchedData] = useState<CharactersFetchedData>(initialFetchedValue);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [total, setTotal] = useState(0);
  const {currentPage, setCurrentPage} = useDataContext();

  const {data} = characterAPI.useFetchCharactersQuery(`/?page=${currentPage}`);

  const showLoader = <div>Loading...</div>;

  useEffect(() => {
    if (isError) {
      throw new Error("Test for ErrorBoundary");
    }
  }, [isError])

  useEffect(() => {})

  const showError = () => {
    setIsError(true);
  };

  useEffect(() => {
    setTerm(localStorage.getItem("searchTerm")!);
    if (term && term.length !== 0) {
      setIsLoading(true);
      fetch(`${BASE_URL}/?name=${term}`)
        .then((response) => response.json())
        .then((data: CharactersFetchedData) => {
          setIsLoading(false);
          setFetchedData(data);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  }, [currentPage, setTerm, term]);

  const setCurrentPageNum = (num: number) => {
    setCurrentPage(num);
  };

  return (
    <main className="main">
    <button className="error-btn" onClick={showError}>
      Error
    </button>
      {isLoading ? showLoader : (
        <>
          <h2 className="collection-message">Find your favorite character!</h2>
          <div className="pagination">
            {paginations(total, setCurrentPageNum )}
          </div>
          <div className="collection-content">
            <Collection fetchedData={data} />
            {showDetails ? (<CardDetails fetchedData={fetchedData.results} />) : null}
          </div>
        </>
      )}
    </main>
  );
};

export default CardCollection;

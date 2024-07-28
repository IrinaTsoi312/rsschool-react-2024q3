import { useEffect, useState } from "react";
import "./CardCollection.scss";
import { useSearchContext } from "../../features/providers/SearchContextProvider/SearchContext";
import Collection from "../Collection/Collection";
import CardDetails from "../CardDetails/CardDetails";
import { useDataContext } from "../../features/providers/DataContextProvider/DataContext";
import { paginations } from "../Pagination/Pagination.helpers";
import { characterAPI } from "../../features/redux/api/ApiSlice";

const CardCollection = () => {
  const { term, setTerm } = useSearchContext();
  const {showDetails} = useDataContext();

  const [isError, setIsError] = useState(false);
  const total = 42;
  const {currentPage, setCurrentPage} = useDataContext();
  const [query, setQuery] = useState(`/?page=${currentPage}`);

  const {data, isLoading} = characterAPI.useFetchCharactersQuery(query);

  const showLoader = <div>Loading...</div>;

  useEffect(() => {
    setQuery(`/?page=${currentPage}`);
  }, [currentPage]);

  const showError = () => {
    setIsError(true);
  };

  useEffect(() => {
    setTerm(localStorage.getItem("searchTerm")!);
    if (term && term.length !== 0) {
      setQuery(`/?name=${term}`);
    }
  }, [setTerm, term]);

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
            {showDetails ? (<CardDetails fetchedData={data.results} />) : null}
          </div>
        </>
      )}
    </main>
  );
};

export default CardCollection;

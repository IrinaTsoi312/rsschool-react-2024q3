import { ChangeEvent, useEffect, useState } from "react";
import { useSearchContext } from "../../features/providers/SearchContextProvider/SearchContext";
import "./Header.scss";

const Header = () => {
  const { term, setTerm } = useSearchContext();
  const [inputValue, setInputValue] = useState("");
  const [localStorageValue, setLocalStorageValue] = useState(localStorage.getItem("searchTerm"));

  useEffect(() => {
    localStorage.setItem("searchTerm", term);
  }, [term]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitSearchTerm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTerm(inputValue);
    localStorage.setItem("searchTerm", term);
  };

  return (
    <header className="header">
      <h1 className="logo">Rick and Morty</h1>
      <div className="search">
        <div className="search-panel">
          <div className="search-form">
            <input
              type="text"
              className="search-input"
              name="search"
              aria-roledescription="search input"
              placeholder={
                localStorageValue === null ? "" : localStorageValue
              }
              onChange={handleOnChange}
            />
            <button
              id="searchBtn"
              type="button"
              className="btn"
              onClick={submitSearchTerm}
            ></button>
            <button
              id="resetBtn"
              type="button"
              className="btn"
              onClick={() => {
                window.location.reload();
              }}
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

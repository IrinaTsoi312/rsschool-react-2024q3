import { ChangeEvent, useState } from "react";
import { useSearchContext } from "../../features/providers/SearchContextProvider/SearchContext";
import "./Header.scss";

const Header = () => {
  const { term, setTerm } = useSearchContext();
  const [inputValue, setInputValue] = useState(term);
  console.log(term);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitSearchTerm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTerm(inputValue);
  };

  return (
    <header className="header">
      <h1 className="logo">Rick and Morty</h1>
      <div className="search">
        <div className="search-panel">
          <form className="search-form">
            <input
              type="text"
              className="search-input"
              name="search"
              aria-roledescription="search input"
              defaultValue={""}
              onChange={handleOnChange}
            />
            <button
              id="searchBtn"
              type="button"
              className="btn"
              onClick={submitSearchTerm}
            ></button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;

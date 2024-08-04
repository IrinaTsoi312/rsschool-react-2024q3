"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useSearchContext } from "../../features/providers/SearchContextProvider/SearchContext";
import "./Header.scss";
import { useThemeContext } from "@/features/providers/ThemContextProvider/ThemeContext";

const Header = () => {
  
  const BG_COLOR = { light: "#fdfff0", dark: "#1e353e" };

  const {theme} = useThemeContext();
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
    <header className="header" style={{backgroundColor: BG_COLOR[theme as keyof typeof BG_COLOR]}}>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

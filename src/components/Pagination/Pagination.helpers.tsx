"use client";

import Pagination from "./Pagination";

export const paginations = (total: number, setCurrentPageNum: (num: number) => void) => {
  const pages = [];
  for (let i = 1; i <= total; i += 1) {
    pages.push(
      <Pagination key={i} num={i} link={`/?page=${i}`} setCurrentPageNum={setCurrentPageNum} />
    );
  }

  return pages;
};
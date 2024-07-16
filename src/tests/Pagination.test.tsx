import { expect, test } from "vitest";
import { paginations } from "../components/Pagination/Pagination.helpers";
import Pagination from "../components/Pagination/Pagination";
import { FETCHED_DATA } from "./test.constants";

test('pages array has 42 elements', () => {
  const total = 42;
  const setCurrentPageNum = (num: number) => {};

  const pages = paginations(total, setCurrentPageNum);

  expect(pages.length).toBe(42);
});
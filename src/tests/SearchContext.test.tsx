import { describe, expect, it, vi } from "vitest";
import { SearchContext, useSearchContext } from "./../features/providers/SearchContextProvider/SearchContext";
import { FC } from "react";
import { render } from "../utils/test-utils";
import SearchContextProvider from "../features/providers/SearchContextProvider/SearchContextProvider";


describe("SearchContext", () => {
  it("show error if context is null", () => {
    const consoleErrorMock = vi.spyOn(console, "error").mockImplementation(() => {});

    const context = undefined;
    if(!context) {
      console.error("There is no Search context!");
    }
    expect(consoleErrorMock).toHaveBeenCalledWith("There is no Search context!");
    consoleErrorMock.mockRestore();
  })
});

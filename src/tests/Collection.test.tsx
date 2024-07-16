import { describe, expect, it } from "vitest";
import { getByText, render, screen } from "../utils/test-utils";
import Collection from "../components/Collection/Collection";
import { EMPTY_DATA, FETCHED_DATA } from "./test.constants";
import { BrowserRouter } from "react-router-dom";

describe("Collection", () => {
  it("check if there are 20 cards", () => {

    render(
      <BrowserRouter>
        <Collection fetchedData={FETCHED_DATA}  />
      </BrowserRouter>
    );

    const cards = screen.getAllByTestId("card");

    expect(cards.length).toBe(20);
  })
});

describe("Collection", () => {
  it("check for 'Sorry, there is no character with this name' message", () => {

    render(
      <BrowserRouter>
        <Collection fetchedData={EMPTY_DATA}  />
      </BrowserRouter>
    );

    const message = screen.getByText("Sorry, there is no character with this name");

    expect(message).toBeInTheDocument();
  })
})

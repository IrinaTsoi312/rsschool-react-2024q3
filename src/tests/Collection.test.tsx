import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";
import Collection from "../components/Collection/Collection";
import { FETCHED_DATA } from "./test.constants";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './../store/store';

describe("Collection", () => {
  it("check if there are 20 cards", () => {

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Collection fetchedData={FETCHED_DATA}  />
        </BrowserRouter>
      </Provider>
    );

    const cards = screen.getAllByTestId("card");

    expect(cards.length).toBe(20);
  })
});

import { describe, expect, it } from "vitest";
import Card from "../components/Card/Card";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockProps } from "./test.constants";
import { Provider } from "react-redux";
import { store } from './../store/store';

describe("Card", () => {
  it("find if card has relevant image", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card {...mockProps} />
        </BrowserRouter>
      </Provider>
    );

    const imgDiv = screen.getByTestId("imgContainer");
    expect(imgDiv).toBeInTheDocument();
    expect(imgDiv).toHaveClass("character-img");
  })
});
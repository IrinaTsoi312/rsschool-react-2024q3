import { afterAll, describe, expect, it, vi } from "vitest";
import Card from "../components/Card/Card";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CardDetails from "../components/CardDetails/CardDetails";
import { FETCHED_DATA, mockProps } from "./test.constants";

describe("Card", () => {
  it("find if card has relevant image", () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
      </BrowserRouter>
    );

    const imgDiv = screen.getByTestId("imgContainer");
    expect(imgDiv).toBeInTheDocument();
    expect(imgDiv).toHaveClass("character-img");
  })
});


describe("Card", () => {
  it("find if card has an characters relevant name", () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
      </BrowserRouter>
    );

    const name = screen.getByText("Rick Sanchez");
    
    expect(name).toBeInTheDocument();
  })
});

describe("Card", () => {
  it("find if card has an characters relevant species", () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
      </BrowserRouter>
    );

    const name = screen.getByText("Human");
    
    expect(name).toBeInTheDocument();
  })
});

describe("Card", () => {
  it("find if card has an characters relevant species", () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
        <CardDetails fetchedData={FETCHED_DATA.results} />
      </BrowserRouter>
    );

    const name = screen.getByText("Human");
    
    expect(name).toBeInTheDocument();
  })
});
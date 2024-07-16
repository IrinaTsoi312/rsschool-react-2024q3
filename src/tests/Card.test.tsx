import { afterAll, describe, expect, it, vi } from "vitest";
import Card from "../components/Card/Card";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const mockProps = {
  id: 1,
  name: "Rick Sanchez",
  imgUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  species: "Human"
}

describe("Card", () => {
  it("find if card has an image", () => {
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
  it("find if card has an characters name", () => {
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
  it("find if card has an characters species", () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
      </BrowserRouter>
    );

    const name = screen.getByText("Human");
    
    expect(name).toBeInTheDocument();
  })
});
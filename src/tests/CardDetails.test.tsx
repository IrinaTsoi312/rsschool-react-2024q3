import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Card from "../components/Card/Card";
import { FETCHED_DATA, mockProps } from "./test.constants";
import CardDetails from "../components/CardDetails/CardDetails";

describe("CardDetails", () => {
  it("check the validation of name, after clicking on the Card"), () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
        <CardDetails fetchedData={FETCHED_DATA.results} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("card"));

    const value = FETCHED_DATA.results[0].name;

    expect(value).toBeInTheDocument();
  }
});

describe("CardDetails", () => {
  it("check the validation of status, after clicking on the Card"), () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
        <CardDetails fetchedData={FETCHED_DATA.results} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("card"));

    const value = FETCHED_DATA.results[0].status;

    expect(value).toBeInTheDocument();
  }
});

describe("CardDetails", () => {
  it("check the validation of origin, after clicking on the Card"), () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
        <CardDetails fetchedData={FETCHED_DATA.results} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("card"));

    const value = FETCHED_DATA.results[0].origin;

    expect(value).toBeInTheDocument();
  }
});

describe("CardDetails", () => {
  it("check the validation of location, after clicking on the Card"), () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
        <CardDetails fetchedData={FETCHED_DATA.results} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("card"));

    const value = FETCHED_DATA.results[0].location.name;

    expect(value).toBeInTheDocument();
  }
});

describe("CardDetails", () => {
  it("check the title of CardDetails"), () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
        <CardDetails fetchedData={FETCHED_DATA.results} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("card"));

    const title = screen.getByText("Character Details:");

    expect(title).toBeInTheDocument();
  }
});

describe("CardDetails", () => {
  it("check if the CardDetails appear after clicking on the Card"), () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
        <CardDetails fetchedData={FETCHED_DATA.results} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("card"));

    const cardDetails = screen.getByTestId("d-card");

    expect(cardDetails).toBeInTheDocument();
  }
});

describe("CardDetails", () => {
  it("check if there is a table with character data after clicking on the Card"), () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
        <CardDetails fetchedData={FETCHED_DATA.results} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("card"));

    const table = screen.getByRole("table");

    expect(table).toBeInTheDocument();
  }
});

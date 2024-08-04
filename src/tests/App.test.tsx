import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { render } from "../utils/test-utils";
import App from "../App";

describe("Test", () => {
  it("has message text", () => {
    render(<App />);

    const message = screen.getByText("This is a mock website for studies");
    
    expect(message).toBeInTheDocument();
  })
})

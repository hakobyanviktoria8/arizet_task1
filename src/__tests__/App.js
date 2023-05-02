import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("Renders App component", () => {
  it("renders header text", () => {
    render(<App />, { wrapper: BrowserRouter });
    const textName = screen.getByText(/GET LOVELY CUTIES IN YOUR AREA!/i);
    expect(textName).toBeInTheDocument();
  });

  it("renders a Start button", () => {
    render(<App />, { wrapper: BrowserRouter });
    const startButton = screen.getByText(/Start!/i);
    expect(startButton).toBeInTheDocument();
  });
});

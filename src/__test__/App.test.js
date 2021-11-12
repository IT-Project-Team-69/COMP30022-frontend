import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("Renders landing page upon opening App", () => {
    render(<App />);
    const landingPage = screen.getByTestId("landing-page");
    expect(landingPage).toBeInTheDocument();
});

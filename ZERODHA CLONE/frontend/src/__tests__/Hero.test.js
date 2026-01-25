import React from "react";

import { render, screen } from "@testing-library/react";

// import '@testing-library/jest-dom/extend-expect'; // is outdated

import '@testing-library/jest-dom';

import Hero from "../landing_page/home/Hero";

// Test Suite
describe("Hero Component", () => {
  test("renders the Hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "/Images/homeHero.png");
  });
  test("renders the sig-up button", () => {
    render(<Hero />);
    const sigUp_button = screen.getByRole("link", { name: /sign up for free/i });
    expect(sigUp_button).toBeInTheDocument();
    expect(sigUp_button).toHaveAttribute("href", "/open-account");
    expect(sigUp_button).toHaveClass("btn-primary");
  });
});
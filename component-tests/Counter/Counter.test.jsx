import React from "react";
import { it, expect, afterEach } from "vitest";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Counter from "./Counter.jsx";

// Clear out DOM after each test so they are independent.
afterEach(cleanup);

it("increments count when increment button is clicked", () => {
  // Render the component with react-testing-library
  // https://testing-library.com/docs/react-testing-library/api#render
  const { getByText, getByTestId } = render(<Counter />);

  // Get count value and make initial assertion
  const count = getByTestId("count");
  expect(count.textContent).toBe("0");

  // Get increment button DOM node
  const incrementButton = getByText("+");

  // Simulate click event on increment button
  fireEvent(incrementButton, new MouseEvent("click", { bubbles: true }));

  // Assert that count value has been updated to 1
  expect(count.textContent).toBe("1");
});

it("decrements count when decrement button is clicked", () => {
  // Render the component with react-testing-library
  // https://testing-library.com/docs/react-testing-library/api#render
  const { getByText, getByTestId } = render(<Counter />);

  // Get count value and make initial assertion
  const count = getByTestId("count");
  expect(count.textContent).toBe("0");

  // Get increment button DOM node
  const decrementButton = getByText("-");

  // Simulate click event on increment button
  fireEvent(decrementButton, new MouseEvent("click", { bubbles: true }));

  // Assert that count value has been updated to -1
  expect(count.textContent).toBe("-1");
});

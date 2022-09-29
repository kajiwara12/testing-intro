import { it, expect } from "vitest";
import reverse from "./simple.js";

// Table-based testing.
// Each element of the array is a pair of inputs and outputs. Just loop through
// them to ensure they are equal.
const cases = [
  [[], []],
  [
    [1, 2, 3],
    [3, 2, 1],
  ],
  [
    [1, 2, 3, 4],
    [4, 3, 2, 1],
  ],
];

it("works for all cases", () => {
  cases.forEach(([input, output]) => {
    expect(reverse(input)).toEqual(output);
  });
});

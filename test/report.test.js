const { sortPages } = require("../src/report.mjs");

const { test, expect } = require("@jest/globals");

test("sortPages", () => {
  const input = {
    "https://wagslane.dev/path": 5,
    "https://wagslane.dev": 7,
  };

  const actualOutput = sortPages(input);
  const expectedOutput = [
    ["https://wagslane.dev", 7],
    ["https://wagslane.dev/path", 5],
  ];

  expect(actualOutput).toEqual(expectedOutput);
});

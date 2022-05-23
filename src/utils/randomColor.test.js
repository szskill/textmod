const randomColor = require("./randomColor");

test("randomColor returns a color between 000000 and FFFFFF", () => {
  expect(randomColor()).toBeGreaterThanOrEqual(0);
  expect(randomColor()).toBeLessThanOrEqual(0xffffff);
});

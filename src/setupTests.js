// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import jsonpath from "jsonpath";

expect.extend({
  toMatchJsonPath(received, argument) {
    const result = jsonpath.query(received, argument);

    if (result.length > 0) {
      return {
        pass: true,
        message: () => "matched",
      };
    } else {
      return {
        pass: false,
        message: () =>
          `expected ${JSON.stringify(received)} to match jsonpath ${argument}`,
      };
    }
  },
});

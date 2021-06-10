import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Copyright from "./Copyright";
let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test.skip("should have text with current year", () => {
  const { queryByTitle } = render(<Copyright />, container);
  const text = queryByTitle("copyright");
  expect(text).toBeTruthy();
  expect(text.innerHTML).toContain("2021");
});

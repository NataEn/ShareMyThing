import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "./Home";
import items from "../../items.json";

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

// make assertions

test("should have elements", () => {
  act(() => {
    // render components
    render(<Home items={items} />, container);
  });
  const h4 = container.queryAllByText("Available Now");
  expect(h4.textContent).toBe("Available Now");
});

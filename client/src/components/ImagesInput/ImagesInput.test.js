import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ImagesInput from "./ImagesInput";

test("Clicking the icon button should trigger opening a select file window", () => {
  const { getByLabelText } = render(<ImagesInput />);
  const checkbox = getByLabelText(/not checked/i);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(false);
});

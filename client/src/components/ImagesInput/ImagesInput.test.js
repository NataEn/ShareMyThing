import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ImagesInput from "./ImagesInput";

test.skip("should be an add item text", () => {
  // const { getByLabelText } = render(<ImagesInput />);
  // const checkbox = getByLabelText(/not checked/i);
  // fireEvent.click(checkbox);
  // expect(checkbox.checked).toEqual(true);
  // fireEvent.click(checkbox);
  // expect(checkbox.checked).toEqual(false);
  const { queryByTitle } = render(<ImagesInput />);
  const text = queryByTitle("addImgText");
  expect(text.innerHTML).toBeTruthy();
});

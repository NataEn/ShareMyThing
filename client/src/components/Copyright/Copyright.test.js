import { render } from "@testing-library/react";
import Copyright from "./Copyright";

test("should have  ", () => {
  const { queryByTitle } = render(<Copyright />);
  const text = queryByTitle("copyright");
  expect(text).toBeTruthy();
  expect(text.innerHTML).toContain("2021");
});

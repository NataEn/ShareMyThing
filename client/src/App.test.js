import { render, screen } from "@testing-library/react";
import App from "./App";

test.skip("renders learn react link", () => {
  render(<App />);
  const titleElement = screen.getByText(/Available Now/i);
  expect(titleElement).toBeInTheDocument();
});

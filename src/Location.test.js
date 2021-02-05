import { render, screen, waitFor } from "@testing-library/react";
import Location from "./Location.js";
import mockResponse from "../__mocks__/githubResponseData.json";

test("renders the users Location", async () => {
  render(<Location userData={mockResponse}/>);

  const element = await waitFor(() => screen.getByText("Belfast"));
  expect(element).toBeInTheDocument()
});
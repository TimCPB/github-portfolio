import { render, screen, waitFor } from "@testing-library/react";
import Twitter from "./Twitter.js";
import mockResponse from "../__mocks__/githubResponseData.json";

test("renders the users Twitter", async () => {
  render(<Twitter userData={mockResponse}/>);

  const element = await waitFor(() => screen.getByText("test_twitter"));
  expect(element).toBeInTheDocument()
});
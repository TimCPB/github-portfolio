import { render, screen, waitFor } from "@testing-library/react";
import Email from "./Email.js";
import mockResponse from "../__mocks__/githubResponseData.json";

test("renders the users email", async () => {
  render(<Email userData={mockResponse}/>);

  const element = await waitFor(() => screen.getByText("example@email.com"));
  expect(element).toBeInTheDocument()
});
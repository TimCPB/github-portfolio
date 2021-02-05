import { render, screen, waitFor } from "@testing-library/react";
import User from "./User";
import mockResponse from "../__mocks__/githubResponseData.json";

test("renders the users name", async () => {
  render(<User userData={mockResponse}/>);

  const element = await waitFor(() => screen.getByText("Bim Tishop"));
  expect(element).toBeInTheDocument();
});

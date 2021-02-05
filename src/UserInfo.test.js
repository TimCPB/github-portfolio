import { render, screen, waitFor } from "@testing-library/react";
import UserInfo from "./UserInfo";
import mockResponse from "../__mocks__/githubResponseData.json";

test("renders the users name", async () => {
  render(<UserInfo userData={mockResponse} />);

  const element = await waitFor(() => screen.getByText("Bim Tishop"));
  expect(element).toBeInTheDocument();
});

test("renders the users bio", async () => {
  render(<UserInfo userData={mockResponse} />);

  const element = await waitFor(() => screen.getByText("Driven, enthusiastic"));
  expect(element).toBeInTheDocument();
});

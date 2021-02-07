import { render, screen, waitFor } from "@testing-library/react";
import UserInfo from "./UserInfo";
import mockResponse from "../__mocks__/githubResponseData.json";

test("renders the users name from teh github API", async () => {
  render(<UserInfo userData={mockResponse} />);

  const element = await waitFor(() => screen.getByText("Bim Tishop"));
  expect(element).toBeInTheDocument();
});

test("renders the users bio", async () => {
  render(<UserInfo userData={mockResponse} />);

  const element2 = await waitFor(() =>
    screen.getByText(/Driven, enthusiastic/)
  );
  expect(element2).toBeInTheDocument();

});

test("renders the users Twitter", async () => {
  render(<UserInfo userData={mockResponse}/>);

  const element = await waitFor(() => screen.getByText("test_twitter"));
  expect(element).toBeInTheDocument()
});

test("renders the users Location", async () => {
  render(<UserInfo userData={mockResponse}/>);

  const element = await waitFor(() => screen.getByText("Belfast"));
  expect(element).toBeInTheDocument()
});

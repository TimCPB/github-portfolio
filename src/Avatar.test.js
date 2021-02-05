import { render, screen, waitFor } from "@testing-library/react";
import Avatar from "./Avatar";
import mockResponse from "../__mocks__/githubResponseData.json";

test("renders the users photo", async () => {
  render(<Avatar userData={mockResponse}/>);

  const image = await waitFor(() => screen.getByAltText("avatar"));
  expect(image.src).toContain(mockResponse.avatar_url)
});

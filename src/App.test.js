import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import mockResponse from "../__mocks__/githubResponseData.json";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementation(() => {
    return Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    });
  });
});

test("renders the users name", async () => {
  render(<App />);

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/users/timcpb');
});
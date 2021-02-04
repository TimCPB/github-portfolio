// test : render the user component, when fetch is called do this mock (json file) instead of fetching the actual data from the api,
// test to display the right username? 
import { render, screen, waitFor } from '@testing-library/react';
import User from './user';
import mockResponse from '../__mocks__/githubResponseData.json'

jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse)
  })
})

test('renders the users name', async () => {
  render(<User />)

  const element = await waitFor(() => screen.getByText("bim tishop"))
  expect(element).toBeInTheDocument()

})

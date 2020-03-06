import '@testing-library/jest-dom/extend-expect'
import { cleanup, fireEvent } from '@testing-library/react'
import faker from 'faker'
import React from 'react'

import { Home } from '../..'
import { renderWithRouter } from '../../../utils/testRenders'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}))
afterEach(() => {
  cleanup()
  mockHistoryPush.mockClear()
})

describe('HomePage Component', () => {
  it('renders HomePage Component correctly', async () => {
    const { getByTestId } = renderWithRouter(<Home />)

    expect(getByTestId('home-octolens-logo').textContent).toEqual('OctoLens')
    expect(getByTestId('home-input')).toBeTruthy()
  })

  it('should redirect user when input is not empty', () => {
    const testUsername = faker.internet.userName()

    const { getByTestId } = renderWithRouter(<Home />)

    // elements
    const homeInput = getByTestId('home-input') as HTMLInputElement
    const form = getByTestId('home-form') as HTMLFormElement

    // writing to input field
    fireEvent.change(homeInput, { target: { value: testUsername } })
    expect(homeInput.value).toEqual(testUsername)

    // firing a submit
    fireEvent.submit(form)
    expect(homeInput.value).toEqual('')

    // testing redirect
    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
    expect(mockHistoryPush).toHaveBeenCalledWith(
      `/profile/${testUsername.toLowerCase()}`
    )
  })

  it('should not redirect user when input is empty', () => {
    const { getByTestId } = renderWithRouter(<Home />)

    // elements
    const homeInput = getByTestId('home-input') as HTMLInputElement
    const form = getByTestId('home-form') as HTMLFormElement

    // firing a submit
    fireEvent.submit(form)
    expect(homeInput.value).toEqual('')

    // testing redirect
    expect(mockHistoryPush).toHaveBeenCalledTimes(0)
  })
})

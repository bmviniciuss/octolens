import '@testing-library/jest-dom/extend-expect'
import { cleanup, fireEvent } from '@testing-library/react'
import React from 'react'

import { Home } from '../..'
import { renderWithRouter } from '../../../utils/renderWithRouter'

afterEach(cleanup)

describe('HomePage Component', () => {
  it('renders HomePage Component correctly', async () => {
    const { getByTestId } = renderWithRouter(<Home />)

    expect(getByTestId('home-octolens-logo').textContent).toEqual('OctoLens')
    expect(getByTestId('home-input')).toBeTruthy()
  })

  it('should redirect user when input is not empty', () => {
    const testUsername = 'bmviniciuss'
    const { getByTestId, history } = renderWithRouter(<Home />)

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
    expect(history.location.pathname).toEqual(`/u`)
    expect(history.location.search).toEqual(`?search=${testUsername}`)
  })

  it('should not redirect user when input is empty', () => {
    const { getByTestId, history } = renderWithRouter(<Home />)

    // elements
    const homeInput = getByTestId('home-input') as HTMLInputElement
    const form = getByTestId('home-form') as HTMLFormElement

    // firing a submit
    fireEvent.submit(form)
    expect(homeInput.value).toEqual('')

    // testing redirect
    expect(history.location.pathname).toEqual('/')
    expect(history.location.search).toEqual('')
  })
})

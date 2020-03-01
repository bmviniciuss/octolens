import '@testing-library/jest-dom/extend-expect'
import { cleanup } from '@testing-library/react'
import React from 'react'

import { renderWithRouter } from '../../utils/testRenders'
import { Routes } from '../Router'

afterEach(cleanup)

describe('Router Component', () => {
  test('landing on a bad page', () => {
    const { getByTestId } = renderWithRouter(<Routes />, {
      route: '/'
    })
    expect(getByTestId('home-octolens-logo').textContent).toEqual('OctoLens')
    expect(getByTestId('home-input')).toBeTruthy()
  })
})

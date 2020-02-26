import { render } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory, History } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

import WithTheme from './WithTheme'

interface Input {
  route?: string
  history?: MemoryHistory<History.PoorMansUnknown>
}

export function renderWithRouter(
  ui: React.ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  }: Input = {}
) {
  const Wrapper: React.FC = ({ children }) => (
    <WithTheme>
      <Router history={history}>{children}</Router>
    </WithTheme>
  )
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  }
}

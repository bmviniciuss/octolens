import '@testing-library/jest-dom/extend-expect'
import { cleanup } from '@testing-library/react'
import React from 'react'

import { ProfileHeader } from '../..'
import { userFactory } from '../../../../factories'
import { renderWithTheme } from '../../../../utils/testRenders'

afterEach(cleanup)

describe('ProfileHeader Component', () => {
  it('renders ProfileHeader Component correctly', async () => {
    const profile = userFactory()

    const { getByTestId, getByAltText, getByText } = renderWithTheme(
      <ProfileHeader profile={profile} />
    )

    expect(getByTestId('profile-header')).toBeDefined()
    expect(getByTestId('profile-login').textContent).toEqual(
      `@${profile.login}`
    )
    expect(getByAltText(`${profile.name} profile`)).toBeDefined()
    expect(getByText(/repositories/i).textContent).toEqual(
      `${profile.public_repos} Repositories`
    )
    expect(getByText(/followers/i).textContent).toEqual(
      `${profile.followers} Followers`
    )
    expect(getByText(/following/i).textContent).toEqual(
      `${profile.following} Following`
    )
  })
})

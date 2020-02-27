import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import React from 'react'

import { ProfileHeader } from '../..'

afterEach(cleanup)

const mockProfile = {
  login: 'bmviniciuss',
  id: 20448523,
  node_id: 'MDQ6VXNlcjIwNDQ4NTIz',
  avatar_url: 'https://avatars0.githubusercontent.com/u/20448523?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/bmviniciuss',
  html_url: 'https://github.com/bmviniciuss',
  followers_url: 'https://api.github.com/users/bmviniciuss/followers',
  following_url:
    'https://api.github.com/users/bmviniciuss/following{/other_user}',
  gists_url: 'https://api.github.com/users/bmviniciuss/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/bmviniciuss/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/bmviniciuss/subscriptions',
  organizations_url: 'https://api.github.com/users/bmviniciuss/orgs',
  repos_url: 'https://api.github.com/users/bmviniciuss/repos',
  events_url: 'https://api.github.com/users/bmviniciuss/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/bmviniciuss/received_events',
  type: 'User',
  site_admin: false,
  name: 'Vinicius Barbosa de Medeiros',
  company: null,
  blog: 'viniciusmedeiros.tech',
  location: 'João Pessoa, PB, Brazil',
  email: null,
  hireable: true,
  bio: 'Front-end Developer.\r\nComputer Science student at UFPB. ',
  public_repos: 24,
  public_gists: 0,
  followers: 25,
  following: 32,
  created_at: '2016-07-13T23:40:53Z',
  updated_at: '2020-02-26T03:57:01Z'
}

describe('ProfileHeader Component', () => {
  it('renders ProfileHeader Component correctly', async () => {
    const { getByTestId, getByAltText } = render(
      <ProfileHeader profile={mockProfile} />
    )

    expect(getByTestId('profile-header')).toBeDefined()
    expect(getByTestId('profile-name').textContent).toEqual(mockProfile.name)
    expect(getByAltText(`${mockProfile.name} profile`)).toBeDefined()
  })
})

import '@testing-library/jest-dom/extend-expect'
import { cleanup } from '@testing-library/react'
import React from 'react'

import { repoFactory } from '../../../../factories/repoFactory'
import { userFactory } from '../../../../factories/userFactory'
import { renderWithTheme } from '../../../../utils/testRenders'
import RepoListItem from '../RepoListItem'

afterEach(cleanup)

describe('RepoListItem Component', () => {
  it('renders RepoListItem component correctly', async () => {
    const profile = userFactory()
    const repo = repoFactory(profile)

    const { getByTestId } = renderWithTheme(<RepoListItem repo={repo} />)
    expect(getByTestId('repo-name').textContent).toEqual(repo.name)
    expect(getByTestId('repo-description').textContent).toEqual(
      repo.description || ''
    )

    if (repo.language) {
      expect(getByTestId('repo-language').textContent).toEqual(repo.language)
    }

    expect(getByTestId('repo-stars').textContent).toEqual(
      String(repo.stargazers_count)
    )
    expect(getByTestId('repo-forks').textContent).toEqual(
      String(repo.forks_count)
    )
  })

  it('renders RepoListItem without a language', async () => {
    const profile = userFactory()
    const repo = repoFactory(profile, { language: null })

    const { queryByTestId } = renderWithTheme(<RepoListItem repo={repo} />)

    expect(queryByTestId(/repo-language/i)).toBeNull()
  })
})

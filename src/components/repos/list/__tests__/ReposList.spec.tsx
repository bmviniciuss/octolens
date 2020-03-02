import '@testing-library/jest-dom/extend-expect'
import { cleanup } from '@testing-library/react'
import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import { repoFactory } from '../../../../factories/repoFactory'
import { userFactory } from '../../../../factories/userFactory'
import { renderWithTheme } from '../../../../utils/testRenders'
import ReposList from '../ReposList'

afterEach(cleanup)

describe('ReposList Component', () => {
  it('renders ReposList component correctly', async () => {
    const profile = userFactory()
    const nRepos = faker.random.number(10)
    const repos = []
    for (let i = 0; i < nRepos; i++) {
      repos.push(repoFactory(profile))
    }

    const { getAllByTestId, getByText, getByTestId } = renderWithTheme(
      <ReposList repos={repos} />
    )
    expect(getByText(/top repositories/i)).toBeTruthy()

    const reposNames = getAllByTestId('repo-name').map(li => li.textContent)
    const fakeReposNames = _.orderBy(
      repos,
      ['stargazers_count', 'name'],
      ['desc', 'asc']
    ).map(r => r.name)
    expect(reposNames).toEqual(fakeReposNames)
  })
})

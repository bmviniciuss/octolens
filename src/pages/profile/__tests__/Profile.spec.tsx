import '@testing-library/jest-dom/extend-expect'
import { cleanup, waitForElement, wait } from '@testing-library/react'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

import { repoFactory } from '../../../factories/repoFactory'
import { userFactory } from '../../../factories/userFactory'
import { renderWithRouter } from '../../../utils/testRenders'
import Profile from '../Profile'

jest.mock('axios', () => ({
  get: jest.fn()
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}))

afterEach(cleanup)

const mockAxios = axios as jest.Mocked<typeof axios>
const useParamsMock = useParams as jest.Mock

afterEach(() => {
  mockAxios.get.mockClear()
  useParamsMock.mockClear()
})

describe('Profile Page Component', () => {
  it('it ProfilePage loading state correctly', async () => {
    const login = 'bmviniciuss'
    const API_PROFILE_URL = `https://api.github.com/users/${login}`
    const fakeProfile = userFactory({ login })
    const fakeRepos = [repoFactory(fakeProfile)]

    const profilePromise = Promise.resolve({ data: fakeProfile })
    const reposPromise = Promise.resolve({ data: fakeRepos })

    useParamsMock.mockImplementation(() => ({
      username: login
    }))
    mockAxios.get.mockResolvedValueOnce(profilePromise)
    mockAxios.get.mockResolvedValueOnce(reposPromise)

    const { queryByTestId, debug, getByTestId } = renderWithRouter(
      <Profile />,
      {
        route: `/profile/${login}`
      }
    )

    // loading state
    expect(queryByTestId('loading')).toBeTruthy()

    await waitForElement(() => expect(getByTestId('profile-data')))
    await waitForElement(() => expect(getByTestId('repos-data')))

    expect(getByTestId('profile-login').textContent).toEqual(`@${login}`)

    expect(mockAxios.get).toHaveBeenCalledWith(API_PROFILE_URL)
    expect(mockAxios.get).toHaveBeenCalledWith(API_PROFILE_URL + '/repos')

    expect(mockAxios.get).toHaveBeenCalledTimes(2)
    // debug()
  })

  it('it fails to fetch profile data ', async () => {
    const login = 'bmviniciuss'
    const API_PROFILE_URL = `https://api.github.com/users/${login}`
    const fakeProfile = userFactory({ login })
    const fakeRepos = [repoFactory(fakeProfile)]

    // eslint-disable-next-line prefer-promise-reject-errors
    const profilePromise = Promise.reject('Error')
    const reposPromise = Promise.resolve({ data: fakeRepos })

    useParamsMock.mockImplementation(() => ({
      username: login
    }))
    mockAxios.get.mockResolvedValueOnce(profilePromise)
    mockAxios.get.mockResolvedValueOnce(reposPromise)

    const { queryByTestId, getByTestId, findByText } = renderWithRouter(
      <Profile />,
      {
        route: `/profile/${login}`
      }
    )

    // loading state
    expect(queryByTestId('loading')).toBeTruthy()

    await waitForElement(() => expect(getByTestId('error')))

    expect(findByText(/An error occurred/i)).toBeTruthy()

    expect(mockAxios.get).toHaveBeenCalledWith(API_PROFILE_URL)
    expect(mockAxios.get).toHaveBeenCalledWith(API_PROFILE_URL + '/repos')

    expect(mockAxios.get).toHaveBeenCalledTimes(2)
  })

  it('it fails to fetch repos data ', async () => {
    const login = 'bmviniciuss'
    const API_PROFILE_URL = `https://api.github.com/users/${login}`
    const fakeProfile = userFactory({ login })

    const profilePromise = Promise.resolve({ data: fakeProfile })
    // eslint-disable-next-line prefer-promise-reject-errors
    const reposPromise = Promise.reject('Errror')

    useParamsMock.mockImplementation(() => ({
      username: login
    }))
    mockAxios.get.mockResolvedValueOnce(profilePromise)
    mockAxios.get.mockResolvedValueOnce(reposPromise)

    const { queryByTestId, getByTestId, findByText } = renderWithRouter(
      <Profile />,
      {
        route: `/profile/${login}`
      }
    )

    // loading state
    expect(queryByTestId('loading')).toBeTruthy()

    await waitForElement(() => expect(getByTestId('error')))

    expect(findByText(/An error occurred/i)).toBeTruthy()

    expect(mockAxios.get).toHaveBeenCalledWith(API_PROFILE_URL)
    expect(mockAxios.get).toHaveBeenCalledWith(API_PROFILE_URL + '/repos')

    expect(mockAxios.get).toHaveBeenCalledTimes(2)
  })
})

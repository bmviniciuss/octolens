import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ProfileHeader } from '../../components/profile'
import { ReposList } from '../../components/repos'
// import fakeProfile from '../../mocks/bmviniciuss.json'
// import fakeRepos from '../../mocks/repos.json'
import { Wrapper } from '../../styles/SharedStyles'
import { ProfileType, RepoType } from '../../types/githubApi'
import {
  ProfileWrapper,
  ReposContent,
  CenteredState,
  LoadingSpinner,
  ErrorCard,
  ErrorTitle,
  ErrorMessage,
  ErrorAction
} from './ProfileStyles'

interface StateType {
  profile?: ProfileType
  repos?: RepoType[]
  error: boolean
}

const Profile: React.FC = () => {
  const { username } = useParams<{ username: string }>()
  const [profile, setProfile] = useState<ProfileType | undefined>(undefined)
  const [repos, setRepos] = useState<RepoType[] | undefined>(undefined)
  const [error, setError] = useState(false)

  // profile
  useEffect(() => {
    let mounted = true
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(({ data }) => {
        if (mounted) {
          setProfile(data)
        }
      })
      .catch(() => {
        if (mounted) {
          setError(true)
        }
      })
    return () => {
      mounted = false
    }
  }, [username])

  // repos
  useEffect(() => {
    let mounted = true
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(({ data }) => {
        if (mounted) {
          setRepos(data)
        }
      })
      .catch(() => {
        if (mounted) {
          setError(true)
        }
      })
    return () => {
      mounted = false
    }
  }, [username])

  if (error) {
    return (
      <CenteredState>
        <ErrorCard>
          <ErrorTitle>Ops!</ErrorTitle>
          <ErrorMessage>
            An error occurred while trying to fetch <strong>{username}</strong>{' '}
            profile. Please, go back and try again.
          </ErrorMessage>

          <ErrorAction to="/">Try Again</ErrorAction>
        </ErrorCard>
      </CenteredState>
    )
  }

  if (!profile || !repos) {
    return (
      <CenteredState>
        <LoadingSpinner
          delay={100}
          type="spinningBubbles"
          color="hsl(215,22%,17%)"
        />
      </CenteredState>
    )
  }

  return (
    <>
      <Wrapper>
        <ProfileWrapper>
          <div>
            <ProfileHeader profile={profile} />
          </div>
          <div>
            <ReposContent>
              <ReposList repos={repos} />
            </ReposContent>
          </div>
        </ProfileWrapper>
      </Wrapper>
    </>
  )
}

export default Profile

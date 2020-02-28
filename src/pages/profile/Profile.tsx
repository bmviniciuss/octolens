import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ProfileHeader } from '../../components/profile'
import { BlueGradientHorizontal, Wrapper } from '../../styles/SharedStyles'
import { ProfileType } from '../../types/githubApi'
import { ProfileWrapper, Content } from './ProfileStyles'

interface StateType {
  data?: ProfileType
  error?: string
}

const fake = {
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

const Profile: React.FC = () => {
  const { username } = useParams<{ username: string }>()
  const [{ data, error }, setState] = useState<StateType>({
    data: fake,
    error: undefined
  })

  // useEffect(() => {
  //   let mounted = true
  //   axios
  //     .get(`https://api.github.com/users/${username}`)
  //     .then(({ data }) => {
  //       if (mounted) {
  //         setState({ data })
  //       }
  //     })
  //     .catch(e => {
  //       if (mounted) {
  //         setState({ error: 'An Error occour' })
  //       }
  //     })
  //   return () => {
  //     mounted = false
  //   }
  // }, [username])

  if (error) {
    console.log('ERROR - should redirect')
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <BlueGradientHorizontal />
      <Wrapper>
        <ProfileWrapper>
          <ProfileHeader profile={fake} />
          <Content>Content</Content>
        </ProfileWrapper>
      </Wrapper>
    </>
  )
}

export default Profile

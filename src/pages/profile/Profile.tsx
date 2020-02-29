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
      {/* <BlueGradientHorizontal /> */}
      <Wrapper>
        <ProfileWrapper>
          <div>
            <ProfileHeader profile={data} />
          </div>
          <div>
            <Content>
              Vinicius Barbosa de Medeiros @bmviniciuss Front-end Developer.
              Computer Science student at UFPB. João Pessoa, PB, Brazil 24
              Repositories 25 Followers 32 Following Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it? It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like). Where does it come from? Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32. The standard chunk
              of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.Vinicius Barbosa de Medeiros @bmviniciuss Front-end
              Developer. Computer Science student at UFPB. João Pessoa, PB,
              Brazil 24 Repositories 25 Followers 32 Following Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum. Why do we use
              it? It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). Where does it come from?
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.Vinicius Barbosa de Medeiros
              @bmviniciuss Front-end Developer. Computer Science student at
              UFPB. João Pessoa, PB, Brazil 24 Repositories 25 Followers 32
              Following Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham.
            </Content>
          </div>
        </ProfileWrapper>
      </Wrapper>
    </>
  )
}

export default Profile

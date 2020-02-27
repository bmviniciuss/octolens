import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
  BlueGradientHorizontal,
  FullHeightWrapper
} from '../../styles/SharedStyles'
import { HomeWrapper, HomeLogoTitle, HomeInput, HomeForm } from './HomeStyles'

const Home: React.FC = () => {
  const [username, setUsername] = useState('')
  const history = useHistory()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username) {
      setUsername('')
      history.push(`/profile/${username.toLowerCase()}`)
    }
  }

  return (
    <FullHeightWrapper>
      <BlueGradientHorizontal />

      <HomeWrapper>
        <HomeLogoTitle data-testid="home-octolens-logo">
          Octo<strong>Lens</strong>
        </HomeLogoTitle>
        <HomeForm onSubmit={handleSubmit} data-testid="home-form">
          <HomeInput
            data-testid="home-input"
            placeholder="Github username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </HomeForm>
      </HomeWrapper>
    </FullHeightWrapper>
  )
}

export default Home

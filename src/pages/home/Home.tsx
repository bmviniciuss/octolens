import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Wrapper } from '../../styles/SharedStyles'
import { HomeWrapper, HomeLogo, HomeInput, HomeForm } from './HomeStyles'

const Home: React.FC = () => {
  const [username, setUsername] = useState('')
  const history = useHistory()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username) {
      setUsername('')
      history.push(`/u?search=${username}`)
    }
  }

  return (
    <Wrapper>
      <HomeWrapper>
        <HomeLogo data-testid="home-octolens-logo">
          Octo<strong>Lens</strong>
        </HomeLogo>
        <HomeForm onSubmit={handleSubmit} data-testid="home-form">
          <HomeInput
            data-testid="home-input"
            placeholder="Github username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </HomeForm>
      </HomeWrapper>
    </Wrapper>
  )
}

export default Home

import styled from 'styled-components'

export const HomeWrapper = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const HomeLogo = styled.h1`
  font-family: 'Poppins';
  font-size: 4rem;
  font-weight: 500;
  strong {
    font-weight: 700;
  }
`

export const HomeForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeInput = styled.input`
  width: 90%;
  max-width: 500px;
  height: 2rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-family: 'Fira Code', 'Poppins';
  color: #666;
  border: ${({ theme: { colors } }) =>
    `1px solid ${colors.philippineSilver.base}`};
  border-radius: 4px;
  text-align: center;
`

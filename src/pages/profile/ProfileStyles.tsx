import ReactLoading from 'react-loading'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  background-color: ${({ theme }) => `${theme.colors.g.lighter}`};
  display: grid;
  grid-template-columns: 300px auto;
  gap: 2rem;
  margin: 3rem 0;

  @media screen and (max-width: 683px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`
export const CenteredState = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ErrorCard = styled.div`
  background: ${({ theme }) => `${theme.colors.error.lighter}`};
  padding: 1rem 1rem;
  border: ${({ theme }) => `solid 2px ${theme.colors.error.base}`};
  border-radius: 0.4rem;
  box-shadow: 0 1px 2.2px rgba(0, 0, 0, 0.02),
    0 2.3px 5.3px rgba(0, 0, 0, 0.028), 0 4.4px 10px rgba(0, 0, 0, 0.035),
    0 7.8px 17.9px rgba(0, 0, 0, 0.042), 0 14.6px 33.4px rgba(0, 0, 0, 0.05),
    0 35px 80px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
`

export const ErrorTitle = styled.h1`
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => `${theme.colors.error.darker}`};
`

export const ErrorMessage = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-top: 0.5rem;
  color: ${({ theme }) => `${theme.colors.error.dark}`};
`

export const ErrorAction = styled(Link)`
  margin-top: 1rem;
  color: ${({ theme }) => `${theme.colors.error.darker}`};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  align-self: flex-end;
`

export const LoadingSpinner = styled(ReactLoading)`
  color: ${({ theme }) => `${theme.colors.g.darker}`};
`

export const ReposContent = styled.div`
  @media screen and (max-width: 683px) {
    margin-top: 4rem;
  }
`

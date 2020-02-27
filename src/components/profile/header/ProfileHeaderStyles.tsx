import styled from 'styled-components'

export const ProfileHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem 2rem 2rem;
  background: ${props => {
    return `${props.theme.colors.blue[97]}`
  }};
`
export const ProfileAvatar = styled.img`
  max-height: 150px;
  max-width: 150px;
  border-radius: 50%;
  box-shadow: ${props => {
    return `${props.theme.shadows[1]}`
  }};
`

export const ProfileName = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  margin-top: 2rem;
  color: ${({ theme }) => `${theme.colors.blue[10]}`};
  font-family: Roboto;
  text-align: center;
`
export const ProfileBio = styled.p`
  font-size: 1rem;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => `${theme.colors.blue[10]}`};
  margin-top: 0;
`
export const MetaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
  margin-top: 2rem;
`

export const MetaCard = styled.div`
  background: #fff;
  padding: 0.2rem 1rem;
  box-shadow: ${({ theme }) => {
    return theme.shadows[1]
  }};
  border-radius: 5px;
  border-top: ${({ theme }) => {
    return `5px solid ${theme.colors.blue[41]}`
  }};
  color: ${({ theme }) => `${theme.colors.blue[21]}`};
  font-family: 'Fira code';
`

export const MetaCardTitle = styled.h3`
  color: ${({ theme }) => `${theme.colors.blue[10]}`};
  font-weight: 500;
  font-size: 1.2rem;
  margin: 1rem 0 0 0;
`

export const MetaCardContent = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`

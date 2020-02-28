import styled from 'styled-components'

export const ProfileHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 0.4rem;
`
export const ProfileContent = styled.div`
  padding: 1rem;
`

export const ProfileAvatar = styled.img`
  max-height: 300px;
  max-width: 300px;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
`

export const ProfileName = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0;
  font-family: Roboto;
  color: ${({ theme }) => `${theme.colors.gray[12]}`};
`
export const ProfileLogin = styled.h2`
  font-family: 'Fira Code';
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0;
  margin-top: 0.5rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => `${theme.colors.gray[12]}`};

    &:hover {
      border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray[2]}`};
      color: ${({ theme }) => `${theme.colors.gray[2]}`};
    }
  }
`

export const ProfileLocation = styled.span`
  font-size: 0.9rem;
  display: flex;
  align-items: end;
  white-space: nowrap;
  color: ${({ theme }) => `${theme.colors.gray[12]}`};
  svg {
    margin-right: 5px;
  }
`

export const ProfileBio = styled.p`
  font-size: 1rem;
  margin-top: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => `${theme.colors.gray[12]}`};
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

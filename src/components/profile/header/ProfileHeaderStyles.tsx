import styled from 'styled-components'

export const ProfileHeaderWrapper = styled.div`
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 0.4rem;
`
export const ProfileContent = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => `${theme.colors.g.lighter}`};
`
export const ProfileAvatar = styled.div`
  width: 100%;
  max-width: 100%;
  padding-top: 100%;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  position: relative;
`

export const ProfileImage = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
`

export const ProfileName = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0;
  margin-top: 1rem;
  font-family: 'Rubik';
  color: ${({ theme }) => `${theme.colors.g.darker}`};
`
export const ProfileLogin = styled.h2`
  font-family: 'Fira Code';
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0;
  margin-top: 0.5rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => `${theme.colors.g.darker}`};

    &:hover {
      border-bottom: ${({ theme }) => `2px solid ${theme.colors.g.darker}`};
    }
  }
`
export const ProfileBio = styled.p`
  font-size: 1rem;
  margin-bottom: 0;
  margin-top: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => `${theme.colors.g.darker}`};
`

export const ProfileLocation = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: ${({ theme }) => `${theme.colors.g.darker}`};
  font-size: 1rem;
  margin-bottom: 0;
  margin: 0;
  font-weight: 400;

  svg {
    margin-right: 10px;
    font-size: 1.4rem;
  }
`
export const MetaContent = styled.div`
  background: ${({ theme }) => `${theme.colors.primary.base}`};
  padding: 1rem;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
`
export const MetaItem = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.95rem;
  margin-bottom: 0;
  margin: 0;
  font-weight: 500;
  color: hsl(208, 75%, 97%);

  strong {
    margin-right: 5px;
  }

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`

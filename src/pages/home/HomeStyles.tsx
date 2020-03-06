import styled from 'styled-components'

export const HomeWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => `${colors.g.lighter}`};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeLogoTitle = styled.h1`
  color: #fff;
  font-family: 'Rubik';
  font-size: 5rem;
  font-weight: 500;
  margin: 0;
  font-style: italic;
  background: ${({ theme: { colors } }) =>
    `linear-gradient( 135deg, ${colors.primary.base} 10%, ${colors.primary.darker} 100%);`};
  padding: 0.1rem 1rem;
  margin-bottom: 2rem;
  user-select: none;
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
  height: 2.5rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-family: 'Fira Code', 'Roboto';
  color: ${({ theme: { colors } }) => `${colors.primary.darker}`};
  background-color: #fff;
  border: 0;
  border-radius: 3px;
  text-align: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  transition: box-shadow 0.5s cubic-bezier(0.04, 0.35, 0, 0.97);

  &:focus {
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.048),
      0 6.7px 5.3px rgba(0, 0, 0, 0.069), 0 12.5px 10px rgba(0, 0, 0, 0.085),
      0 22.3px 17.9px rgba(0, 0, 0, 0.101), 0 41.8px 33.4px rgba(0, 0, 0, 0.122),
      0 100px 80px rgba(0, 0, 0, 0.17);
  }
`

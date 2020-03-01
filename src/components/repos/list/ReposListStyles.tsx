import styled from 'styled-components'

export const ReposListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 1.5rem;
  grid-column-gap: 2rem;

  margin: 0;
  padding: 0;
`

export const ReposListHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 1.5rem 0;
`

export const ReposListTitle = styled.h1`
  color: ${({ theme }) => `${theme.colors.g.darker}`};
  font-weight: 500;
  margin: 0;
  margin-right: 1rem;
  &:after {
    content: ' ';
    width: 100%;
    height: 2px;
    background: ${({ theme }) => `${theme.colors.g.dark}`};
    display: block;
    margin-top: 5px;
  }
`

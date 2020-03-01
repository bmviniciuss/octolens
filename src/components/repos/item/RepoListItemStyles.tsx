import styled from 'styled-components'

export const ReposListItem = styled.li`
  list-style: none;
  background: #fff;
  padding: 1rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const RepoName = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 1.15rem;
  margin-bottom: 0;
  font-family: 'Rubik';
  color: ${({ theme }) => `${theme.colors.g.darker}`};
  svg {
    margin-right: 10px;
    font-size: 1.4rem;
  }
  a {
    color: ${({ theme }) => `${theme.colors.g.darker}`};
    text-decoration: none;
    font-family: 'Fira Code';
  }
`
export const RepoDescription = styled.p`
  color: ${({ theme }) => `${theme.colors.g.dark}`};
  font-size: 0.9rem;
  margin: 1.1rem 0;
`
export const RepoMeta = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => `${theme.colors.g.dark}`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-top: 1rem; */
`
export const RepoLanguage = styled.div`
  span.repo-square {
    margin-right: 10px;
  }
`
export const RepoStats = styled.div`
  display: flex;
  span:first-child {
    margin-right: 10px;
  }
`

export const RepoStatsItem = styled.span`
  display: flex;
  flex-direction: row;
  svg {
    margin-right: 5px;
    font-size: 1rem;
  }
`

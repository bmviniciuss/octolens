import orderBy from 'lodash/orderBy'

import { RepoType } from '../types/githubApi'

export function sortRepos(repos: RepoType[]) {
  return orderBy(repos, ['stargazers_count', 'name'], ['desc', 'asc'])
}

import _ from 'lodash'
import React, { useMemo, useState } from 'react'

import { RepoType } from '../../../types/githubApi'
import RepoListItem from '../item/RepoListItem'
import {
  ReposListWrapper,
  ReposListTitle,
  ReposListHeader
} from './ReposListStyles'

interface Props {
  repos: RepoType[]
}

const ReposList: React.FC<Props> = ({ repos }) => {
  const [numberRepos] = useState(10)

  const sortedRepos = useMemo(() => {
    return _.orderBy(repos, ['stargazers_count', 'name'], ['desc', 'asc'])
  }, [repos])

  return (
    <>
      <ReposListHeader>
        <ReposListTitle>Top Repositories</ReposListTitle>
      </ReposListHeader>
      <ReposListWrapper>
        {sortedRepos.slice(0, numberRepos).map(repo => (
          <RepoListItem key={repo.id} repo={repo} />
        ))}
      </ReposListWrapper>
    </>
  )
}

export default ReposList

import React from 'react'
import { GoRepo, GoStar, GoRepoForked } from 'react-icons/go'

import { RepoType } from '../../../types/githubApi'
import {
  ReposListItem,
  RepoName,
  RepoDescription,
  RepoMeta,
  RepoLanguage,
  RepoStats,
  RepoStatsItem
} from './RepoListItemStyles'

interface Props {
  repo: RepoType
}

const RepoListItem: React.FC<Props> = ({ repo }) => {
  return (
    <ReposListItem>
      <RepoName>
        <div>
          <GoRepo />
        </div>
        <div>
          <a href={repo.html_url}>{repo.name}</a>
        </div>
      </RepoName>
      <RepoDescription>{repo.description}</RepoDescription>
      <RepoMeta>
        <RepoLanguage>
          {repo.language && (
            <span>
              <span className="repo-square">■</span>
              {repo.language}
            </span>
          )}
        </RepoLanguage>
        <RepoStats>
          <RepoStatsItem>
            <GoStar /> {repo.stargazers_count}
          </RepoStatsItem>
          <RepoStatsItem>
            <GoRepoForked /> {repo.forks_count}
          </RepoStatsItem>
        </RepoStats>
      </RepoMeta>
    </ReposListItem>
  )
}

export default React.memo(RepoListItem)

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
    <ReposListItem data-testid="repo-item">
      <RepoName>
        <div>
          <GoRepo />
        </div>
        <div>
          <a href={repo.html_url} data-testid="repo-name">
            {repo.name}
          </a>
        </div>
      </RepoName>
      <RepoDescription data-testid="repo-description">
        {repo.description}
      </RepoDescription>
      <RepoMeta>
        <RepoLanguage>
          {repo.language && (
            <span>
              <span className="repo-square">■</span>
              <span data-testid="repo-language">{repo.language}</span>
            </span>
          )}
        </RepoLanguage>
        <RepoStats>
          <RepoStatsItem>
            <GoStar />{' '}
            <span data-testid="repo-stars">{repo.stargazers_count}</span>
          </RepoStatsItem>
          <RepoStatsItem>
            <GoRepoForked />{' '}
            <span data-testid="repo-forks">{repo.forks_count}</span>
          </RepoStatsItem>
        </RepoStats>
      </RepoMeta>
    </ReposListItem>
  )
}

export default React.memo(RepoListItem)

import React from 'react'
import { AiOutlineUsergroupAdd, AiOutlineUser } from 'react-icons/ai'
import { GoLocation, GoRepo } from 'react-icons/go'

import { ProfileType } from '../../../types/githubApi'
import {
  ProfileHeaderWrapper,
  ProfileAvatar,
  ProfileName,
  ProfileBio,
  ProfileLogin,
  ProfileContent,
  ProfileLocation,
  MetaContent,
  MetaItem,
  ProfileImage
} from './ProfileHeaderStyles'

interface Props {
  profile: ProfileType
}

const ProfileHeader: React.FC<Props> = ({ profile }) => {
  return (
    <ProfileHeaderWrapper data-testid="profile-header">
      <ProfileAvatar>
        <ProfileImage
          src={profile.avatar_url}
          alt={`${profile?.name} profile`}
        />
      </ProfileAvatar>
      <ProfileContent>
        <ProfileName data-testid="profile-name">{profile.name}</ProfileName>
        <ProfileLogin data-testid="profile-login">
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            {`@${profile.login}`}
          </a>
        </ProfileLogin>
        <ProfileBio data-testid="profile-bio">{profile.bio}</ProfileBio>
        {profile.location && (
          <ProfileLocation
            style={{ marginTop: '1.5rem' }}
            data-testid="profile-location"
          >
            <GoLocation /> {profile.location}
          </ProfileLocation>
        )}
      </ProfileContent>
      <MetaContent>
        <MetaItem data-testid="profile-repositories">
          <GoRepo />{' '}
          <span>
            <strong>{profile.public_repos}</strong>
            {` Repositories`}
          </span>
        </MetaItem>
        <MetaItem style={{ marginTop: '1rem' }} data-testid="profile-followers">
          <AiOutlineUsergroupAdd />{' '}
          <span>
            <strong>{profile.followers}</strong> {`Followers`}
          </span>
        </MetaItem>
        <MetaItem style={{ marginTop: '1rem' }} data-testid="profile-following">
          <AiOutlineUser />{' '}
          <span>
            <strong>{profile.following}</strong> {`Following`}
          </span>
        </MetaItem>
      </MetaContent>
    </ProfileHeaderWrapper>
  )
}

export default ProfileHeader

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
        <ProfileBio>{profile.bio}</ProfileBio>
        {profile.location && (
          <ProfileLocation style={{ marginTop: '1.5rem' }}>
            <GoLocation /> {profile.location}
          </ProfileLocation>
        )}
      </ProfileContent>
      <MetaContent>
        <MetaItem>
          <GoRepo /> <strong>{profile.public_repos}</strong>
          {` Repositories`}
        </MetaItem>
        <MetaItem style={{ marginTop: '1rem' }}>
          <AiOutlineUsergroupAdd /> <strong>{profile.followers}</strong>{' '}
          {`Followers`}
        </MetaItem>
        <MetaItem style={{ marginTop: '1rem' }}>
          <AiOutlineUser /> <strong>{profile.following}</strong> {`Following`}
        </MetaItem>
      </MetaContent>
    </ProfileHeaderWrapper>
  )
}

export default ProfileHeader

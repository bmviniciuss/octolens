import React from 'react'
import { GoLocation } from 'react-icons/go'

import { ProfileType } from '../../../types/githubApi'
import {
  ProfileHeaderWrapper,
  ProfileAvatar,
  ProfileName,
  ProfileBio,
  MetaWrapper,
  MetaCard,
  MetaCardTitle,
  MetaCardContent,
  ProfileLogin,
  ProfileContent,
  ProfileLocation
} from './ProfileHeaderStyles'

interface Props {
  profile: ProfileType
}

const ProfileHeader: React.FC<Props> = ({ profile }) => {
  return (
    <ProfileHeaderWrapper data-testid="profile-header">
      <ProfileAvatar
        src={profile?.avatar_url}
        alt={`${profile?.name} profile`}
      />
      <ProfileContent>
        <ProfileName data-testid="profile-name">{profile.name}</ProfileName>
        <ProfileLogin data-testid="profile-login">
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            {`@${profile.login}`}
          </a>
        </ProfileLogin>
        <ProfileBio>{profile.bio}</ProfileBio>
        {profile.location && (
          <ProfileLocation>
            <GoLocation /> {profile.location}
          </ProfileLocation>
        )}
      </ProfileContent>
      {/* <MetaWrapper>
        <MetaCard>
          <MetaCardTitle>Repos</MetaCardTitle>
          <MetaCardContent>{profile.public_repos}</MetaCardContent>
        </MetaCard>

        <MetaCard>
          <MetaCardTitle>Followers</MetaCardTitle>
          <MetaCardContent>{profile.followers}</MetaCardContent>
        </MetaCard>

        <MetaCard>
          <MetaCardTitle>Following</MetaCardTitle>
          <MetaCardContent>{profile.following}</MetaCardContent>
        </MetaCard>
      </MetaWrapper> */}
    </ProfileHeaderWrapper>
  )
}

export default ProfileHeader

import React from 'react'

import { ProfileType } from '../../../types/githubApi'
import {
  ProfileHeaderWrapper,
  ProfileAvatar,
  ProfileName,
  ProfileBio,
  MetaWrapper,
  MetaCard,
  MetaCardTitle,
  MetaCardContent
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
      <ProfileName data-testid="profile-name">{profile.name}</ProfileName>
      <ProfileBio>{profile.bio}</ProfileBio>
      <MetaWrapper>
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
      </MetaWrapper>
    </ProfileHeaderWrapper>
  )
}

export default ProfileHeader

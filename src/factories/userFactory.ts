import faker from 'faker'

import { ProfileType } from '../types/githubApi'

export function userFactory(overrrides?: Partial<ProfileType>): ProfileType {
  const login = faker.internet.userName()
  const id = faker.random.number()
  const node_id = faker.random.uuid()

  return {
    login,
    id,
    node_id,
    avatar_url: faker.image.avatar(),
    gravatar_id: '',
    url: `https://api.github.com/users/${login}`,
    html_url: `https://github.com/${login}`,
    followers_url: `https://api.github.com/users/${login}/followers`,
    following_url: `https://api.github.com/users/${login}/following{/other_user}`,
    gists_url: `https://api.github.com/users/${login}/gists{/gist_id}`,
    starred_url: `https://api.github.com/users/${login}/starred{/owner}{/repo}`,
    subscriptions_url: `https://api.github.com/users/${login}/subscriptions`,
    organizations_url: `https://api.github.com/users/${login}/orgs`,
    repos_url: `https://api.github.com/users/${login}/repos`,
    events_url: `https://api.github.com/users/${login}/events{/privacy}`,
    received_events_url: `https://api.github.com/users/${login}/received_events`,
    type: 'User',
    site_admin: faker.random.boolean(),
    name: faker.name.findName(),
    company: faker.random.boolean() ? faker.company.companyName() : null,
    blog: faker.internet.url(),
    location: faker.address.city(),
    email: faker.random.boolean() ? faker.internet.email() : null,
    hireable: faker.random.boolean(),
    bio: faker.random.words(),
    public_repos: faker.random.number(),
    public_gists: faker.random.number(),
    followers: faker.random.number(),
    following: faker.random.number(),
    created_at: faker.date.past(faker.random.number()).toISOString(),
    updated_at: faker.date.past(faker.random.number()).toISOString(),
    ...overrrides
  }
}

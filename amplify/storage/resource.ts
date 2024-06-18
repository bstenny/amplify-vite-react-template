import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifyTeamDrive',
  access: (allow) => ({
    'forms/*': [
      allow.authenticated.to(['read', 'write'])
    ]
  })
});
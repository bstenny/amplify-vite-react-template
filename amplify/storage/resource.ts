// amplify/storage/resource.ts
import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifyTeamDrive',
  access: (allow) => ({
    'forms/{entity_id}/*': [
      allow.authenticated.to(['read', 'write'])
    ]
  })
});
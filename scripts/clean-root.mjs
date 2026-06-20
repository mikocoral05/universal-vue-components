import { rmSync } from 'node:fs'
for (const path of ['coverage','playwright-report','test-results','artifacts','.nuxt','.output']) rmSync(path,{recursive:true,force:true})

import * as dotenv from 'dotenv'
import { readdirSync } from 'fs'
import { join } from 'path'

dotenv.config({ path: '.env.local' })

async function seedAll() {
  console.log('🌱 Starting database seeding...')
  
  const seedsDir = join(__dirname, '../src/lib/supabase/seeds')
  const seedFiles = readdirSync(seedsDir).filter(f => f.endsWith('.seed.ts'))
  
  for (const file of seedFiles) {
    const seedModule = await import(join(seedsDir, file))
    const seedFunctionName = Object.keys(seedModule).find(key => key.startsWith('seed'))
    
    if (seedFunctionName && typeof seedModule[seedFunctionName] === 'function') {
      console.log(`Running ${seedFunctionName}...`)
      await seedModule[seedFunctionName]()
    }
  }
  
  console.log('✅ Seeding complete!')
}

seedAll().catch(console.error)

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export const usersSeeds = []

export async function seedUsers() {
  console.log('Seeding users...')
  
  // Clear existing data (optional)
  // await supabase.from('users').delete().neq('id', 0)
  
  const { data, error } = await supabase
    .from('users')
    .insert(usersSeeds)
    .select()
    
  if (error) {
    console.error('Error seeding users:', error)
  } else {
    console.log('✅ Seeded 0 users')
  }
  
  return { data, error }
}

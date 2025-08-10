import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export const signuppageSeeds = []

export async function seedSignuppage() {
  console.log('Seeding signuppage...')
  
  // Clear existing data (optional)
  // await supabase.from('signuppage').delete().neq('id', 0)
  
  const { data, error } = await supabase
    .from('signuppage')
    .insert(signuppageSeeds)
    .select()
    
  if (error) {
    console.error('Error seeding signuppage:', error)
  } else {
    console.log('✅ Seeded 0 signuppage')
  }
  
  return { data, error }
}

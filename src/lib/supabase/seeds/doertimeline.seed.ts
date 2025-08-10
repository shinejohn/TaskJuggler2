import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export const doertimelineSeeds = []

export async function seedDoertimeline() {
  console.log('Seeding doertimeline...')
  
  // Clear existing data (optional)
  // await supabase.from('doertimeline').delete().neq('id', 0)
  
  const { data, error } = await supabase
    .from('doertimeline')
    .insert(doertimelineSeeds)
    .select()
    
  if (error) {
    console.error('Error seeding doertimeline:', error)
  } else {
    console.log('✅ Seeded 0 doertimeline')
  }
  
  return { data, error }
}

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export const submitreviewformSeeds = [
  {
    "quality": 0,
    "communication": 0,
    "timeliness": 0,
    "value": 0
  }
]

export async function seedSubmitreviewform() {
  console.log('Seeding submitreviewform...')
  
  // Clear existing data (optional)
  // await supabase.from('submitreviewform').delete().neq('id', 0)
  
  const { data, error } = await supabase
    .from('submitreviewform')
    .insert(submitreviewformSeeds)
    .select()
    
  if (error) {
    console.error('Error seeding submitreviewform:', error)
  } else {
    console.log('✅ Seeded 1 submitreviewform')
  }
  
  return { data, error }
}

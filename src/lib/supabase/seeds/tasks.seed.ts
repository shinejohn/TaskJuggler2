import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export const tasksSeeds = [
  {}
]

export async function seedTasks() {
  console.log('Seeding tasks...')
  
  // Clear existing data (optional)
  // await supabase.from('tasks').delete().neq('id', 0)
  
  const { data, error } = await supabase
    .from('tasks')
    .insert(tasksSeeds)
    .select()
    
  if (error) {
    console.error('Error seeding tasks:', error)
  } else {
    console.log('✅ Seeded 1 tasks')
  }
  
  return { data, error }
}

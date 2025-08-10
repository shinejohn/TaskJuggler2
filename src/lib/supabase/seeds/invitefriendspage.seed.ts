import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export const invitefriendspageSeeds = [
  {
    "name": "Sarah Johnson",
    "email": "sarah.j@example.com",
    "phone": "555-123-4567"
  },
  {
    "name": "Michael Chen",
    "email": "mchen@example.com",
    "phone": "555-987-6543"
  },
  {
    "name": "Taylor Williams",
    "email": "taylor.w@example.com",
    "phone": "555-567-8901"
  },
  {
    "name": "Jordan Smith",
    "email": "jsmith@example.com",
    "phone": "555-234-5678"
  },
  {
    "name": "Alex Rodriguez",
    "email": "arod@example.com",
    "phone": "555-876-5432"
  },
  {
    "name": "Jamie Lee",
    "email": "jamie.lee@example.com",
    "phone": "555-345-6789"
  }
]

export async function seedInvitefriendspage() {
  console.log('Seeding invitefriendspage...')
  
  // Clear existing data (optional)
  // await supabase.from('invitefriendspage').delete().neq('id', 0)
  
  const { data, error } = await supabase
    .from('invitefriendspage')
    .insert(invitefriendspageSeeds)
    .select()
    
  if (error) {
    console.error('Error seeding invitefriendspage:', error)
  } else {
    console.log('✅ Seeded 1 invitefriendspage')
  }
  
  return { data, error }
}

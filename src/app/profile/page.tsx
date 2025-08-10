import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { Profile } from '@/components/Profile'
import { getProfilesByUser } from '@/lib/supabase/queries/profile.queries'
import { createServerClient } from '@/lib/supabase/server'

export default async function ProfilePage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  const { data, error } = await getProfilesByUser(user.id)
  
  if (error) {
    console.error('Error loading profile:', error)
    return <div>Error loading profile</div>
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Profile 
        initialData={data || []}
        userId={user.id}
      />
    </Suspense>
  )
}

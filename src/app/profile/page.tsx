import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { Profile } from '@/components/Profile'
import { createServerClient } from '@/lib/supabase/server'

export default async function ProfilePage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Profile />
    </Suspense>
  )
}

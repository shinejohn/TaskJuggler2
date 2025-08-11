import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { Dashboard } from '@/components/Dashboard'
import { createServerClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard userId={user.id} />
    </Suspense>
  )
}

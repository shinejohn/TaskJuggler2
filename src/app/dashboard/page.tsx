import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { Dashboard } from '@/components/Dashboard'
import { getDashboardsByUser } from '@/lib/supabase/queries/dashboard.queries'
import { createServerClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  const { data, error } = await getDashboardsByUser(user.id)
  
  if (error) {
    console.error('Error loading dashboard:', error)
    return <div>Error loading dashboard</div>
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard 
        initialData={data || []}
        userId={user.id}
      />
    </Suspense>
  )
}

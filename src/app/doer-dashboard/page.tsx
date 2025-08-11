import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { TaskDoerDashboard } from '@/components/Marketplace/TaskDoerDashboard'
import { ClientAppLayout } from '@/components/layout/ClientAppLayout'
import { createServerClient } from '@/lib/supabase/server'

export default async function DoerDashboardPage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  return (
    <ClientAppLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <TaskDoerDashboard />
      </Suspense>
    </ClientAppLayout>
  )
}
import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { TaskReport } from '@/components/TaskReport'
import { ClientAppLayout } from '@/components/layout/ClientAppLayout'
import { createServerClient } from '@/lib/supabase/server'

export default async function TasksPage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  return (
    <ClientAppLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <TaskReport userId={user.id} />
      </Suspense>
    </ClientAppLayout>
  )
}
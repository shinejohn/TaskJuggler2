import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { TaskCreator } from '@/components/TaskCreator'
import { getTaskssByUser } from '@/lib/supabase/queries/tasks.queries'
import { createServerClient } from '@/lib/supabase/server'

export default async function TasksPage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  const { data, error } = await getTaskssByUser(user.id)
  
  if (error) {
    console.error('Error loading tasks:', error)
    return <div>Error loading tasks</div>
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TaskCreator 
        initialData={data || []}
        userId={user.id}
      />
    </Suspense>
  )
}

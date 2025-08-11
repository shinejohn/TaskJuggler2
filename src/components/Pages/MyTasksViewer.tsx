'use client'

import { MyTasksViewerPage } from './MyTasksViewerPage'
import { useTasks } from '@/hooks/queries'
import { useAuth } from '@/components/Auth/AuthProvider'

export function MyTasksViewer() {
  const { user } = useAuth()
  const { data, isLoading, error } = useTasks()
  
  if (isLoading) return <div>Loading tasks...</div>
  if (error) return <div>Error loading tasks: {error.message}</div>
  
  // Transform Supabase data to match component interface
  const transformedTasks = (data || []).map(task => ({
    id: task.id.toString(),
    title: task.title,
    description: task.description || '',
    status: task.status as any,
    dueDate: task.expected_completion || '',
    // TODO: Add proper user/vendor relationships
    doerName: 'User',
    clientName: 'Client',
    isVendorTask: false
  }))
  
  return (
    <MyTasksViewerPage 
      tasks={transformedTasks}
      isVendor={false}
      onCreateTaskClick={() => console.log('Create task')}
      onTaskClick={(id) => console.log('View task', id)}
    />
  )
}
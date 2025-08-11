'use client'

import { Dashboard as OriginalDashboard } from './Dashboard.original'
import { useTasks, useCreateTask, useUpdateTask, useDeleteTask } from '@/hooks/queries'

export function Dashboard({ userId }: { userId?: string }) {
  const { data, isLoading, error } = useTasks()
  const createMutation = useCreateTask()
  const updateMutation = useUpdateTask()
  const deleteMutation = useDeleteTask()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  // Transform data to match Dashboard's expected Task type
  const transformedData = (data || []).map(task => ({
    id: task.id,
    title: task.title,
    status: task.status || 'pending',
    due_date: task.expected_completion || null,
    assignee_id: task.owner_id || null,
    user_id: task.requestor_id,
    created_at: task.created_at || new Date().toISOString()
  }))

  return (
    <OriginalDashboard
      data={transformedData}
      onAdd={createMutation.mutate}
      onUpdate={updateMutation.mutate}
      onDelete={deleteMutation.mutate}
      isCreating={createMutation.isPending}
      isUpdating={updateMutation.isPending}
      isDeleting={deleteMutation.isPending}
    />
  )
}

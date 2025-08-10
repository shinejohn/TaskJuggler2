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

  return (
    <OriginalDashboard
      data={data || []}
      onAdd={createMutation.mutate}
      onUpdate={updateMutation.mutate}
      onDelete={deleteMutation.mutate}
      isCreating={createMutation.isPending}
      isUpdating={updateMutation.isPending}
      isDeleting={deleteMutation.isPending}
    />
  )
}

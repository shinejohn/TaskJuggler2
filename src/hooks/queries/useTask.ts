'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { taskQueries, taskMutations } from '@/lib/supabase/queries/tasks.queries'
import { supabase } from '@/lib/supabase/client'
import type { Database } from '@/types/database.types'

type Task = Database['public']['Tables']['tasks']['Row']
type TaskInsert = Database['public']['Tables']['tasks']['Insert']
type TaskUpdate = Database['public']['Tables']['tasks']['Update']

// Query hooks
export function useTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: taskQueries.all,
  })
}

export function useTask(id: string) {
  return useQuery({
    queryKey: ['tasks', id],
    queryFn: () => taskQueries.byId(id),
    enabled: !!id,
  })
}

export function useTasksByUser(userId: string) {
  return useQuery({
    queryKey: ['tasks', 'user', userId],
    queryFn: () => taskQueries.byUser(userId),
    enabled: !!userId,
  })
}

// Mutation hooks
export function useCreateTask() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: taskMutations.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}

export function useUpdateTask() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: TaskUpdate }) =>
      taskMutations.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      queryClient.invalidateQueries({ queryKey: ['tasks', id] })
    },
  })
}

export function useDeleteTask() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: taskMutations.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}

// Real-time subscription hook
export function useTasksRealtime() {
  const queryClient = useQueryClient()
  
  useEffect(() => {
    const channel = supabase
      .channel('tasks_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'tasks' },
        (payload) => {
          queryClient.invalidateQueries({ queryKey: ['tasks'] })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [queryClient])
}

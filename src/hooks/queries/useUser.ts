'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { userQueries, userMutations } from '@/lib/supabase/queries/users.queries'
import { supabase } from '@/lib/supabase/client'
import type { Database } from '@/types/database.types'

type User = Database['public']['Tables']['users']['Row']
type UserInsert = Database['public']['Tables']['users']['Insert']
type UserUpdate = Database['public']['Tables']['users']['Update']

// Query hooks
export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: userQueries.all,
  })
}

export function useUser(id: string) {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => userQueries.byId(id),
    enabled: !!id,
  })
}

export function useUsersByUser(userId: string) {
  return useQuery({
    queryKey: ['users', 'user', userId],
    queryFn: () => userQueries.byUser(userId),
    enabled: !!userId,
  })
}

// Mutation hooks
export function useCreateUser() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: userMutations.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}

export function useUpdateUser() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UserUpdate }) =>
      userMutations.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      queryClient.invalidateQueries({ queryKey: ['users', id] })
    },
  })
}

export function useDeleteUser() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: userMutations.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}

// Real-time subscription hook
export function useUsersRealtime() {
  const queryClient = useQueryClient()
  
  useEffect(() => {
    const channel = supabase
      .channel('users_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'users' },
        (payload) => {
          queryClient.invalidateQueries({ queryKey: ['users'] })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [queryClient])
}

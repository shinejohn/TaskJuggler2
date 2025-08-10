'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { messageQueries, messageMutations } from '@/lib/supabase/queries/messages.queries'
import { supabase } from '@/lib/supabase/client'
import type { Database } from '@/types/database.types'

type Message = Database['public']['Tables']['messages']['Row']
type MessageInsert = Database['public']['Tables']['messages']['Insert']
type MessageUpdate = Database['public']['Tables']['messages']['Update']

// Query hooks
export function useMessages() {
  return useQuery({
    queryKey: ['messages'],
    queryFn: messageQueries.all,
  })
}

export function useMessage(id: string) {
  return useQuery({
    queryKey: ['messages', id],
    queryFn: () => messageQueries.byId(id),
    enabled: !!id,
  })
}

export function useMessagesByUser(userId: string) {
  return useQuery({
    queryKey: ['messages', 'user', userId],
    queryFn: () => messageQueries.byUser(userId),
    enabled: !!userId,
  })
}

// Mutation hooks
export function useCreateMessage() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: messageMutations.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] })
    },
  })
}

export function useUpdateMessage() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: MessageUpdate }) =>
      messageMutations.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['messages'] })
      queryClient.invalidateQueries({ queryKey: ['messages', id] })
    },
  })
}

export function useDeleteMessage() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: messageMutations.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] })
    },
  })
}

// Real-time subscription hook
export function useMessagesRealtime() {
  const queryClient = useQueryClient()
  
  useEffect(() => {
    const channel = supabase
      .channel('messages_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'messages' },
        (payload) => {
          queryClient.invalidateQueries({ queryKey: ['messages'] })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [queryClient])
}

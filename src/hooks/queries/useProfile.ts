'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { profileQueries, profileMutations } from '@/lib/supabase/queries/profiles.queries'
import { supabase } from '@/lib/supabase/client'
import type { Database } from '@/types/database.types'

type Profile = Database['public']['Tables']['profiles']['Row']
type ProfileInsert = Database['public']['Tables']['profiles']['Insert']
type ProfileUpdate = Database['public']['Tables']['profiles']['Update']

// Query hooks
export function useProfiles() {
  return useQuery({
    queryKey: ['profiles'],
    queryFn: profileQueries.all,
  })
}

export function useProfile(id: string) {
  return useQuery({
    queryKey: ['profiles', id],
    queryFn: () => profileQueries.byId(id),
    enabled: !!id,
  })
}

export function useProfilesByUser(userId: string) {
  return useQuery({
    queryKey: ['profiles', 'user', userId],
    queryFn: () => profileQueries.byUser(userId),
    enabled: !!userId,
  })
}

// Mutation hooks
export function useCreateProfile() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: profileMutations.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profiles'] })
    },
  })
}

export function useUpdateProfile() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ProfileUpdate }) =>
      profileMutations.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['profiles'] })
      queryClient.invalidateQueries({ queryKey: ['profiles', id] })
    },
  })
}

export function useDeleteProfile() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: profileMutations.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profiles'] })
    },
  })
}

// Real-time subscription hook
export function useProfilesRealtime() {
  const queryClient = useQueryClient()
  
  useEffect(() => {
    const channel = supabase
      .channel('profiles_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'profiles' },
        (payload) => {
          queryClient.invalidateQueries({ queryKey: ['profiles'] })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [queryClient])
}

'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { marketplace_itemQueries, marketplace_itemMutations } from '@/lib/supabase/queries/marketplace_items.queries'
import { supabase } from '@/lib/supabase/client'
import type { Database } from '@/types/database.types'

type Marketplace_item = Database['public']['Tables']['marketplace_items']['Row']
type Marketplace_itemInsert = Database['public']['Tables']['marketplace_items']['Insert']
type Marketplace_itemUpdate = Database['public']['Tables']['marketplace_items']['Update']

// Query hooks
export function useMarketplace_items() {
  return useQuery({
    queryKey: ['marketplace_items'],
    queryFn: marketplace_itemQueries.all,
  })
}

export function useMarketplace_item(id: string) {
  return useQuery({
    queryKey: ['marketplace_items', id],
    queryFn: () => marketplace_itemQueries.byId(id),
    enabled: !!id,
  })
}

export function useMarketplace_itemsByUser(userId: string) {
  return useQuery({
    queryKey: ['marketplace_items', 'user', userId],
    queryFn: () => marketplace_itemQueries.byUser(userId),
    enabled: !!userId,
  })
}

// Mutation hooks
export function useCreateMarketplace_item() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: marketplace_itemMutations.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['marketplace_items'] })
    },
  })
}

export function useUpdateMarketplace_item() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Marketplace_itemUpdate }) =>
      marketplace_itemMutations.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['marketplace_items'] })
      queryClient.invalidateQueries({ queryKey: ['marketplace_items', id] })
    },
  })
}

export function useDeleteMarketplace_item() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: marketplace_itemMutations.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['marketplace_items'] })
    },
  })
}

// Real-time subscription hook
export function useMarketplace_itemsRealtime() {
  const queryClient = useQueryClient()
  
  useEffect(() => {
    const channel = supabase
      .channel('marketplace_items_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'marketplace_items' },
        (payload) => {
          queryClient.invalidateQueries({ queryKey: ['marketplace_items'] })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [queryClient])
}

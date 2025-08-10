'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { invoiceQueries, invoiceMutations } from '@/lib/supabase/queries/invoices.queries'
import { supabase } from '@/lib/supabase/client'
import type { Database } from '@/types/database.types'

type Invoice = Database['public']['Tables']['invoices']['Row']
type InvoiceInsert = Database['public']['Tables']['invoices']['Insert']
type InvoiceUpdate = Database['public']['Tables']['invoices']['Update']

// Query hooks
export function useInvoices() {
  return useQuery({
    queryKey: ['invoices'],
    queryFn: invoiceQueries.all,
  })
}

export function useInvoice(id: string) {
  return useQuery({
    queryKey: ['invoices', id],
    queryFn: () => invoiceQueries.byId(id),
    enabled: !!id,
  })
}

export function useInvoicesByUser(userId: string) {
  return useQuery({
    queryKey: ['invoices', 'user', userId],
    queryFn: () => invoiceQueries.byUser(userId),
    enabled: !!userId,
  })
}

// Mutation hooks
export function useCreateInvoice() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: invoiceMutations.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices'] })
    },
  })
}

export function useUpdateInvoice() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: InvoiceUpdate }) =>
      invoiceMutations.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['invoices'] })
      queryClient.invalidateQueries({ queryKey: ['invoices', id] })
    },
  })
}

export function useDeleteInvoice() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: invoiceMutations.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices'] })
    },
  })
}

// Real-time subscription hook
export function useInvoicesRealtime() {
  const queryClient = useQueryClient()
  
  useEffect(() => {
    const channel = supabase
      .channel('invoices_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'invoices' },
        (payload) => {
          queryClient.invalidateQueries({ queryKey: ['invoices'] })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [queryClient])
}

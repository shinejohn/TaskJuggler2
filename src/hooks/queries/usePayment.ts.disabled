'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { paymentQueries, paymentMutations } from '@/lib/supabase/queries/payments.queries'
import { supabase } from '@/lib/supabase/client'
import type { Database } from '@/types/database.types'

type Payment = Database['public']['Tables']['payments']['Row']
type PaymentInsert = Database['public']['Tables']['payments']['Insert']
type PaymentUpdate = Database['public']['Tables']['payments']['Update']

// Query hooks
export function usePayments() {
  return useQuery({
    queryKey: ['payments'],
    queryFn: paymentQueries.all,
  })
}

export function usePayment(id: string) {
  return useQuery({
    queryKey: ['payments', id],
    queryFn: () => paymentQueries.byId(id),
    enabled: !!id,
  })
}

export function usePaymentsByUser(userId: string) {
  return useQuery({
    queryKey: ['payments', 'user', userId],
    queryFn: () => paymentQueries.byUser(userId),
    enabled: !!userId,
  })
}

// Mutation hooks
export function useCreatePayment() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: paymentMutations.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] })
    },
  })
}

export function useUpdatePayment() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: PaymentUpdate }) =>
      paymentMutations.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['payments'] })
      queryClient.invalidateQueries({ queryKey: ['payments', id] })
    },
  })
}

export function useDeletePayment() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: paymentMutations.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] })
    },
  })
}

// Real-time subscription hook
export function usePaymentsRealtime() {
  const queryClient = useQueryClient()
  
  useEffect(() => {
    const channel = supabase
      .channel('payments_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'payments' },
        (payload) => {
          queryClient.invalidateQueries({ queryKey: ['payments'] })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [queryClient])
}

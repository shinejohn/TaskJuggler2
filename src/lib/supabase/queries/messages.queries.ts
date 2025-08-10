import { createServerClient } from '@/lib/supabase/server'
import { supabase } from '@/lib/supabase/client'
import type { Database } from '@/types/database.types'

type Message = Database['public']['Tables']['messages']['Row']
type MessageInsert = Database['public']['Tables']['messages']['Insert']
type MessageUpdate = Database['public']['Tables']['messages']['Update']

// Server-side queries (for SSR)
export async function getMessages() {
  const supabase = await createServerClient()
  return supabase.from('messages').select('*').order('created_at', { ascending: false })
}

export async function getMessageById(id: string) {
  const supabase = await createServerClient()
  return supabase.from('messages').select('*').eq('id', id).single()
}

export async function getMessagesByUser(userId: string) {
  const supabase = await createServerClient()
  return supabase.from('messages').select('*').eq('user_id', userId)
}

// Client-side queries (for React Query hooks)
export const messageQueries = {
  all: async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw error
    return data
  },
  
  byId: async (id: string) => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('id', id)
      .single()
    if (error) throw error
    return data
  },
  
  byUser: async (userId: string) => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('user_id', userId)
    if (error) throw error
    return data
  }
}

// Mutations
export const messageMutations = {
  create: async (data: MessageInsert) => {
    const { data: result, error } = await supabase
      .from('messages')
      .insert(data)
      .select()
      .single()
    if (error) throw error
    return result
  },
  
  update: async (id: string, data: MessageUpdate) => {
    const { data: result, error } = await supabase
      .from('messages')
      .update(data)
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    return result
  },
  
  delete: async (id: string) => {
    const { error } = await supabase
      .from('messages')
      .delete()
      .eq('id', id)
    if (error) throw error
  }
}

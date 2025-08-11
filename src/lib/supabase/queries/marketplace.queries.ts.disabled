import { supabase } from '@/lib/supabase/client'

export const marketplaceQueries = {
  all: async () => {
    const { data, error } = await supabase
      .from('marketplace_items')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },
  
  byId: async (id: string) => {
    const { data, error } = await supabase
      .from('marketplace_items')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  }
}
import { supabase } from '@/lib/supabase/client'

export const dashboardQueries = {
  getStats: async (userId: string) => {
    const { data: tasks } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', userId)
    
    return {
      totalTasks: tasks?.length || 0,
      completedTasks: tasks?.filter(t => t.status === 'completed').length || 0,
      pendingTasks: tasks?.filter(t => t.status === 'pending').length || 0,
      inProgressTasks: tasks?.filter(t => t.status === 'in-progress').length || 0,
    }
  }
}
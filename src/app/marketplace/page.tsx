import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { TaskMarketplace } from '@/components/TaskMarketplace'
import { ClientAppLayout } from '@/components/layout/ClientAppLayout'
import { createServerClient } from '@/lib/supabase/server'

export default async function MarketplacePage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  return (
    <ClientAppLayout showSidebar={false}>
      <Suspense fallback={<div>Loading...</div>}>
        <TaskMarketplace />
      </Suspense>
    </ClientAppLayout>
  )
}
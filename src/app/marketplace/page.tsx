import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { TaskMarketplace } from '@/components/TaskMarketplace'
import { getMarketplacesByUser } from '@/lib/supabase/queries/marketplace.queries'
import { createServerClient } from '@/lib/supabase/server'

export default async function MarketplacePage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  const { data, error } = await getMarketplacesByUser(user.id)
  
  if (error) {
    console.error('Error loading marketplace:', error)
    return <div>Error loading marketplace</div>
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TaskMarketplace 
        initialData={data || []}
        userId={user.id}
      />
    </Suspense>
  )
}

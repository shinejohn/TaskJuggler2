import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { Messaging } from '@/components/Messaging'
import { getMessagessByUser } from '@/lib/supabase/queries/messages.queries'
import { createServerClient } from '@/lib/supabase/server'

export default async function MessagesPage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  const { data, error } = await getMessagessByUser(user.id)
  
  if (error) {
    console.error('Error loading messages:', error)
    return <div>Error loading messages</div>
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Messaging 
        initialData={data || []}
        userId={user.id}
      />
    </Suspense>
  )
}

import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { Invoice } from '@/components/Invoice'
import { getInvoicessByUser } from '@/lib/supabase/queries/invoices.queries'
import { createServerClient } from '@/lib/supabase/server'

export default async function InvoicesPage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  const { data, error } = await getInvoicessByUser(user.id)
  
  if (error) {
    console.error('Error loading invoices:', error)
    return <div>Error loading invoices</div>
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Invoice 
        initialData={data || []}
        userId={user.id}
      />
    </Suspense>
  )
}

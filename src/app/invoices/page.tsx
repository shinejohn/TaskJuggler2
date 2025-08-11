import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { Invoice } from '@/components/Invoice'
import { ClientAppLayout } from '@/components/layout/ClientAppLayout'
import { getInvoicesByUser } from '@/lib/supabase/queries/invoices.queries'
import { createServerClient } from '@/lib/supabase/server'

export default async function InvoicesPage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  const { data, error } = await getInvoicesByUser(user.id)
  
  if (error) {
    console.error('Error loading invoices:', error)
    return <div>Error loading invoices</div>
  }
  
  // Transform data to match InvoiceList props
  const invoices = (data || []).map(inv => ({
    id: inv.id,
    invoiceNumber: inv.invoice_number,
    issueDate: inv.issue_date || '',
    dueDate: inv.due_date || '',
    clientName: inv.client_name || '',
    vendorName: inv.vendor_name || '',
    subtotal: inv.subtotal || 0,
    serviceFee: inv.service_fee || 0,
    total: inv.total || 0,
    status: (inv.status || 'pending') as any,
    taskTitle: inv.task_title || ''
  }))

  return (
    <ClientAppLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Invoice 
          invoices={invoices}
          userType="client"
          onViewInvoice={(id) => console.log('View invoice', id)}
        />
      </Suspense>
    </ClientAppLayout>
  )
}
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export const invoicesSeeds = []

export async function seedInvoices() {
  console.log('Seeding invoices...')
  
  // Clear existing data (optional)
  // await supabase.from('invoices').delete().neq('id', 0)
  
  const { data, error } = await supabase
    .from('invoices')
    .insert(invoicesSeeds)
    .select()
    
  if (error) {
    console.error('Error seeding invoices:', error)
  } else {
    console.log('✅ Seeded 0 invoices')
  }
  
  return { data, error }
}

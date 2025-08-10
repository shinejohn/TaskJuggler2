import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export const paymentsSeeds = [
  {
    "number": "",
    "name": "",
    "expiry": "",
    "cvc": ""
  },
  {
    "accountName": "",
    "accountNumber": "",
    "routingNumber": "",
    "accountType": "checking"
  },
  {
    "line1": "",
    "line2": "",
    "city": "",
    "state": "",
    "postalCode": "",
    "country": "US"
  }
]

export async function seedPayments() {
  console.log('Seeding payments...')
  
  // Clear existing data (optional)
  // await supabase.from('payments').delete().neq('id', 0)
  
  const { data, error } = await supabase
    .from('payments')
    .insert(paymentsSeeds)
    .select()
    
  if (error) {
    console.error('Error seeding payments:', error)
  } else {
    console.log('✅ Seeded 3 payments')
  }
  
  return { data, error }
}

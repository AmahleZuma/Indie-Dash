import { createClient } from "@/utils/supabase/server";

export default async function RevenuesPage() {
  const supabase = await createClient()
  const { data: revenue, error } = await supabase
    .from('revenue')
    .select('*')
  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      <h1>Revenues</h1>
      <pre>{JSON.stringify(revenue, null, 2)}</pre>
    </div>
  )
}
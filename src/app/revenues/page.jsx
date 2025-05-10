import { createClient } from "@/utils/supabase/server";

export default async function RevenuesPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  const { data: revenue, error } = await supabase
    .from('revenue')
    .select('*')
    .eq('user_id', user?.id)
    

  if (userError) {
    return <p>Error fetching user: {userError.message}</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      <h1>Revenues</h1>
      <h2>Logged in as: {user?.email || user?.id}</h2>
      <pre>{JSON.stringify(revenue, null, 2)}</pre>
    </div>
  )
}
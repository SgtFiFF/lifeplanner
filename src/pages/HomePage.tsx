import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../auth/AuthProvider'

export default function HomePage() {
  const { session } = useAuth()
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    supabase
      .from('items')
      .select('*', { count: 'exact', head: true })
      .then(({ count }) => setCount(count))
  }, [])

  return (
    <main className="p-6 space-y-3">
      <h1 className="text-2xl font-semibold">Hallo {session?.user.email}</h1>
      <p>Aufgaben in der Datenbank: {count ?? '…'}</p>
      <button
        onClick={() => supabase.auth.signOut()}
        className="rounded-lg bg-slate-800 text-white px-4 py-2"
      >
        Abmelden
      </button>
    </main>
  )
}
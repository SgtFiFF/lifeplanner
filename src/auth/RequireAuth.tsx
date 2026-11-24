import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useAuth } from './AuthProvider'

export function RequireAuth({ children }: { children: ReactNode }) {
  const { session, loading } = useAuth()
  if (loading) return <div className="p-6 text-slate-500">Lade…</div>
  if (!session) return <Navigate to="/login" replace />
  return <>{children}</>
}
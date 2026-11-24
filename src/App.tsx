import { createHashRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './auth/AuthProvider'
import { RequireAuth } from './auth/RequireAuth'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

const router = createHashRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/', element: <RequireAuth><HomePage /></RequireAuth> },
])

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
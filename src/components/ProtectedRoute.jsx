import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { user } = useSelector(s => s.auth)
  const location = useLocation()
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />
  if (requireAdmin && !user.isAdmin) return <Navigate to="/" replace />
  return children
}

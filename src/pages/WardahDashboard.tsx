import { WardahDashboard } from '../components/WardahDashboard'
import { ProtectedRoute } from '../components/ProtectedRoute'

export function WardahDashboardPage() {
  return (
    <ProtectedRoute>
      <WardahDashboard />
    </ProtectedRoute>
  )
}
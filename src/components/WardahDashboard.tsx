import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Button } from './ui/button'
import { Download, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface FootprintSubmission {
  id: string
  created_at: string
  company_name: string
  contact_email: string
  status: string
  input_data: {
    location: {
      zip_code: string
      heating_source: string
    }
    vehicles: Array<{
      miles: number
      milesInputType: string
      mpg: number
    }>
    vehicle_maintenance: boolean
    home_energy: {
      natural_gas: { value: number; unit: string }
      electricity: { value: number; unit: string }
      fuel_oil: number
      propane: number
    }
    recycling: {
      aluminum: boolean
      glass: boolean
      plastic: boolean
      newspaper: boolean
      magazines: boolean
    }
    upgrades: {
      heating: boolean
      washer: boolean
    }
  }
  results: {
    vehicle_emissions: {
      total: number
      adjusted: number
    }
    home_energy_emissions: {
      total: number
      natural_gas: number
      electricity: number
      fuel_oil: number
      propane: number
    }
    waste_savings: number
    upgrades_savings: number
    emissions_before_upgrades: number
    final_emissions: number
    recommendations: string[]
  }
  total_emissions: number
}

export function WardahDashboard() {
  const [submissions, setSubmissions] = useState<FootprintSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      navigate('/wardah')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const downloadCSV = () => {
    if (!submissions.length) return

    // Convert submissions to CSV format with detailed information
    const headers = [
      'Date',
      'Company',
      'Contact Email',
      'Status',
      'ZIP Code',
      'Total Emissions (lbs)',
      'Vehicle Emissions',
      'Home Energy Emissions',
      'Waste Savings',
      'Upgrades Savings',
      'Final Emissions',
      'Recommendations'
    ]

    const rows = submissions.map(submission => [
      new Date(submission.created_at).toLocaleDateString(),
      submission.company_name,
      submission.contact_email,
      submission.status,
      submission.input_data?.location?.zip_code || '',
      submission.total_emissions?.toString() || '0',
      submission.results?.vehicle_emissions?.adjusted?.toString() || '0',
      submission.results?.home_energy_emissions?.total?.toString() || '0',
      submission.results?.waste_savings?.toString() || '0',
      submission.results?.upgrades_savings?.toString() || '0',
      submission.results?.final_emissions?.toString() || '0',
      submission.results?.recommendations?.join('; ') || ''
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.href = url
    link.setAttribute('download', `footprint-submissions-${new Date().toISOString().split('T')[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const { data, error } = await supabase
          .from('footprint_submissions')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error

        setSubmissions(data)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch submissions')
      } finally {
        setLoading(false)
      }
    }

    fetchSubmissions()
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading submissions...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Carbon Footprint Submissions</CardTitle>
            <CardDescription className="mt-1">
              View and manage all company submissions
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={downloadCSV}
              disabled={submissions.length === 0}
              variant="secondary"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CSV
            </Button>
            <Button
              onClick={handleLogout}
              variant="destructive"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>ZIP Code</TableHead>
                <TableHead>Total Emissions</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>
                    {new Date(submission.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{submission.company_name}</TableCell>
                  <TableCell>{submission.contact_email}</TableCell>
                  <TableCell>{submission.input_data?.location?.zip_code || '-'}</TableCell>
                  <TableCell>
                    {submission.total_emissions?.toLocaleString() || '0'} lbs
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      submission.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      submission.status === 'approved' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {submission.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
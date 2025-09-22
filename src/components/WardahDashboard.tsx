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
import { Download } from 'lucide-react'

interface FootprintSubmission {
  id: string
  created_at: string
  company_name: string
  contact_email: string
  emission_data: any
  status: string
}

export function WardahDashboard() {
  const [submissions, setSubmissions] = useState<FootprintSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const downloadCSV = () => {
    if (!submissions.length) return

    // Convert submissions to CSV format
    const headers = ['Date', 'Company', 'Contact Email', 'Status']
    const rows = submissions.map(submission => [
      new Date(submission.created_at).toLocaleDateString(),
      submission.company_name,
      submission.contact_email,
      submission.status
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
          <Button
            onClick={downloadCSV}
            disabled={submissions.length === 0}
            className="ml-auto"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CSV
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Contact</TableHead>
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
                  <TableCell>{submission.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
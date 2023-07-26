import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function Dashboard() {
  return <Head title="Admin Dashboard" />
}

Dashboard.layout = (page: ReactNode) => <DashboardLayout children={page} />

import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function Mail() {
  return <Head title="Admin Dashboard" />
}

Mail.layout = (page: ReactNode) => <DashboardLayout children={page} />

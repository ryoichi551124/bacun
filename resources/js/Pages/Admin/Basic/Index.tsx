import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function Basic() {
  return <Head title="Admin Dashboard" />
}

Basic.layout = (page: ReactNode) => <DashboardLayout children={page} />

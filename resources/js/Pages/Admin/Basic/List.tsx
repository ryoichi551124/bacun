import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function BasicList() {
  return <Head title="Admin Dashboard" />
}

BasicList.layout = (page: ReactNode) => <DashboardLayout children={page} />

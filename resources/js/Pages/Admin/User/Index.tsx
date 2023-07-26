import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function User() {
  return <Head title="Admin User Setting" />
}

User.layout = (page: ReactNode) => <DashboardLayout children={page} />

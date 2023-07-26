import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function Category() {
  return <Head title="Admin Dashboard" />
}

Category.layout = (page: ReactNode) => <DashboardLayout children={page} />

import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function CategoryList() {
  return <Head title="Admin Dashboard" />
}

CategoryList.layout = (page: ReactNode) => <DashboardLayout children={page} />

import { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function UserList() {
  return <Head title="Admin User Setting" />
}

UserList.layout = (page: ReactNode) => <DashboardLayout children={page} />

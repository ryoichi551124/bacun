import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'

export default function Dashboard({ auth }: PageProps) {
  return (
    <DashboardLayout admin={auth.user}>
      <Head title="Admin Dashboard" />
    </DashboardLayout>
  )
}

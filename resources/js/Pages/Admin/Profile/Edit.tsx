import { Head } from '@inertiajs/react'
import type { PageProps } from '@/Types'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import { usePage } from '@inertiajs/react'

export default function Edit({
  auth,
  mustVerifyEmail,
  status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
  const props = usePage().props

  return (
    <DashboardLayout>
      <Head title="Admin Dashboard" />
      <div>{auth.user.name}</div>
      <div>{mustVerifyEmail}</div>
      <div>{status}</div>
    </DashboardLayout>
  )
}

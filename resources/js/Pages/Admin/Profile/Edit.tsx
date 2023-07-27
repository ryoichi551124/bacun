/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import DashboardLayout from '@/Layouts/Admin/DashboardLayout'
import { router, usePage } from '@inertiajs/react'

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

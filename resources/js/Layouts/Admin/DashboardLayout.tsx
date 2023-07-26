/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'
import { usePage } from '@inertiajs/react'
import { AdminAuth } from '@/types'
import SideBar from '@/Components/Admin/Layout/SideBar'
import Header from '@/Components/Admin/Layout/Header'
import { StoreProvider } from '@/Providers/store'

const container = css`
  display: flex;
`
const rightContainer = css`
  width: 100%;
`

export default function DashboardLayout({ children }: PropsWithChildren) {
  const { props } = usePage<AdminAuth>()
  const admin = props.auth.user

  return (
    <StoreProvider>
      <div css={container}>
        <SideBar />
        <div css={rightContainer}>
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </StoreProvider>
  )
}

/** @jsxImportSource @emotion/react */
import { useState, PropsWithChildren, ReactNode } from 'react'
import { css } from '@emotion/react'
import { Link } from '@inertiajs/react'
import { Admin } from '@/types'
import SideBar from '@/Components/Admin/SideBar'
import Header from '@/Components/Admin/Header'
import { StoreProvider } from '@/Providers/store'

const container = css`
  display: flex;
`
const rightContainer = css`
  width: 100%;
`

export default function DashboardLayout({
  admin,
  children,
}: PropsWithChildren<{ admin: Admin }>) {
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

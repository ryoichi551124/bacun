/** @jsxImportSource @emotion/react */
import { ThemeProvider, Global, css } from '@emotion/react'
import { PropsWithChildren } from 'react'
import { usePage } from '@inertiajs/react'
import { AdminAuth } from '@/types'
import SideBar from '@/Components/Admin/Layout/SideBar'
import Header from '@/Components/Admin/Layout/Header'
import { StoreProvider } from '@/Providers/store'
import { global } from '@/Styles/Global'

const container = css`
  display: flex;
`
const rightContainer = css`
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
`
const mainContainer = css`
  width: 100%;
  min-height: calc(100vh - 64px);
  margin-top: 64px;
  padding: 1rem 2rem;
`

export default function DashboardLayout({ children }: PropsWithChildren) {
  const { props } = usePage<AdminAuth>()
  const admin = props.auth.user

  return (
    <>
      <Global styles={global} />
      <StoreProvider>
        <div css={container}>
          <SideBar />
          <div css={rightContainer}>
            <Header />
            <main>
              <div css={mainContainer}>{children}</div>
            </main>
          </div>
        </div>
      </StoreProvider>
    </>
  )
}

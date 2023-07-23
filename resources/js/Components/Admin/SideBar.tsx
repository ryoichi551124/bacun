/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useSelector } from 'react-redux'
import { RootState } from '@/Stores'
import AdminLogo from '@/Components/Admin/AdminLogo'
import SideMenu from '@/Components/Admin/SideMenu'

const background = '#212529'
const width = 250

const container = css`
  width: 4rem;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  background: ${background};
  transition: 0.5s;
`
const open = css`
  width: ${width}px;
`

export default function SideBar() {
  const isOpen = useSelector(
    (state: RootState) => state.isSideOpenReducer.isOpen,
  )

  return (
    <aside css={[container, isOpen && open]}>
      <AdminLogo />
      <SideMenu />
    </aside>
  )
}

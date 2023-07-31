/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useSelector } from 'react-redux'
import { RootState } from '@/Stores'
import { theme } from '@/Theme/theme'
import AdminLogo from '@/Components/Admin/Layout/AdminLogo'
import SideNavi from '@/Components/Admin/Layout/SideNavi'

const container = css`
  width: ${theme.width.sideClose};
  height: 100vh;
  overflow-y: scroll;
  background: ${theme.colors.darkGray};
  transition: 0.5s;
`
const open = css`
  width: ${theme.width.sideOpen};
`

export default function SideBar() {
  const isOpen = useSelector(
    (state: RootState) => state.isSideOpenReducer.isOpen,
  )

  return (
    <aside css={[container, isOpen && open]}>
      <AdminLogo />
      <SideNavi />
    </aside>
  )
}

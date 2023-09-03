/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useSelector } from 'react-redux'
import { RootState } from '@/Stores'
import { colors, utils } from '@/Styles'
import AdminLogo from '@/Components/Admin/Common/AdminLogo'
import SideNav from '@/Components/Admin/Layout/SideNav'

const container = css`
  width: ${utils.width.sideClose};
  height: 100vh;
  overflow-y: scroll;
  background: ${colors.darkGray};
  transition: 0.5s;
`
const open = css`
  width: ${utils.width.sideOpen};
`

/**
 * 管理画面サイドバー
 */
export default function SideBar() {
  // サイドバーの状態管理
  const isOpen = useSelector(
    (state: RootState) => state.isSideOpenReducer.isOpen,
  )

  return (
    <aside css={[container, isOpen && open]}>
      <AdminLogo />
      <SideNav />
    </aside>
  )
}

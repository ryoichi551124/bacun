/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors, utils } from '@/Styles'
import MenuIcon from '@mui/icons-material/Menu'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Stores'
import { setIsOpen } from '@/Stores/isSideOpen'
import AdminMenu from '@/Components/Admin/Layout/AdminMenu'

const container = css`
  position: fixed;
  z-index: 999;
  width: calc(100% - ${utils.width.sideOpen});
  height: ${utils.height.headerHeight};
  background: ${colors.lightGray};
  padding: 0.5rem 1rem;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
`
const open = css`
  width: calc(100% - ${utils.width.sideClose});
`
const inner = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`

/**
 * 管理画面ヘッダー
 */
export default function Header() {
  // サイドバーの状態管理
  const isOpen = useSelector(
    (state: RootState) => state.isSideOpenReducer.isOpen,
  )
  const dispatch = useDispatch()
  const changeSide = () => {
    dispatch(setIsOpen(!isOpen))
  }

  return (
    <header css={[container, !isOpen && open]}>
      <div css={inner}>
        <div>
          {/* サイドバーオープンクローズ */}
          <button onClick={changeSide}>
            <MenuIcon />
          </button>
        </div>
        <AdminMenu />
      </div>
    </header>
  )
}

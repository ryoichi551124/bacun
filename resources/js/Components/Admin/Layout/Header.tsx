/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch } from 'react-redux'
import { setIsOpen } from '@/Stores/isSideOpen'
import { useSelector } from 'react-redux'
import { RootState } from '@/Stores'
import AdminMenu from '@/Components/Admin/Layout/AdminMenu'

const width = 'calc(100%)'
const background = '#f2f2f2'

const container = css`
  width: ${width};
  height: 4rem;
  background: ${background};
  padding: 0.5rem 1rem;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
`
const inner = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`

export default function Header() {
  const isOpen = useSelector(
    (state: RootState) => state.isSideOpenReducer.isOpen,
  )
  const dispatch = useDispatch()
  const changeSide = () => {
    dispatch(setIsOpen(!isOpen))
  }

  return (
    <header css={container}>
      <div css={inner}>
        <div>
          <button onClick={changeSide}>
            <MenuIcon />
          </button>
        </div>
        <AdminMenu />
      </div>
    </header>
  )
}
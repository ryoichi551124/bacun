/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import SellIcon from '@mui/icons-material/Sell'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import NavLink from '@/Components/Admin/NavLink'

const container = css`
  width: 200px;
  display: flex;
  align-items: center;
  padding: .5rem;
  color: #fff;
`
const inner = css`
  width: 100%;
  height: 3rem;
  padding: .5rem 0;
`
const navMenu = css`
  display: flex;
  align-items: center;
  margin: .5rem 0;
  padding: 1rem .5rem;
  border-radius: 5px;
`
const icon = css`
  margin-right: 1.5rem;
`
const title = css`
  width: 100%;
`

export default function SideMenu() {
  return (
    <div css={container}>
      <div css={inner}>
        <NavLink
          css={navMenu}
          active={route().current('admin.dashboard')}
          href={route('admin.dashboard')}
        >
          <ShoppingBagIcon css={icon} />
          <div css={title}>受注管理</div>
        </NavLink>
        <NavLink
          css={navMenu}
          active={route().current('admin.test')}
          href={route('admin.dashboard')}
        >
          <SellIcon css={icon} />
          <div>商品管理</div>
        </NavLink>
        <NavLink
          css={navMenu}
          active={route().current('admin.test')}
          href={route('admin.dashboard')}
        >
          <EmailIcon css={icon} />
          <div>メール管理</div>
        </NavLink>
        <NavLink
          css={navMenu}
          active={route().current('admin.test')}
          href={route('admin.dashboard')}
        >
          <PersonIcon css={icon} />
          <div>顧客管理</div>
        </NavLink>
        <NavLink
          css={navMenu}
          active={route().current('admin.test')}
          href={route('admin.dashboard')}
        >
          <ManageAccountsIcon css={icon} />
          <div>管理者設定</div>
        </NavLink>
      </div>
    </div>
  )
}

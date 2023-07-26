/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import SellIcon from '@mui/icons-material/Sell'
import CategoryIcon from '@mui/icons-material/Category'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import NavLink from '@/Components/Admin/Layout/NavLink'

const container = css`
  width: 200px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: #fff;
`
const inner = css`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 0;
`
const navMenu = css`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  padding: 1rem 0.5rem;
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
          active={route().current('admin.order')}
          href={route('admin.order')}
        >
          <ShoppingBagIcon css={icon} />
          <div css={title}>受注管理</div>
        </NavLink>
        <NavLink
          css={navMenu}
          active={route().current('admin.product')}
          href={route('admin.product')}
        >
          <SellIcon css={icon} />
          <div>商品管理</div>
        </NavLink>
        <NavLink
          css={navMenu}
          active={route().current('admin.category')}
          href={route('admin.category')}
        >
          <CategoryIcon css={icon} />
          <div>カテゴリー</div>
        </NavLink>
        <NavLink
          css={navMenu}
          active={route().current('admin.shipping')}
          href={route('admin.shipping')}
        >
          <LocalShippingIcon css={icon} />
          <div>配送管理</div>
        </NavLink>
        <NavLink
          css={navMenu}
          active={route().current('admin.mail')}
          href={route('admin.mail')}
        >
          <EmailIcon css={icon} />
          <div>メール管理</div>
        </NavLink>
        <NavLink
          css={navMenu}
          active={route().current('admin.user')}
          href={route('admin.user')}
        >
          <PersonIcon css={icon} />
          <div>顧客管理</div>
        </NavLink>
        <NavLink
          css={navMenu}
          active={route().current('admin.admin')}
          href={route('admin.admin')}
        >
          <ManageAccountsIcon css={icon} />
          <div>管理者設定</div>
        </NavLink>
        <NavLink
          css={navMenu}
          active={route().current('admin.basic')}
          href={route('admin.basic')}
        >
          <SettingsIcon css={icon} />
          <div>基本情報</div>
        </NavLink>
      </div>
    </div>
  )
}

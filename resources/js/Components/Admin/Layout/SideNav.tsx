/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { utils } from '@/Styles'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import SellIcon from '@mui/icons-material/Sell'
import CategoryIcon from '@mui/icons-material/Category'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import SideNavLink from '@/Components/Admin/Layout/SideNavLink'

const container = css`
  width: ${utils.width.sideOpen};
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

export default function SideNav() {
  return (
    <div css={container}>
      <div css={inner}>
        <SideNavLink
          css={navMenu}
          active={route().current('admin.order.*')}
          href={route('admin.order.list')}
        >
          <ShoppingBagIcon css={icon} />
          <div css={title}>受注管理</div>
        </SideNavLink>
        <SideNavLink
          css={navMenu}
          active={route().current('admin.product.*')}
          href={route('admin.product.list')}
        >
          <SellIcon css={icon} />
          <div>商品管理</div>
        </SideNavLink>
        <SideNavLink
          css={navMenu}
          active={route().current('admin.category.*')}
          href={route('admin.category.list')}
        >
          <CategoryIcon css={icon} />
          <div>カテゴリー</div>
        </SideNavLink>
        <SideNavLink
          css={navMenu}
          active={route().current('admin.shipping')}
          href={route('admin.shipping.list')}
        >
          <LocalShippingIcon css={icon} />
          <div>配送管理</div>
        </SideNavLink>
        <SideNavLink
          css={navMenu}
          active={route().current('admin.mail')}
          href={route('admin.mail')}
        >
          <EmailIcon css={icon} />
          <div>メール管理</div>
        </SideNavLink>
        <SideNavLink
          css={navMenu}
          active={route().current('admin.user.*')}
          href={route('admin.user.list')}
        >
          <PersonIcon css={icon} />
          <div>顧客管理</div>
        </SideNavLink>
        <SideNavLink
          css={navMenu}
          active={route().current('admin.admin.*')}
          href={route('admin.admin.list')}
        >
          <ManageAccountsIcon css={icon} />
          <div>管理者設定</div>
        </SideNavLink>
        <SideNavLink
          css={navMenu}
          active={route().current('admin.basic.*')}
          href={route('admin.basic.edit')}
        >
          <SettingsIcon css={icon} />
          <div>基本情報</div>
        </SideNavLink>
      </div>
    </div>
  )
}

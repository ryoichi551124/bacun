/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { utils } from '@/Styles'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import SellIcon from '@mui/icons-material/Sell'
import CategoryIcon from '@mui/icons-material/Category'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import SideNavLink from '@/Components/Admin/Layout/SideNavLink'
import SvgIcon from '@mui/material/SvgIcon'

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

// ナビゲーションメニューの型
type NavMenu = {
  title: string
  link: string
  icon: typeof SvgIcon
}

// ナビゲーションメニュー配列
const navigations: NavMenu[] = [
  { title: '受注管理', link: 'order', icon: ShoppingBagIcon },
  { title: '商品管理', link: 'product', icon: SellIcon },
  { title: 'カテゴリー管理', link: 'category', icon: CategoryIcon },
  { title: '配送管理', link: 'shipping', icon: LocalShippingIcon },
  { title: '送料管理', link: 'delivery', icon: CurrencyYenIcon },
  { title: 'メール管理', link: 'mail', icon: EmailIcon },
  { title: '顧客管理', link: 'user', icon: PersonIcon },
  { title: '管理者設定', link: 'admin', icon: ManageAccountsIcon },
  { title: '基本情報', link: 'basic', icon: SettingsIcon },
]

/**
 * サイドバーナビ
 */
export default function SideNav() {
  return (
    <div css={container}>
      <div css={inner}>
        {navigations &&
          navigations.map((nav) => (
            <SideNavLink
              key={nav.title}
              css={navMenu}
              active={route().current(`admin.${nav.link}.*`)}
              href={route(
                `admin.${nav.link}.${nav.link !== 'basic' ? 'list' : 'edit'}`,
              )}
            >
              <SvgIcon component={nav.icon} css={icon} />
              <div css={title}>{nav.title}</div>
            </SideNavLink>
          ))}
      </div>
    </div>
  )
}

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, InertiaLinkProps } from '@inertiajs/react'

const link = css`
  height: 3rem;
`
const activeLink = css`
  background: #ccc;
  color: #212529;
`

/**
 * サイドバーナビ、Linkのラッパー
 */
export default function SideNavLink({
  active = false,
  children,
  ...props
}: InertiaLinkProps & { active: boolean }) {
  return (
    <Link {...props} css={[link, active && activeLink]}>
      {children}
    </Link>
  )
}

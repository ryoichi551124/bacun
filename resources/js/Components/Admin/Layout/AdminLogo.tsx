/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from '@inertiajs/react'

const container = css`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0.5rem;
  color: #fff;
  border-bottom: 1px solid #ccc;
`
const inner = css`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`
const icon = css`
  margin-right: 1.5rem;
`

export default function AdminLogo() {
  return (
    <div css={container}>
      <Link href="/admin/dashboard" css={inner}>
        <HomeIcon css={icon} />
        <div>bacun</div>
      </Link>
    </div>
  )
}

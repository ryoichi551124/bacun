/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from '@inertiajs/react'
import { colors } from '@/Styles'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const icon = css`
  color: ${colors.primary};
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s;
  }
`

type AddLinkProps = {
  addLink: string
}

/**
 * 新規作成ボタン
 */
export default function AddLinkIcon({ addLink }: AddLinkProps) {
  return (
    <Link href={route(addLink)}>
      <AddCircleIcon css={icon} fontSize="large" />
    </Link>
  )
}

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from '@inertiajs/react'
import { theme } from '@/Theme/theme'
import AddCircleIcon from '@mui/icons-material/AddCircle'

type AddLinkProps = {
  addLink: string
}

const icon = css`
  color: ${theme.colors.primary};
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s;
  }
`

export default function AddLinkIcon({ addLink }: AddLinkProps) {
  return (
    <Link href={route(addLink)}>
      <AddCircleIcon css={icon} fontSize="large" />
    </Link>
  )
}

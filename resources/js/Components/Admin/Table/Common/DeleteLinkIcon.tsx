/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from '@inertiajs/react'
import { theme } from '@/Theme/theme'
import DeleteIcon from '@mui/icons-material/Delete'

type DeleteLinkProps = {
  deleteLink: string
}

const icon = css`
  color: ${theme.colors.delete};
  margin: 0 0.5rem;
`

export default function DeleteLinkIcon({ deleteLink }: DeleteLinkProps) {
  return (
    <Link href={route(deleteLink)}>
      <DeleteIcon css={icon} />
    </Link>
  )
}

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from '@inertiajs/react'
import { theme } from '@/Theme/theme'
import EditIcon from '@mui/icons-material/Edit'

type EditLinkProps = {
  editLink: string
}

const icon = css`
  color: ${theme.colors.secondary};
  margin: 0 0.5rem;
`

export default function EditLinkIcon({ editLink }: EditLinkProps) {
  return (
    <Link href={route(editLink)}>
      <EditIcon css={icon} />
    </Link>
  )
}

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { router } from '@inertiajs/react'
import { theme } from '@/Theme/theme'
import EditIcon from '@mui/icons-material/Edit'

type EditLinkProps = {
  editLink: string
  id: number
}

const icon = css`
  color: ${theme.colors.secondary};
  margin: 0 0.5rem;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s;
  }
`

export default function EditLinkIcon({ editLink, id }: EditLinkProps) {
  const editAdmin = () => {
    router.get(`${editLink}${id}`)
  }

  return (
    <button onClick={editAdmin}>
      <EditIcon css={icon} />
    </button>
  )
}

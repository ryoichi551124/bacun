/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { router } from '@inertiajs/react'
import { colors } from '@/Styles'
import DeleteIcon from '@mui/icons-material/Delete'

type DeleteLinkProps = {
  deleteLink: string
  id: number
}

const icon = css`
  color: ${colors.delete};
  margin: 0 0.5rem;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s;
  }
`

export default function DeleteLinkIcon({ deleteLink, id }: DeleteLinkProps) {
  const deleteAdmin = () => {
    router.delete(`${deleteLink}${id}`)
  }

  return (
    <button onClick={deleteAdmin}>
      <DeleteIcon css={icon} />
    </button>
  )
}

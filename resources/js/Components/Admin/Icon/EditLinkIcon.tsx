/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { router } from '@inertiajs/react'
import { colors } from '@/Styles'
import EditIcon from '@mui/icons-material/Edit'

const icon = css`
  color: ${colors.secondary};
  margin: 0 0.5rem;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s;
  }
`

type EditLinkProps = {
  editLink: string
  id: number
}

/**
 * 編集ボタン
 */
export default function EditLinkIcon({ editLink, id }: EditLinkProps) {
  /** 編集処理のリンク */
  const editAdmin = () => {
    router.get(`${editLink}${id}`)
  }

  return (
    <button onClick={editAdmin}>
      <EditIcon css={icon} />
    </button>
  )
}

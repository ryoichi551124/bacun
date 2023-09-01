/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { router } from '@inertiajs/react'
import { colors } from '@/Styles'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

type DeleteLinkProps = {
  deleteLink: string
  id: number
  target: string
  disabled?: boolean
}

const icon = css`
  color: ${colors.delete};
  margin: 0 0.5rem;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s;
  }
`
const noEvent = css`
  pointer-events: none;
  color: ${colors.gray};
  &:hover {
    transform: none;
  }
`

export default function DeleteLinkIcon({
  deleteLink,
  id,
  target,
  disabled,
}: DeleteLinkProps) {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteAdmin = () => {
    setOpen(false)
    router.delete(`${deleteLink}${id}`)
  }

  return (
    <>
      <button onClick={handleClickOpen} disabled={disabled}>
        <DeleteIcon css={[icon, disabled && noEvent]} />
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{target}を削除してもよろしいですか？</DialogTitle>
        <DialogContent>
          <DialogContentText>
            この操作は取り消すことが出来ません
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={deleteAdmin} autoFocus>
            削除する
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

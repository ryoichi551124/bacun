/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import CloseIcon from '@mui/icons-material/Close'
import type { FlashMessage } from '@/Types'

const wrap = css`
  width: 100%;
  padding-top: 0.5rem;
`

export default function AlertMessage({ severity, message }: FlashMessage) {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <div css={wrap}>
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              size="small"
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    </div>
  )
}

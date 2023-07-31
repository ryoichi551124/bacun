import { Link } from '@inertiajs/react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { usePage } from '@inertiajs/react'
import type { AdminAuth } from '@/types'

export default function AdminMenu() {
  const { props } = usePage<AdminAuth>()
  const admin = props.auth.user

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <button onClick={handleClick}>{admin.name}</button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href={route('admin.profile.edit')}>登録情報の編集</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link method="post" href={route('admin.logout')} as="button">
            ログアウト
          </Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

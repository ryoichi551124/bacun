/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage } from '@inertiajs/react'
import { theme } from '@/Theme/theme'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import AddLinkIcon from '@/Components/Admin/Table/Common/AddLinkIcon'
import EditLinkIcon from '@/Components/Admin/Table/Common/EditLinkIcon'
import DeleteLinkIcon from '@/Components/Admin/Table/Common/DeleteLinkIcon'
import type { Admin } from '@/types'
import type { AdminRoles } from '@/types/config'

const container = css`
  padding: 1.5rem 0;
`
const card = css`
  width: 100%;
  box-shadow: ${theme.util.cardShadow};
  border-radius: 10px;
`
const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.lightGray};
  font-size: ${theme.fontSize.md};
  padding: 1rem;
`
const edit = css`
  margin-right: 2rem;
`

type AdminData = {
  admins: Admin[]
  roles: AdminRoles
}

export default function AdminTable() {
  const { props } = usePage<AdminData>()
  const admins = props.admins
  const adminRoles = props.roles

  return (
    <div css={container}>
      <div css={card}>
        <div css={header}>
          <div>List</div>
          <AddLinkIcon addLink="admin.admin.list" />
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>メール</TableCell>
              <TableCell>権限</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins.map((admin) => (
              <TableRow
                key={admin.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {admin.id}
                </TableCell>
                <TableCell>{admin.name}</TableCell>
                <TableCell>{admin.email}</TableCell>
                <TableCell>{adminRoles[admin.role]}</TableCell>
                <TableCell align="right" width="150">
                  <EditLinkIcon editLink="admin.admin.list" />
                  <DeleteLinkIcon deleteLink="admin.admin.list" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

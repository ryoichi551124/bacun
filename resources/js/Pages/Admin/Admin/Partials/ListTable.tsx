/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage } from '@inertiajs/react'
import Card from '@/Components/Admin/Layout/Card'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import AddLinkIcon from '@/Components/Admin/Icon/AddLinkIcon'
import EditLinkIcon from '@/Components/Admin/Icon/EditLinkIcon'
import DeleteLinkIcon from '@/Components/Admin/Icon/DeleteLinkIcon'
import type { Admin } from '@/types'
import type { AdminRoles } from '@/types/config'

type AdminData = {
  admins: Admin[]
  roles: AdminRoles
}

export default function AdminListTable() {
  const { props } = usePage<AdminData>()
  const admins = props.admins
  const adminRoles = props.roles

  return (
    <Card
      title="管理者一覧"
      icon={<AddLinkIcon addLink="admin.admin.create.index" />}
    >
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
    </Card>
  )
}

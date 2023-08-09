/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, usePage } from '@inertiajs/react'
import AlertMessage from '@/Components/Admin/FeedBack/AlertMessage'
import Card from '@/Components/Admin/Common/Card'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import AddLinkIcon from '@/Components/Admin/Icon/AddLinkIcon'
import EditLinkIcon from '@/Components/Admin/Icon/EditLinkIcon'
import DeleteLinkIcon from '@/Components/Admin/Icon/DeleteLinkIcon'
import type { Admin, AdminRoles, FlashMessage } from '@/Types'

type AdminData = {
  admins: Admin[]
  roles: AdminRoles
  flash: FlashMessage
}

export default function AdminListTable() {
  const { admins, roles, flash } = usePage<AdminData>().props

  return (
    <>
      {flash.message && <AlertMessage {...flash} />}
      <Card
        title="管理者一覧"
        icon={<AddLinkIcon addLink="admin.admin.create" />}
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
                <TableCell>{roles[admin.role]}</TableCell>
                <TableCell align="right" width="150">
                  <EditLinkIcon editLink="/admin/admin/edit/" id={admin.id} />
                  <DeleteLinkIcon
                    deleteLink="/admin/admin/list/delete/"
                    id={admin.id}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
